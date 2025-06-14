import React, { useState } from 'react';
import { products, ProductStatus, ProductTableColumnType } from './types';
import {
  Button,
  Image,
  Pagination,
  Table,
  TableColumnsType,
  TableProps,
  Typography,
} from 'antd';
import CategoryIcon from '../icons/CategoryIcon';
import TextButtonIcon from '../icons/TextButtonIcon';
import DotVerticalIcon from '../icons/DotVerticalIcon';

const data: ProductTableColumnType[] = products;

export default function ProductTable() {
  const columns: TableColumnsType<ProductTableColumnType> = [
    {
      title: 'PRODUCT',
      dataIndex: 'product',
      width: '20%',
      render: (product: ProductTableColumnType['product']) => (
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
      title: 'Category',
      dataIndex: 'category',
      width: '20%',
      render: (category: ProductTableColumnType['category']) => (
        <>
          <div className="flex flex-row gap-4 items-center">
            <CategoryIcon />
            <Typography.Text className="font-normal text-[15px]/[22px] text-[#2F2B3DE5]">
              ${category}
            </Typography.Text>
          </div>
        </>
      ),
    },
    {
      title: 'Price',
      dataIndex: 'price',
      width: '10%',
      render: (price: ProductTableColumnType['price']) => (
        <>
          <Typography.Text className="font-normal text-[15px]/[22px] text-[#2F2B3DE5]">
            {price}
          </Typography.Text>
        </>
      ),
    },
    {
      title: 'VARIANTS',
      dataIndex: 'variants',
      width: '10%',
      render: (variants: ProductTableColumnType['variants']) => (
        <>
          <div className="w-fit bg-[#28C76F29] flex justify-center items-center px-[10px] py-[2px]">
            <Typography.Text className="font-medium text-[13px]/[20px] text-[#28C76F]">
              {variants}
            </Typography.Text>
          </div>
        </>
      ),
    },
    {
      title: 'SIZE',
      dataIndex: 'size',
      width: '10%',
      render: (size: ProductTableColumnType['size']) => (
        <>
          <Typography.Text className="font-normal text-[15px]/[22px] text-[#2F2B3DE5]">
            {size}
          </Typography.Text>
        </>
      ),
    },
    {
      title: 'SKU',
      dataIndex: 'sku',
      width: '10%',
      render: (sku: ProductTableColumnType['sku']) => (
        <>
          <Typography.Text className="font-normal text-[15px]/[22px] text-[#2F2B3DE5]">
            {sku}
          </Typography.Text>
        </>
      ),
    },
    {
      title: 'Status',
      dataIndex: 'status',
      width: '10%',
      render: (status: ProductTableColumnType['status']) => (
        <>
          {status === ProductStatus.PUBLISH && (
            <div className="w-fit bg-[#28C76F29] flex justify-center items-center px-[10px] py-[2px]">
              <Typography.Text className="font-medium text-[13px]/[20px] text-[#28C76F]">
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
      render: (_: any, record: ProductTableColumnType) => (
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

  const rowSelection: TableProps<ProductTableColumnType>['rowSelection'] = {
    onChange: (
      selectedRowKeys: React.Key[],
      selectedRows: ProductTableColumnType[],
    ) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        'selectedRows: ',
        selectedRows,
      );
    },
  };

  return (
    <Table<ProductTableColumnType>
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
