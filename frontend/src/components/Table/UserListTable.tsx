import {
  Button,
  Image,
  Pagination,
  Table,
  TableColumnsType,
  TableProps,
  Typography,
} from 'antd';
import React, { useEffect, useMemo, useState } from 'react';
import './index.css';
import TrashIcon from '../icons/TrashIcon';
import EyeIcon from '../icons/EyeIcon';
import DotVerticalIcon from '../icons/DotVerticalIcon';
import { useNavigate } from 'react-router-dom';
import { data, UserStatus, UserTableColumnType } from './types';

const users: UserTableColumnType[] = data;

export default function UserListTable({
  limit,
  billing,
  plan,
  status,
}: {
  limit: string;
  billing?: string;
  plan?: string;
  status?: string;
}) {
  const columns: TableColumnsType<UserTableColumnType> = [
    {
      title: 'USER',
      dataIndex: 'user',
      width: '25%',
      render: (user: UserTableColumnType['user']) => (
        <>
          <div className="flex flex-row items-center gap-4">
            <Image
              src={user.avatar}
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
                {user.name}
              </Typography.Text>
              <Typography.Text className="font-normal text-[13px]/[20px] text-[#2F2B3DB2]">
                {user.nickname}
              </Typography.Text>
            </div>
          </div>
        </>
      ),
    },
    {
      title: 'BLANCE',
      dataIndex: 'balance',
      width: '15%',
      render: (balance: UserTableColumnType['balance']) => (
        <>
          <Typography.Text className="font-normal text-[15px]/[22px] text-[#2F2B3DE5]">
            ${balance}
          </Typography.Text>
        </>
      ),
    },
    {
      title: 'PLAN',
      dataIndex: 'plan',
      width: '15%',
      render: (plan: UserTableColumnType['plan']) => (
        <>
          <Typography.Text className="font-normal text-[15px]/[22px] text-[#2F2B3DE5]">
            {plan}
          </Typography.Text>
        </>
      ),
    },
    {
      title: 'BILLING',
      dataIndex: 'billing',
      width: '15%',
      render: (billing: UserTableColumnType['billing']) => (
        <>
          <Typography.Text className="font-normal text-[15px]/[22px] text-[#2F2B3DB2]">
            {billing}
          </Typography.Text>
        </>
      ),
    },
    {
      title: 'STATUS',
      dataIndex: 'status',
      width: '15%',
      render: (status: UserTableColumnType['status']) => (
        <>
          {status === UserStatus.PENDING && (
            <div className="w-fit bg-[#FF9F4329] flex justify-center items-center px-[10px] py-[2px]">
              <Typography.Text className="font-medium text-[13px]/[20px] text-[#FF9F43]">
                {status}
              </Typography.Text>
            </div>
          )}
          {status === UserStatus.ACTIVE && (
            <div className="w-fit bg-[#28C76F29] flex justify-center items-center px-[10px] py-[2px]">
              <Typography.Text className="font-medium text-[13px]/[20px] text-[#28C76F]">
                {status}
              </Typography.Text>
            </div>
          )}
          {status === UserStatus.INACTIVE && (
            <div className="w-fit bg-[#80839029] flex justify-center items-center px-[10px] py-[2px]">
              <Typography.Text className="font-medium text-[13px]/[20px] text-[#808390]">
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
      render: (_: any, record: UserTableColumnType) => (
        <div key={record.id} className="flex flex-row">
          <Button className="p-2 border-none" icon={<TrashIcon />} />
          <Button
            className="p-2 border-none"
            icon={<EyeIcon />}
            onClick={() => handleClick(record.id)}
          />
          <Button className="p-2 border-none" icon={<DotVerticalIcon />} />
        </div>
      ),
    },
  ];

  const filteredData = useMemo(() => {
    let result = [...users];

    if (billing) {
      result = result.filter(
        (item) => item.billing.toLowerCase() === billing.toLowerCase(),
      );
    }

    if (plan) {
      result = result.filter(
        (item) => item.plan.toLowerCase() === plan.toLowerCase(),
      );
    }

    if (status) {
      result = result.filter((item) => item.status === status);
    }

    return result;
  }, [status, plan, billing]);

  const navigate = useNavigate();

  const handleClick = (id: number) => {
    navigate(`/user/${id}`); // 👉 chuyển đến route "/dashboard"
  };

  useEffect(() => {
    setPagination((prev) => ({
      ...prev,
      pageSize: Number(limit),
      current: 1,
      total: filteredData.length,
    }));
  }, [limit, filteredData.length]);

  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: Number(limit),
    total: filteredData.length,
  });

  const rowSelection: TableProps<UserTableColumnType>['rowSelection'] = {
    onChange: (
      selectedRowKeys: React.Key[],
      selectedRows: UserTableColumnType[],
    ) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        'selectedRows: ',
        selectedRows,
      );
    },
  };

  //   const start = (pagination.current - 1) * pagination.pageSize + 1;
  //   const end = Math.min(start + pagination.pageSize - 1, pagination.total);

  return (
    <Table<UserTableColumnType>
      rowKey="id"
      rowSelection={{ type: 'checkbox', ...rowSelection }}
      columns={columns}
      dataSource={filteredData}
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
