import { Flex, Image, Typography } from 'antd';
import Sider from 'antd/es/layout/Sider';
import React from 'react';
import CircleDot from '../icons/CircleDot';

// const items2: MenuProps['items'] = [
//   UserOutlined,
//   LaptopOutlined,
//   NotificationOutlined,
// ].map((icon, index) => {
//   const key = String(index + 1);

//   return {
//     key: `sub${key}`,
//     icon: React.createElement(icon),
//     label: `subnav ${key}`,
//     children: Array.from({ length: 4 }).map((_, j) => {
//       const subKey = index * 4 + j + 1;
//       return {
//         key: subKey,
//         label: `option${subKey}`,
//       };
//     }),
//   };
// });

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
          <Image src="/turprint.png" />
          <Typography.Text className="font-bold text-[22px] pr-3">
            Turprint
          </Typography.Text>
        </div>
        <CircleDot />
      </div>
      <div className="pt-1 px-3">
        <div>Dashboards</div>
      </div>
    </Sider>
  );
}
