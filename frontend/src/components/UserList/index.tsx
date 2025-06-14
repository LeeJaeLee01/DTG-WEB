import React, { useState } from 'react';
import StatisticalCard, {
  statisticalCardItems,
  StatisticalCardProps,
} from '../Card/StatisticalCard';
import { Button, Divider, Input, TreeSelect, Typography } from 'antd';
import './index.css';
import ChevronDownIcon from '../icons/ChevronDownIcon';
import UploadIcon from '../icons/UploadIcon';
import PlusIcon from '../icons/PlusIcon';
import UserListTable from '../Table/UserListTable';
import { UserStatus } from '../Table/types';

const billingTreeData: { value: string; title: string }[] = [
  { value: 'auto debit', title: 'Auto Debit' },
  { value: 'manual paypal', title: 'Manual Paypal' },
  { value: 'manual cash', title: 'Manual Cash' },
];

const planTreeData: { value: string; title: string }[] = [
  { value: 'enterprise', title: 'Enterprise' },
  { value: 'team', title: 'Team' },
  { value: 'company', title: 'Company' },
];

const statusTreeData: { value: string; title: string }[] = [
  { value: UserStatus.PENDING, title: 'Pending' },
  { value: UserStatus.ACTIVE, title: 'Active' },
  { value: UserStatus.INACTIVE, title: 'Inactive' },
];

const limitTreeData: { value: string; title: string }[] = [
  { value: '5', title: '5' },
  { value: '10', title: '10' },
  { value: '15', title: '15' },
];

export default function UserList() {
  const [selectBilling, setSelectBilling] = useState<string>();
  const [selectPlan, setSelectPlan] = useState<string>();
  const [selectStatus, setSelectStatus] = useState<string>();
  const [selectLimit, setSelectLimit] = useState<string>('5');

  const onChangeBilling = (billingValue: string) => {
    setSelectBilling(billingValue);
  };

  const onChangePlan = (planValue: string) => {
    setSelectPlan(planValue);
  };

  const onChangeStatus = (statusValue: string) => {
    setSelectStatus(statusValue);
  };

  const onChangeLimit = (limitValue: string) => {
    setSelectLimit(limitValue);
  };

  return (
    <div className="flex flex-col gap-6 mt-6">
      <div className="flex flex-row justify-between items-center gap-6">
        {statisticalCardItems.map((item: StatisticalCardProps) => (
          <StatisticalCard
            key={item.name}
            name={item.name}
            total={item.total}
            percent={item.percent}
            title={item.title}
            icon={item.icon}
          />
        ))}
      </div>
      <div className="flex flex-col shadow-[0_2px_8px_0_rgba(47,43,61,0.12)] rounded-md">
        <div className="flex flex-col p-6 gap-4">
          <Typography.Text className="font-medium text-[18px]/[28px]">
            Filters
          </Typography.Text>
          <div className="flex flex-row gap-6">
            <TreeSelect
              className="w-full select-box h-[38px]"
              showSearch
              value={selectBilling}
              styles={{
                popup: { root: { overflow: 'auto' } },
              }}
              placeholder="Select Billing"
              allowClear
              treeDefaultExpandAll
              onChange={onChangeBilling}
              treeData={billingTreeData}
              suffixIcon={<ChevronDownIcon />}
            />
            <TreeSelect
              className="w-full select-box h-[38px]"
              showSearch
              value={selectPlan}
              styles={{
                popup: { root: { overflow: 'auto' } },
              }}
              placeholder="Select Plan"
              allowClear
              treeDefaultExpandAll
              onChange={onChangePlan}
              treeData={planTreeData}
              suffixIcon={<ChevronDownIcon />}
            />
            <TreeSelect
              className="w-full select-box h-[38px]"
              showSearch
              value={selectStatus}
              styles={{
                popup: { root: { overflow: 'auto' } },
              }}
              placeholder="Select Status"
              allowClear
              treeDefaultExpandAll
              onChange={onChangeStatus}
              treeData={statusTreeData}
              suffixIcon={<ChevronDownIcon />}
            />
          </div>
        </div>
        <Divider className="m-0" />
        <div className="flex flex-row items-center justify-between p-6 gap-4">
          <TreeSelect
            className="select-box h-[38px]"
            showSearch
            // defaultValue={selectLimit}
            value={selectLimit}
            styles={{
              popup: { root: { overflow: 'auto' } },
            }}
            treeDefaultExpandAll
            onChange={onChangeLimit}
            treeData={limitTreeData}
            suffixIcon={<ChevronDownIcon />}
          />
          <div className="flex flex-row items-center gap-4">
            <Input
              className="search-input h-[38px] w-[250px]"
              placeholder="Search User"
            />
            <Button
              iconPosition="start"
              icon={<UploadIcon />}
              className="bg-[#80839029] border-none py-2 px-5 font-medium text-[15px]/[22px] text-[#808390] h-[38px]"
            >
              Export
            </Button>
            <Button
              iconPosition="start"
              icon={<PlusIcon />}
              className="bg-[#7367F0] border-none py-2 px-5 font-medium text-[15px]/[22px] text-[#FFFFFF] h-[38px]"
            >
              Add New User
            </Button>
          </div>
        </div>
        <Divider className="m-0" />
        <UserListTable
          limit={selectLimit}
          billing={selectBilling}
          status={selectStatus}
          plan={selectPlan}
        />
      </div>
    </div>
  );
}
