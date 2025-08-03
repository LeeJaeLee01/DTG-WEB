import { Injectable } from '@nestjs/common';
import * as ExcelJS from 'exceljs';
import { unlinkSync } from 'fs';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  async importFileExcel(filePath: string) {
    console.log('🔄 Đang parse file:', filePath);

    const workbookReader = new ExcelJS.stream.xlsx.WorkbookReader(filePath, {
      entries: 'emit',
      sharedStrings: 'cache',
      hyperlinks: 'emit',
      styles: 'cache',
      worksheets: 'emit',
    });

    let parentHeaders: string[] = [];
    let childHeaders: string[] = [];
    const batch: any[] = [];
    let rowCount = 0;

    for await (const worksheetReader of workbookReader) {
      for await (const row of worksheetReader) {
        const values = (row.values as any[]) || [];

        if (rowCount === 0) {
          // ✅ Lấy parent header, xử lý merge cell: fill giá trị bên trái cho ô trống
          parentHeaders = this.fillMergedHeaders(values.slice(1));
          rowCount++;
          continue;
        }

        if (rowCount === 1) {
          // ✅ Lấy child header
          const rawChild = values
            .slice(1)
            .map((h) => (h ? String(h).trim() : ''));

          // ✅ Ghép parent.child nếu parent khác rỗng
          childHeaders = rawChild.map((child, i) => {
            const parent = parentHeaders[i] || '';
            return parent && parent !== child ? `${parent}.${child}` : child;
          });

          rowCount++;
          continue;
        }

        // ✅ Map dữ liệu từ row 3
        const rowObj = this.mapRowToNestedObject(childHeaders, values.slice(1));
        batch.push(rowObj);

        if (batch.length >= 1000) {
          await this.insertBatch(batch);
          batch.length = 0;
        }

        rowCount++;
      }
    }

    if (batch.length > 0) {
      await this.insertBatch(batch);
    }

    unlinkSync(filePath);
    console.log(`✅ Đã xử lý ${rowCount - 2} rows (bỏ 2 header)`);
    return { totalRows: rowCount - 2 };
  }

  private fillMergedHeaders(headers: any[]): string[] {
    let lastParent = '';
    return headers.map((h) => {
      if (h) lastParent = String(h).trim();
      return lastParent;
    });
  }

  /** ✅ Map row → object nested */
  private mapRowToNestedObject(headers: string[], row: any[]): any {
    const obj: any = {};
    headers.forEach((key, i) => {
      if (!key) return;
      this.setNestedValue(obj, key, row[i]);
    });
    return obj;
  }

  /** ✅ Set value vào nested object */
  private setNestedValue(obj: any, key: string, value: any) {
    const keys = key.split('.');
    let current = obj;
    keys.forEach((k, idx) => {
      if (idx === keys.length - 1) {
        current[k] = value;
      } else {
        if (!current[k]) current[k] = {};
        current = current[k];
      }
    });
  }

  private async insertBatch(batch: any[]) {
    console.log(`📥 Insert batch ${batch.length} rows`);
    // await this.dbService.insert(batch);
  }
}
