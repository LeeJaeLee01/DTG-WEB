import React from 'react';
import { Image, Typography } from 'antd';
import Sider from 'antd/es/layout/Sider';
import CircleDotIcon from '../icons/CircleDotIcon';
import SideBarMenu from '../Menu/SideBarMenu';
import SmartHomeIcon from '../icons/SmartHomeIcon';
import RightArrowIcon from '../icons/RightArrowIcon';

export default function Sidebar() {
  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      width={260}
      className="custom-sider"
      style={{
        backgroundColor: '#FFFFFF',
      }}
    >
      <div className="flex flex-row py-5 pl-[22px] pr-4 justify-between items-center">
        <div className="flex flex-row justify-between items-center gap-3">
          <Image src="/turprint.png" alt="turprint.png" preview={false} />
          <Typography.Text className="font-bold text-[22px] pr-3 cursor-default">
            Turprint
          </Typography.Text>
        </div>
        <CircleDotIcon />
      </div>
      <div className="py-1 px-3">
        <div className="w-full flex flex-row justify-between items-center gap-2 px-3 py-2 hover:bg-[rgba(47,43,61,0.08)] cursor-pointer rounded-md max-h-[38px]">
          <div className="flex flex-row gap-2 items-center">
            <SmartHomeIcon />
            <Typography.Text className={'font-normal text-[15px]/[22px] line'}>
              Dashboards
            </Typography.Text>
          </div>
          <div className="flex flex-row items-center gap-2">
            <div className="bg-[#FF4C51] w-[29px] h-[24px] text-center rounded-[500px]">
              <Typography.Text className="text-[#FFFFFF] font-medium text-[13px]/[20px]">
                5
              </Typography.Text>
            </div>
            <RightArrowIcon />
          </div>
        </div>
        <div className="mt-[14px] mb-[6px] px-3 py-2 h-[34px] cursor-default">
          <p className="font-normal text-[13px]/[18px] text-[#2F2B3D66] text-start">
            APPS & PAGES
          </p>
        </div>
        <SideBarMenu />
      </div>
    </Sider>
  );
}
