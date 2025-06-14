import React, { useState } from 'react';
import { Button, Divider, Image, Input, TreeSelect, Typography } from 'antd';
import PaletteIcon from '../icons/PaletteIcon';
import MapPinIcon from '../icons/MapPinIcon';
import CalenderICon from '../icons/CalenderICon';
import UserCheckIcon from '../icons/UserCheckIcon';
import BookmarkIcon from '../icons/BookmarkIcon';
import UserIcon from '../icons/UserIcon';
import CheckIcon from '../icons/CheckIcon';
import CrownIcon from '../icons/CrownIcon';
import FlagIcon from '../icons/FlagIcon';
import LanguageIcon from '../icons/LanguageIcon';
import PhoneCallIcon from '../icons/PhoneCallIcon';
import MessagesIcon from '../icons/MessagesIcon';
import MailIcon from '../icons/MailIcon';
import OrderListTable from '../Table/OrderListTable';
import ChevronDownIcon from '../icons/ChevronDownIcon';
import PlusIcon from '../icons/PlusIcon';
import { BillingStatus } from '../Table/types';
import BillingHistoryTable from '../Table/BillingHistoryTable';
import './index.css';
import UploadIcon from '../icons/UploadIcon';
import ProductTable from '../Table/ProductTable';
import DiscountTable from '../Table/DiscountTable';

