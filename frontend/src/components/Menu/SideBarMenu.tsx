import React from 'react';
import { Menu, MenuProps } from 'antd';
import UserIcon from '../icons/UserIcon';
import CategoryProductIcon from '../icons/CategoryProductIcon';
import RightArrowIcon from '../icons/RightArrowIcon';
import './index.css';

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
      {
        key: 'price-list-product-list',
        label: 'Price List Product List',
        icon: <CategoryProductIcon />,
      },
      {
        key: 'discount-base-price-detail',
        label: 'Discount Base Price Detail',
        icon: <CategoryProductIcon />,
      },
      {
        key: 'discount-base-price-list',
        label: 'Discount Base Price List',
        icon: <CategoryProductIcon />,
      },
      {
        key: 'discount-user-price-detail',
        label: 'Discount User Price Detail',
        icon: <CategoryProductIcon />,
      },
      {
        key: 'discount-user-price-list',
        label: 'Discount User Price List',
        icon: <CategoryProductIcon />,
      },
    ],
  },
  {
    key: 'catalog',
    label: 'Catalog',
    icon: <UserIcon />,
    children: [
      {
        key: 'product',
        label: 'Product',
        icon: <CategoryProductIcon />,
      },
      {
        key: 'service',
        label: 'Service',
        icon: <CategoryProductIcon />,
      },
    ],
  },
  {
    key: 'order',
    label: 'Order',
    icon: <UserIcon />,
    children: [
      {
        key: 'total-order',
        label: 'Total Order',
        icon: <CategoryProductIcon />,
      },
      {
        key: 'order-reject',
        label: 'Order Reject',
        icon: <CategoryProductIcon />,
      },
    ],
  },
  {
    key: '1',
    label: 'Plan Producing',
    icon: <UserIcon />,
    children: [
      {
        key: '2',
        label: 'Chia Plan',
        icon: <CategoryProductIcon />,
      },
      {
        key: '3',
        label: 'Plan List',
        icon: <CategoryProductIcon />,
      },
      {
        key: '4',
        label: 'Items List',
        icon: <CategoryProductIcon />,
      },
    ],
  },
  {
    key: '5',
    label: 'Booking Label',
    icon: <UserIcon />,
    children: [
      {
        key: '6',
        label: 'Booking',
        icon: <CategoryProductIcon />,
      },
      {
        key: '7',
        label: 'Label List',
        icon: <CategoryProductIcon />,
      },
      {
        key: '8',
        label: 'Suppliers',
        icon: <CategoryProductIcon />,
      },
    ],
  },
  {
    key: '9',
    label: 'Stock',
    icon: <UserIcon />,
    children: [
      {
        key: '10',
        label: 'Inventory',
        icon: <CategoryProductIcon />,
      },
      {
        key: '11',
        label: 'Invoice',
        icon: <CategoryProductIcon />,
      },
      {
        key: '12',
        label: 'Kiểm Kho',
        icon: <CategoryProductIcon />,
      },
      {
        key: '13',
        label: 'Product List',
        icon: <CategoryProductIcon />,
      },
      {
        key: '14',
        label: 'Phôi Lỗi',
        icon: <CategoryProductIcon />,
      },
    ],
  },
  {
    key: '15',
    label: 'Catalog Service',
    icon: <UserIcon />,
    children: [
      {
        key: '16',
        label: 'Catalog Service List',
        icon: <CategoryProductIcon />,
      },
      {
        key: '17',
        label: 'Catalog Service Detail',
        icon: <CategoryProductIcon />,
      },
      {
        key: '18',
        label: 'Price List Service Detail',
        icon: <CategoryProductIcon />,
      },
      {
        key: '19',
        label: 'Price List Service List',
        icon: <CategoryProductIcon />,
      },
    ],
  },
  {
    key: '20',
    label: 'Catalog Shipping',
    icon: <UserIcon />,
    children: [
      {
        key: '21',
        label: 'Catalog Shipping List',
        icon: <CategoryProductIcon />,
      },
      {
        key: '22',
        label: 'Catalog Shipping Detail',
        icon: <CategoryProductIcon />,
      },
      {
        key: '23',
        label: 'Price List Shipping Detail',
        icon: <CategoryProductIcon />,
      },
      {
        key: '24',
        label: 'Price List Shipping List',
        icon: <CategoryProductIcon />,
      },
    ],
  },
  {
    key: '21',
    label: 'Employer',
    icon: <UserIcon />,
    children: [
      {
        key: '22',
        label: 'Daily',
        icon: <CategoryProductIcon />,
      },
      {
        key: '23',
        label: 'Performance',
        icon: <CategoryProductIcon />,
      },
      {
        key: '24',
        label: 'Employee Error Log',
        icon: <CategoryProductIcon />,
      },
      {
        key: '25',
        label: 'Employer List',
        icon: <CategoryProductIcon />,
      },
    ],
  },
  {
    key: '26',
    label: 'Video',
    icon: <UserIcon />,
    children: [
      {
        key: '27',
        label: 'Video QC',
        icon: <CategoryProductIcon />,
      },
      {
        key: '28',
        label: 'Video Đóng Gói',
        icon: <CategoryProductIcon />,
      },
      {
        key: '29',
        label: 'Video Truyền Thông',
        icon: <CategoryProductIcon />,
      },
    ],
  },
];

export default function SideBarMenu() {
  return (
    <div className="w-full">
      <Menu
        mode="inline"
        style={{ border: 'none' }}
        items={items}
        expandIcon={({ isOpen }) => <RightArrowIcon rotate={isOpen ? 90 : 0} />}
        className="custom-ant-menu"
        defaultOpenKeys={['catalog-product', 'catalog', 'order']}
      />
    </div>
  );
}
