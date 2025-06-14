export enum UserStatus {
  ACTIVE = 'Active',
  PENDING = 'Pending',
  INACTIVE = 'Inactive',
}

export enum OrderStatus {
  DELEVERED = 'Delivered',
}

export enum BillingStatus {
  ACTIVE = 'Active',
  PENDING = 'Pending',
  INACTIVE = 'Inactive',
}

export enum ProductStatus {
  PUBLISH = 'Publish',
  SCHEDULED = 'Scheduled',
  INACTIVE = 'Inactive',
}

export enum DiscountStatus {
  PUBLISH = 'Publish',
  INACTIVE = 'Inactive',
}

export type Billing = {
  id: number;
  orderId: number;
  status: BillingStatus;
  total: number;
  issuedDate: string;
  balance: number;
};

export type Discount = {
  id: number;
  product: {
    cover: string;
    name: string;
    hashtag: string;
  };
  dateStart: string;
  dateEnd: string;
  status: DiscountStatus;
};

export type Order = {
  id: number;
  name: string;
  cover: string;
  amount: number;
  status: OrderStatus;
  balanceAfter: number;
};

export type User = {
  id: number;
  name: string;
  nickname: string;
  avatar: string;
  balance: number;
  plan: string;
  billing: string;
  status: UserStatus;
};

export type Product = {
  id: number;
  cover: string;
  name: string;
  hashtag: string;
  category: string;
  price: number;
  variants: string;
  size: string;
  sku: number;
  status: ProductStatus;
};

export type DiscountTableColumnType = {
  id: number;
  product: {
    cover: string;
    name: string;
    hashtag: string;
  };
  dateStart: string;
  dateEnd: string;
  status: DiscountStatus;
};

export type ProductTableColumnType = {
  id: number;
  product: {
    cover: string;
    name: string;
    hashtag: string;
  };
  category: string;
  price: number;
  variants: string;
  size: string;
  sku: number;
  status: ProductStatus;
};

export type UserTableColumnType = {
  id: number;
  user: {
    avatar: string;
    name: string;
    nickname: string;
  };
  balance: number;
  plan: string;
  billing: string;
  status: UserStatus;
};

export type OrderTableColumnType = {
  id: number;
  order: {
    cover: string;
    name: string;
  };
  amount: number;
  status: OrderStatus;
  balanceAfter: number;
};

export type BillingTableColumnType = {
  id: number;
  orderId: number;
  status: BillingStatus;
  total: number;
  issuedDate: string;
  balance: number;
};

const discounts: DiscountTableColumnType[] = [
  {
    id: 1,
    product: {
      cover: 'https://i.pravatar.cc/300',
      name: 'Price List Product Tier Sliver',
      hashtag: 'OnePlus',
    },
    dateStart: 'Apr 15, 2023, 10:21',
    dateEnd: 'Apr 15, 2023, 10:21',
    status: DiscountStatus.PUBLISH,
  },
  {
    id: 2,
    product: {
      cover: 'https://i.pravatar.cc/300',
      name: 'Price List Product Tier Sliver',
      hashtag: 'OnePlus',
    },
    dateStart: 'Apr 15, 2023, 10:21',
    dateEnd: 'Apr 15, 2023, 10:21',
    status: DiscountStatus.INACTIVE,
  },
];

const products: ProductTableColumnType[] = [
  {
    id: 1,
    product: {
      cover: 'https://i.pravatar.cc/300',
      name: 'OnePlus 7Pro',
      hashtag: 'OnePlus',
    },
    category: 'Electronics',
    price: 26,
    variants: 'Green',
    size: 'S',
    sku: 26,
    status: ProductStatus.PUBLISH,
  },
];

const billings: BillingTableColumnType[] = [
  {
    id: 1,
    orderId: 4910,
    status: BillingStatus.ACTIVE,
    total: 3428,
    issuedDate: '22 Oct 2019',
    balance: 883,
  },
  {
    id: 2,
    orderId: 4910,
    status: BillingStatus.ACTIVE,
    total: 3428,
    issuedDate: '22 Oct 2019',
    balance: 883,
  },
  {
    id: 3,
    orderId: 4910,
    status: BillingStatus.ACTIVE,
    total: 3428,
    issuedDate: '22 Oct 2019',
    balance: 883,
  },
  {
    id: 4,
    orderId: 4910,
    status: BillingStatus.ACTIVE,
    total: 3428,
    issuedDate: '22 Oct 2019',
    balance: 883,
  },
  {
    id: 5,
    orderId: 4910,
    status: BillingStatus.ACTIVE,
    total: 3428,
    issuedDate: '22 Oct 2019',
    balance: 883,
  },
];

