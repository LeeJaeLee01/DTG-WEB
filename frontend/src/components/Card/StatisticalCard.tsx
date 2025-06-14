import React from 'react';
import { Typography } from 'antd';
import SessionIcon from '../icons/SessionIcon';
import PaidUsersIcon from '../icons/PaidUsersIcon';
import ActiveUsersIcon from '../icons/ActiveUsersIcon';
import PendingUsersIcon from '../icons/PendingUsersIcon';

export type StatisticalCardProps = {
  name: string;
  total: number;
  percent: number;
  title: string;
  icon: React.ReactNode;
};

export const statisticalCardItems: StatisticalCardProps[] = [
  {
    name: 'Session',
    total: 21459,
    percent: 29,
    title: 'Total Users',
    icon: <SessionIcon />,
  },
  {
    name: 'Paid Users',
    total: 4567,
    percent: 18,
    title: 'Last week analytics',
    icon: <PaidUsersIcon />,
  },
  {
    name: 'Active Users',
    total: 19800,
    percent: -14,
    title: 'Last week analytics',
    icon: <ActiveUsersIcon />,
  },
  {
    name: 'Pending Users',
    total: 237,
    percent: 42,
    title: 'Last week analytics',
    icon: <PendingUsersIcon />,
  },
];

export default function StatisticalCard({
  name,
  total,
  percent,
  title,
  icon,
}: StatisticalCardProps) {
  return (
    <div className="p-6 flex flex-row justify-between items-start shadow-[0_2px_8px_0_rgba(47,43,61,0.12)] rounded-md cursor-default w-full">
      <div className="flex flex-col gap-1">
        <Typography.Text className="font-normal text-[15px]/[22px] text-[#2F2B3DE5]">
          {name}
        </Typography.Text>
        <div className="flex flex-row items-center gap-2">
          <Typography.Text className="font-medium text-[24px]/[38px]">
            {total.toLocaleString()}
          </Typography.Text>
          <Typography.Text
            className={`font-normal text-[15px]/[22px] ${
              percent > 0 ? 'text-[#28C76F]' : 'text-[#FF4C51]'
            }`}
          >
            ({percent > 0 ? `+${percent}` : percent}%)
          </Typography.Text>
        </div>
        <Typography.Text className="font-normal text-[13px]/[20px] text-[#2F2B3DB2]">
          {title}
        </Typography.Text>
      </div>
      {icon}
    </div>
  );
}
