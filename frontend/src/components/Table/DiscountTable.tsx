import React, { useState } from 'react';
import { discounts, DiscountStatus, DiscountTableColumnType } from './types';
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
import TextButtonIcon from '../icons/TextButtonIcon';

const data: DiscountTableColumnType[] = discounts;

export default function DiscountTable() {
  const columns: TableColumnsType<DiscountTableColumnType> = [
    {
      title: 'PRODUCT',
      dataIndex: 'product',
      width: '25%',
      render: (product: DiscountTableColumnType['product']) => (
        <>
          <div className="flex flex-row items-center gap-4">
            <Image
              src={product.cover}
              alt="avatar"
              width={'34px'}
              height={'34px'}
              preview={false}
              style={{
                objectFit: 'cover',
                borderRadius: '50%',
              }}
            />
            <div className="flex flex-col ">
              <Typography.Text className="font-medium text-[15px]/[22px] text-[#2F2B3DE5]">
                {product.name}
              </Typography.Text>
              <Typography.Text className="font-normal text-[13px]/[20px] text-[#2F2B3DB2]">
                {product.hashtag}
              </Typography.Text>
            </div>
          </div>
        </>
      ),
    },
    {
      title: 'DATE START',
      dataIndex: 'dateStart',
      width: '25%',
      render: (dateStart: DiscountTableColumnType['dateStart']) => (
        <>
          <Typography.Text className="font-normal text-[15px]/[22px] text-[#2F2B3DE5]">
            {dateStart}
          </Typography.Text>
        </>
      ),
    },
    {
      title: 'DATE END',
      dataIndex: 'dateEnd',
      width: '25%',
      render: (dateEnd: DiscountTableColumnType['dateEnd']) => (
        <>
          <Typography.Text className="font-normal text-[15px]/[22px] text-[#2F2B3DE5]">
            {dateEnd}
          </Typography.Text>
        </>
      ),
    },
    {
      title: 'Status',
      dataIndex: 'status',
      width: '15%',
      render: (status: DiscountTableColumnType['status']) => (
        <>
          {status === DiscountStatus.PUBLISH && (
            <div className="w-fit bg-[#28C76F29] flex justify-center items-center px-[10px] py-[2px]">
              <Typography.Text className="font-medium text-[13px]/[20px] text-[#28C76F]">
                {status}
              </Typography.Text>
            </div>
          )}
          {status === DiscountStatus.INACTIVE && (
            <div className="w-fit bg-[#FF4C5129] flex justify-center items-center px-[10px] py-[2px]">
              <Typography.Text className="font-medium text-[13px]/[20px] text-[#FF4C51]">
                {status}
              </Typography.Text>
            </div>
          )}
        </>
      ),
    },
    {
      title: 'ACTION',
      dataIndex: 'action',
      render: (_: any, record: DiscountTableColumnType) => (
        <div key={record.id} className="flex flex-row">
          <Button
            className="p-2 border-none"
            icon={<TextButtonIcon />}
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

  const rowSelection: TableProps<DiscountTableColumnType>['rowSelection'] = {
    onChange: (
      selectedRowKeys: React.Key[],
      selectedRows: DiscountTableColumnType[],
    ) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        'selectedRows: ',
        selectedRows,
      );
    },
  };
  return (
    <Table<DiscountTableColumnType>
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
