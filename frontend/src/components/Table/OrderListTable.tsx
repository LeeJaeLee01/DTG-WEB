import React, { useState } from 'react';
import { orders, OrderTableColumnType } from './types';
import {
  Button,
  Image,
  Pagination,
  Table,
  TableColumnsType,
  TableProps,
  Typography,
} from 'antd';
import DotVerticalIcon from '../icons/DotVerticalIcon';
import './index.css';

const data: OrderTableColumnType[] = orders;

export default function OrderListTable() {
  const columns: TableColumnsType<OrderTableColumnType> = [
    {
      title: 'ORDER',
      dataIndex: 'order',
      width: '25%',
      render: (order: OrderTableColumnType['order']) => (
        <>
          <div className="flex flex-row items-center gap-4 ">
            <Image
              src={order.cover}
              alt="avatar"
              width={'34px'}
              height={'34px'}
              preview={false}
              style={{
                objectFit: 'cover',
                borderRadius: '50%',
              }}
            />
            <div className="flex justify-center items-center">
              <Typography.Text className="font-medium text-[15px]/[22px] text-[#2F2B3DE5]">
                {order.name}
              </Typography.Text>
            </div>
          </div>
        </>
      ),
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      width: '20%',
      render: (amount: OrderTableColumnType['amount']) => (
        <>
          <Typography.Text className="font-normal text-[15px]/[22px] text-[#2F2B3DE5]">
            ${amount}
          </Typography.Text>
        </>
      ),
    },
    {
      title: 'STATUS',
      dataIndex: 'status',
      width: '20%',
      render: (status: OrderTableColumnType['status']) => (
        <>
          <Typography.Text className="font-normal text-[15px]/[22px] text-[#2F2B3DE5]">
            {status}
          </Typography.Text>
        </>
      ),
    },
    {
      title: 'BALANCE AFTER',
      dataIndex: 'balanceAfter',
      width: '20%',
      render: (balanceAfter: OrderTableColumnType['balanceAfter']) => (
        <>
          <Typography.Text className="font-normal text-[15px]/[22px] text-[#2F2B3DB2]">
            ${balanceAfter}
          </Typography.Text>
        </>
      ),
    },
    {
      title: 'ACTION',
      dataIndex: 'action',
      render: (_: any, record: OrderTableColumnType) => (
        <div key={record.id} className="flex">
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

  const rowSelection: TableProps<OrderTableColumnType>['rowSelection'] = {
    onChange: (
      selectedRowKeys: React.Key[],
      selectedRows: OrderTableColumnType[],
    ) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        'selectedRows: ',
        selectedRows,
      );
    },
  };

  return (
    <Table<OrderTableColumnType>
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
