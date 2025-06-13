import React from 'react';
import { Menu, MenuProps } from 'antd';
import UserIcon from '../icons/UserIcon';
import CategoryProductIcon from '../icons/CategoryProductIcon';
import RightArrowIcon from '../icons/RightArrowIcon';

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
  {
    key: 'catalog-product',
    label: 'Catalog Product',
    icon: <UserIcon />,
    children: [
      {
        key: 'catalog-list',
        label: 'Catalog List',
        icon: <CategoryProductIcon />,
      },
      {
        key: 'catalog-detail',
        label: 'Catalog Detail',
        icon: <CategoryProductIcon />,
      },
      {
        key: 'catalog-product-list',
        label: 'Catalog Product List',
        icon: <CategoryProductIcon />,
      },
      {
        key: 'catalog-product-detail',
        label: 'Catalog List',
        icon: <CategoryProductIcon />,
      },
      {
        key: 'price-list-product-detail',
        label: 'Price List Product Detail',
        icon: <CategoryProductIcon />,
      },
    ],
  },
];

export default function MenuComponent() {
  return (
    <div className="w-full">
      <Menu
        mode="inline"
        style={{ border: 'none' }}
        items={items}
        expandIcon={({ isOpen }) => <RightArrowIcon rotate={isOpen ? 90 : 0} />}
        className="custom-ant-menu"
        defaultOpenKeys={['catalog-product']}
      />
    </div>
  );
}
