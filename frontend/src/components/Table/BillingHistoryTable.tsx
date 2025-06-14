import React, { useState } from 'react';
import { billings, BillingStatus, BillingTableColumnType } from './types';
import {
  Button,
  Pagination,
  Table,
  TableColumnsType,
  TableProps,
  Typography,
} from 'antd';
import BillingPendingIcon from '../icons/BillingPendingIcon';
import BillingActiveIcon from '../icons/BillingActiveIcon';
import TrashIcon from '../icons/TrashIcon';
import EyeIcon from '../icons/EyeIcon';
import DotVerticalIcon from '../icons/DotVerticalIcon';

const data: BillingTableColumnType[] = billings;

export default function BillingHistoryTable() {
  const columns: TableColumnsType<BillingTableColumnType> = [
    {
      title: '# ORDER ID',
      dataIndex: 'orderId',
      width: '25%',
      render: (billing: BillingTableColumnType['orderId']) => (
        <Typography.Text className="font-normal text-[13px]/[20px] text-[#2F2B3DB2]">
          #{billing}
        </Typography.Text>
      ),
    },
    {
      title: 'Status',
      dataIndex: 'status',
      width: '15%',
      render: (status: BillingTableColumnType['status']) => (
        <>
          {status === BillingStatus.PENDING && <BillingPendingIcon />}
          {status === BillingStatus.ACTIVE && <BillingActiveIcon />}
        </>
      ),
    },
    {
      title: 'Total',
      dataIndex: 'total',
      width: '15%',
      render: (total: BillingTableColumnType['total']) => (
        <>
          <Typography.Text className="font-normal text-[15px]/[22px] text-[#2F2B3DE5]">
            ${total}
          </Typography.Text>
        </>
      ),
    },
    {
      title: 'Issued Date',
      dataIndex: 'issuedDate',
      width: '20%',
      render: (issuedDate: BillingTableColumnType['issuedDate']) => (
        <>
          <Typography.Text className="font-normal text-[15px]/[22px] text-[#2F2B3DB2]">
            {issuedDate}
          </Typography.Text>
        </>
      ),
    },
    {
      title: 'BALANCE',
      dataIndex: 'balance',
      width: '15%',
      render: (balance: BillingTableColumnType['balance']) => (
        <>
          <Typography.Text className="font-normal text-[15px]/[22px] text-[#2F2B3DB2]">
            ${balance}
          </Typography.Text>
        </>
      ),
    },
    {
      title: 'ACTION',
      dataIndex: 'action',
      render: (_: any, record: BillingTableColumnType) => (
        <div key={record.id} className="flex flex-row">
          <Button className="p-2 border-none" icon={<TrashIcon />} />
          <Button
            className="p-2 border-none"
            icon={<EyeIcon />}
            // onClick={() => handleClick(record.id)}
          />
          <Button className="p-2 border-none" icon={<DotVerticalIcon />} />
        </div>
      ),
    },
  ];

  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 5,
    total: data.length,
  });

  const rowSelection: TableProps<BillingTableColumnType>['rowSelection'] = {
    onChange: (
      selectedRowKeys: React.Key[],
      selectedRows: BillingTableColumnType[],
    ) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        'selectedRows: ',
        selectedRows,
      );
    },
  };

  return (
    <Table<BillingTableColumnType>
      rowKey="id"
      rowSelection={{ type: 'checkbox', ...rowSelection }}
      columns={columns}
      dataSource={data}
      pagination={{
        current: pagination.current,
        pageSize: pagination.pageSize,
        total: pagination.total,
        showSizeChanger: false,
        showLessItems: true,
        position: [],
        onChange: (page, pageSize) =>
          setPagination((prev) => ({ ...prev, current: page, pageSize })),
      }}
      footer={() => {
        const { current, pageSize, total } = pagination;
        const start = (current - 1) * pageSize + 1;
        const end = Math.min(current * pageSize, total);

        return (
          <div className="flex items-center justify-between py-4">
            <div className="text-[15px]/[22px] text-[#2F2B3D66] font-normal">
              Showing {start} to {end} of {total} entries
            </div>
            <Pagination
              current={current}
              pageSize={pageSize}
              total={total}
              showSizeChanger={false}
              showLessItems
              onChange={(page, pageSize) =>
                setPagination((prev) => ({ ...prev, current: page, pageSize }))
              }
            />
          </div>
        );
      }}
    />
  );
}