export default function UserInfo() {
  const [selectInvoiceStatus, setInvoiceStatus] = useState<string>();
  const [selectLimitBilling, setSelectLimitBilling] = useState<string>('10');
  const [selectLimitProduct, setSelectLimitProduct] = useState<string>('10');
  const [selectLimitDiscount, setSelectLimitDiscount] = useState<string>('10');

  const limitTreeData: { value: string; title: string }[] = [
    { value: '5', title: '5' },
    { value: '10', title: '10' },
    { value: '15', title: '15' },
  ];

  const invoidStatusTreeData: { value: string; title: string }[] = [
    { value: BillingStatus.PENDING, title: 'Pending' },
    { value: BillingStatus.ACTIVE, title: 'Active' },
    { value: BillingStatus.INACTIVE, title: 'Inactive' },
  ];

  const onChangeInvoiceStatus = (invoiceStatusValue: string) => {
    setInvoiceStatus(invoiceStatusValue);
  };

  return (
    <div className="mt-6 flex flex-col gap-6">
      <div className="w-full shadow-[0_2px_8px_0_rgba(47,43,61,0.12)] rounded-md overflow-hidden bg-white">
        <div className="relative w-full h-[48px] bg-white">
          <Image
            src="/gradient.png"
            alt="Gradient Header"
            preview={false}
            className="object-cover"
            width="100%"
            height="48px"
          />
          <div className="absolute left-6 bottom-[-96px] bg-white rounded-md border-[4px] border-white shadow-md w-[120px] h-[120px] overflow-hidden">
            <Image
              src="https://i.pravatar.cc/100"
              alt="John Doe Avatar"
              className="object-cover rounded-md"
              preview={false}
              width="100%"
              height="100%"
            />
          </div>
        </div>

        <div className="flex flex-row items-end min-h-[120px] py-6 mr-6">
          <div className="ml-[168px] flex-1 flex flex-col gap-2">
            <Typography.Text className="font-medium text-[24px]/[38px] text-[#2F2B3DE5]">
              John Doe
            </Typography.Text>
            <div className="flex flex-row gap-6">
              <div className="flex flex-row gap-2">
                <PaletteIcon />
                <Typography.Text>UX Designer</Typography.Text>
              </div>
              <div className="flex flex-row gap-2">
                <MapPinIcon />
                <Typography.Text>Vatican City</Typography.Text>
              </div>
              <div className="flex flex-row gap-2">
                <CalenderICon />
                <Typography.Text>Joined April 2021</Typography.Text>
              </div>
            </div>
          </div>
          <Button
            className="py-2 px-[20px] bg-[#7367F0] border-none font-medium text-[15px]/[22px] text-[#FFFFFF] min-h-[38px]"
            icon={<UserCheckIcon />}
          >
            Connected
          </Button>
        </div>
      </div>
      <div className="flex flex-row gap-1">
        <Button
          className="py-2 px-[20px] bg-[#7367F0] border-none font-medium text-[15px]/[22px] text-[#FFFFFF] min-h-[38px]"
          icon={<UserCheckIcon />}
        >
          Profile
        </Button>
        <Button
          className="py-2 px-[20px] bg-[#7367F0] border-none font-medium text-[15px]/[22px] text-[#FFFFFF] min-h-[38px]"
          icon={<BookmarkIcon />}
        >
          Billing & Plans
        </Button>
      </div>
      <div className="flex flex-row items-start gap-6">
        <div className="min-w-[361px] p-6 flex flex-col gap-6 shadow-[0_2px_8px_0_rgba(47,43,61,0.12)] rounded-md">
          <div className="flex flex-col gap-4">
            <Typography.Text className="font-normal text-[13px]/[20px] text-[#2F2B3D66]">
              ABOUT
            </Typography.Text>
            <div className="flex flex-row gap-2">
              <UserIcon />
              <Typography.Text className="font-medium text-[15px]/[22px] text-[#2F2B3DB2]">
                Full Name:
              </Typography.Text>
              <Typography.Text className="font-normal text-[15px]/[22px] text-[#2F2B3DB2]">
                John Doe
              </Typography.Text>
            </div>
            <div className="flex flex-row gap-2">
              <CheckIcon />
              <Typography.Text className="font-medium text-[15px]/[22px] text-[#2F2B3DB2]">
                Status:
              </Typography.Text>
              <Typography.Text className="font-normal text-[15px]/[22px] text-[#2F2B3DB2]">
                Active
              </Typography.Text>
            </div>
            <div className="flex flex-row gap-2">
              <CrownIcon />
              <Typography.Text className="font-medium text-[15px]/[22px] text-[#2F2B3DB2]">
                Role:
              </Typography.Text>
              <Typography.Text className="font-normal text-[15px]/[22px] text-[#2F2B3DB2]">
                Developer
              </Typography.Text>
            </div>
            <div className="flex flex-row gap-2">
              <FlagIcon />
              <Typography.Text className="font-medium text-[15px]/[22px] text-[#2F2B3DB2]">
                Country:
              </Typography.Text>
              <Typography.Text className="font-normal text-[15px]/[22px] text-[#2F2B3DB2]">
                USA
              </Typography.Text>
            </div>
            <div className="flex flex-row gap-2">
              <LanguageIcon />
              <Typography.Text className="font-medium text-[15px]/[22px] text-[#2F2B3DB2]">
                Language:
              </Typography.Text>
              <Typography.Text className="font-normal text-[15px]/[22px] text-[#2F2B3DB2]">
                English
              </Typography.Text>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <Typography.Text className="font-normal text-[13px]/[20px] text-[#2F2B3D66]">
              CONTACTS
            </Typography.Text>
            <div className="flex flex-row gap-2">
              <PhoneCallIcon />
              <Typography.Text className="font-medium text-[15px]/[22px] text-[#2F2B3DB2]">
                Contact:
              </Typography.Text>
              <Typography.Text className="font-normal text-[15px]/[22px] text-[#2F2B3DB2]">
                (123) 456-7890
              </Typography.Text>
            </div>
            <div className="flex flex-row gap-2">
              <MessagesIcon />
              <Typography.Text className="font-medium text-[15px]/[22px] text-[#2F2B3DB2]">
                Skype:
              </Typography.Text>
              <Typography.Text className="font-normal text-[15px]/[22px] text-[#2F2B3DB2]">
                John.doe
              </Typography.Text>
            </div>
            <div className="flex flex-row gap-2">
              <MailIcon />
              <Typography.Text className="font-medium text-[15px]/[22px] text-[#2F2B3DB2]">
                Email:
              </Typography.Text>
              <Typography.Text className="font-normal text-[15px]/[22px] text-[#2F2B3DB2]">
                John.doe@example.com
              </Typography.Text>
            </div>
          </div>
        </div>
        <div className="shadow-[0_2px_8px_0_rgba(47,43,61,0.12)] rounded-md w-full">
          <div className="p-6 flex flex-row justify-between items-center">
            <Typography.Text className="font-medium text-[18px]/[28px] text-[#2F2B3DE5]">
              Order List
            </Typography.Text>
            <div className="px-[14px] py-[7px] border border-solid border-[#2F2B3D] rounded-md">
              <Typography.Text>BALANCE: $3000</Typography.Text>
            </div>
          </div>
          <Divider className="m-0" />
          <OrderListTable />
        </div>
      </div>
      <div className="shadow-[0_2px_8px_0_rgba(47,43,61,0.12)] rounded-md overflow-hidden">
        <div className="p-6 flex flex-row gap-4">
          <Button className="bg-[#7367F0] border-none py-2 px-5 font-medium text-[15px]/[22px] text-[#FFFFFF] h-[38px]">
            Product
          </Button>
          <Button className="bg-[#7367F0] border-none py-2 px-5 font-medium text-[15px]/[22px] text-[#FFFFFF] h-[38px]">
            Service
          </Button>
          <Button className="bg-[#7367F0] border-none py-2 px-5 font-medium text-[15px]/[22px] text-[#FFFFFF] h-[38px]">
            Shipping
          </Button>
        </div>
        <Divider className="m-0" />
        <div className="p-6 flex flex-row justify-between items-center">
          <Input
            className="search-input h-[38px] w-[250px]"
            placeholder="Search Product"
          />
          <div className="flex flex-row gap-4">
            <TreeSelect
              className="select-box h-[38px] min-w-[100px]"
              showSearch
              // defaultValue={selectLimit}
              value={selectLimitProduct}
              styles={{
                popup: { root: { overflow: 'auto' } },
              }}
              treeDefaultExpandAll
              onChange={setSelectLimitProduct}
              treeData={limitTreeData}
              suffixIcon={<ChevronDownIcon />}
            />
            <Button
              iconPosition="start"
              icon={<UploadIcon />}
              className="bg-[#80839029] border-none py-2 px-5 font-medium text-[15px]/[22px] text-[#808390] h-[38px]"
            >
              Import
            </Button>
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
              Add Product
            </Button>
            <Button
              iconPosition="start"
              icon={<PlusIcon />}
              className="bg-[#7367F0] border-none py-2 px-5 font-medium text-[15px]/[22px] text-[#FFFFFF] h-[38px]"
            >
              Add Discount
            </Button>
          </div>
        </div>
        <Divider className="m-0" />
        <ProductTable />
      </div>
      <div className="shadow-[0_2px_8px_0_rgba(47,43,61,0.12)] rounded-md overflow-hidden">
        <div className="p-6">
          <Typography.Text className="font-medium text-[18px]/[28px] text-[#2F2B3DE5]">
            Billing History
          </Typography.Text>
        </div>
        <Divider className="m-0" />
        <div className="p-6 flex flex-row justify-between items-center">
          <div className="flex flex-row gap-4">
            <div className="flex flex-row gap-2 items-center">
              <Typography.Text className="font-normal text-[15px]/[22px] text-[#2F2B3DB2]">
                Show
              </Typography.Text>
              <TreeSelect
                className="select-box h-[38px]"
                showSearch
                // defaultValue={selectLimit}
                value={selectLimitBilling}
                styles={{
                  popup: { root: { overflow: 'auto' } },
                }}
                treeDefaultExpandAll
                onChange={setSelectLimitBilling}
                treeData={limitTreeData}
                suffixIcon={<ChevronDownIcon />}
              />
            </div>
            <Button
              iconPosition="start"
              icon={<PlusIcon />}
              className="bg-[#7367F0] border-none py-2 px-5 font-medium text-[15px]/[22px] text-[#FFFFFF] h-[38px]"
            >
              Create Invoice
            </Button>
          </div>
          <div className="flex flex-row gap-4">
            <Input
              className="search-input h-[38px] w-[250px]"
              placeholder="Search Invoice"
            />
            <TreeSelect
              className="w-full select-box h-[38px]"
              showSearch
              value={selectInvoiceStatus}
              styles={{
                popup: { root: { overflow: 'auto' } },
              }}
              placeholder="Invoice Status"
              allowClear
              treeDefaultExpandAll
              onChange={onChangeInvoiceStatus}
              treeData={invoidStatusTreeData}
              suffixIcon={<ChevronDownIcon />}
            />
          </div>
        </div>
        <Divider className="m-0" />
        <BillingHistoryTable />
      </div>
      <div className="shadow-[0_2px_8px_0_rgba(47,43,61,0.12)] rounded-md overflow-hidden">
        <div className="p-6">
          <Typography.Text className="font-medium text-[18px]/[28px] text-[#2F2B3DE5]">
            Discount User
          </Typography.Text>
        </div>
        <Divider className="m-0" />
        <div className="p-6 flex flex-row justify-between items-center">
          <Input
            className="search-input h-[38px] w-[250px]"
            placeholder="Search Product"
          />
          <div className="flex flex-row gap-4">
            <TreeSelect
              className="select-box h-[38px] min-w-[100px]"
              showSearch
              // defaultValue={selectLimit}
              value={selectLimitDiscount}
              styles={{
                popup: { root: { overflow: 'auto' } },
              }}
              treeDefaultExpandAll
              onChange={setSelectLimitDiscount}
              treeData={limitTreeData}
              suffixIcon={<ChevronDownIcon />}
            />
            <Button
              iconPosition="start"
              icon={<UploadIcon />}
              className="bg-[#80839029] border-none py-2 px-5 font-medium text-[15px]/[22px] text-[#808390] h-[38px]"
            >
              Import
            </Button>
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
              Add New
            </Button>
          </div>
        </div>
        <Divider className="m-0" />
        <DiscountTable />
      </div>
    </div>
  );
}
