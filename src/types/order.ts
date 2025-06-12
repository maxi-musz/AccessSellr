// Order/commission models placeholder
export interface Order {
  id: string;
  userId: string;
  products: {
    productId: string;
    quantity: number;
    price: number;
  }[];
  totalAmount: number;
  status: 'pending' | 'confirmed' | 'shipped' | 'delivered';
  shippingAddress: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
  };
  trackingInfo?: {
    carrier: string;
    trackingNumber: string;
  };
  referralCode?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Commission {
  id: string;
  orderId: string;
  marketerId: string;
  productId: string;
  amount: number;
  status: 'pending' | 'paid';
  paidAt?: Date;
  createdAt: Date;
}