const orders: OrderTableColumnType[] = [
  {
    id: 1,
    order: {
      name: '#6325',
      cover: 'https://i.pravatar.cc/300',
    },
    amount: 26,
    status: OrderStatus.DELEVERED,
    balanceAfter: 2626,
  },
  {
    id: 2,
    order: {
      name: '#6325',
      cover: 'https://i.pravatar.cc/300',
    },
    amount: 26,
    status: OrderStatus.DELEVERED,
    balanceAfter: 2626,
  },
  {
    id: 3,
    order: {
      name: '#6325',
      cover: 'https://i.pravatar.cc/300',
    },
    amount: 26,
    status: OrderStatus.DELEVERED,
    balanceAfter: 2626,
  },
  {
    id: 4,
    order: {
      name: '#6325',
      cover: 'https://i.pravatar.cc/300',
    },
    amount: 26,
    status: OrderStatus.DELEVERED,
    balanceAfter: 2626,
  },
];

const data: UserTableColumnType[] = [
  {
    id: 1,
    user: {
      avatar: 'https://i.pravatar.cc/300',
      name: 'John Doe1',
      nickname: '@johndoe1',
    },
    balance: 1200,
    plan: 'Company',
    billing: 'Auto Debit',
    status: UserStatus.ACTIVE,
  },
  {
    id: 2,
    user: {
      avatar: 'https://i.pravatar.cc/300',
      name: 'John Doe2',
      nickname: '@johndoe2',
    },
    balance: 1200,
    plan: 'Enterprise',
    billing: 'Auto Debit',
    status: UserStatus.PENDING,
  },
  {
    id: 3,
    user: {
      avatar: 'https://i.pravatar.cc/300',
      name: 'John Doe3',
      nickname: '@johndoe3',
    },
    balance: 1200,
    plan: 'Enterprise',
    billing: 'Auto Debit',
    status: UserStatus.INACTIVE,
  },
  {
    id: 4,
    user: {
      avatar: 'https://i.pravatar.cc/300',
      name: 'John Doe4',
      nickname: '@johndoe4',
    },
    balance: 1200,
    plan: 'Team',
    billing: 'Manual Paypal',
    status: UserStatus.ACTIVE,
  },
  {
    id: 5,
    user: {
      avatar: 'https://i.pravatar.cc/300',
      name: 'John Doe5',
      nickname: '@johndoe5',
    },
    balance: 1200,
    plan: 'Enterprise',
    billing: 'Auto Debit',
    status: UserStatus.PENDING,
  },
  {
    id: 6,
    user: {
      avatar: 'https://i.pravatar.cc/300',
      name: 'John Doe6',
      nickname: '@johndoe6',
    },
    balance: 1200,
    plan: 'Enterprise',
    billing: 'Auto Debit',
    status: UserStatus.INACTIVE,
  },
  {
    id: 7,
    user: {
      avatar: 'https://i.pravatar.cc/300',
      name: 'John Doe7',
      nickname: '@johndoe7',
    },
    balance: 1200,
    plan: 'Enterprise',
    billing: 'Manual Cash',
    status: UserStatus.ACTIVE,
  },
  {
    id: 8,
    user: {
      avatar: 'https://i.pravatar.cc/300',
      name: 'John Doe8',
      nickname: '@johndoe8',
    },
    balance: 1200,
    plan: 'Enterprise',
    billing: 'Auto Debit',
    status: UserStatus.PENDING,
  },
  {
    id: 9,
    user: {
      avatar: 'https://i.pravatar.cc/300',
      name: 'John Doe9',
      nickname: '@johndoe9',
    },
    balance: 1200,
    plan: 'Enterprise',
    billing: 'Auto Debit',
    status: UserStatus.INACTIVE,
  },
  {
    id: 10,
    user: {
      avatar: 'https://i.pravatar.cc/300',
      name: 'John Doe10',
      nickname: '@johndoe10',
    },
    balance: 1200,
    plan: 'Enterprise',
    billing: 'Auto Debit',
    status: UserStatus.ACTIVE,
  },
  {
    id: 11,
    user: {
      avatar: 'https://i.pravatar.cc/300',
      name: 'John Doe11',
      nickname: '@johndoe11',
    },
    balance: 1200,
    plan: 'Enterprise',
    billing: 'Auto Debit',
    status: UserStatus.PENDING,
  },
  {
    id: 12,
    user: {
      avatar: 'https://i.pravatar.cc/300',
      name: 'John Doe12',
      nickname: '@johndoe12',
    },
    balance: 1200,
    plan: 'Enterprise',
    billing: 'Auto Debit',
    status: UserStatus.INACTIVE,
  },
];

export { data, orders, billings, products, discounts };
