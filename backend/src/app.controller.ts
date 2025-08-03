import {
  Controller,
  Get,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { AppService } from './app.service';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('import')
  @UseInterceptors(FileInterceptor('file'))
  async importFileExcel(@UploadedFile() file: Express.Multer.File) {
    console.log('📂 File upload:', file.filename);

    await this.appService.importFileExcel(file.path);

    return { message: 'Done' };
  }
}
