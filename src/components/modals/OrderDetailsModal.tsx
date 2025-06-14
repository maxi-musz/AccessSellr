import { X, Package, User, MapPin, CreditCard, Truck, Calendar, Phone, Mail } from 'lucide-react';

interface OrderItem {
  id: string;
  name: string;
  quantity: number;
  price: number;
  image?: string;
}

interface Customer {
  name: string;
  email: string;
  phone: string;
}

interface Order {
  id: string;
  customer: Customer;
  date: string;
  items: OrderItem[];
  total: number;
  status: string;
  paymentStatus: string;
  paymentMethod: string;
  shippingAddress: string;
  trackingNumber?: string;
  estimatedDelivery?: string;
}

interface OrderDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  order: Order | null;
}

export default function OrderDetailsModal({ isOpen, onClose, order }: OrderDetailsModalProps) {
  if (!isOpen || !order) return null;

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Delivered":
        return "bg-green-100 text-green-800";
      case "Processing":
        return "bg-blue-100 text-blue-800";
      case "Shipped":
        return "bg-purple-100 text-purple-800";
      case "Cancelled":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getPaymentStatusColor = (status: string) => {
    switch (status) {
      case "Paid":
        return "bg-green-100 text-green-800";
      case "Pending":
        return "bg-yellow-100 text-yellow-800";
      case "Refunded":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-900/30 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="bg-white rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="p-6 border-b border-gray-100 bg-gradient-to-r from-indigo-50 to-purple-50">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900">Order Details</h2>
              <p className="text-sm text-gray-500 mt-1">Order #{order.id}</p>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-500 transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
        </div>

        <div className="p-6 overflow-y-auto max-h-[calc(90vh-8rem)]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Order Status Section */}
            <div className="space-y-6">
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Order Status</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Status</span>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(order.status)}`}>
                      {order.status}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Payment Status</span>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getPaymentStatusColor(order.paymentStatus)}`}>
                      {order.paymentStatus}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Order Date</span>
                    <span className="text-sm text-gray-900">{order.date}</span>
                  </div>
                  {order.estimatedDelivery && (
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">Estimated Delivery</span>
                      <span className="text-sm text-gray-900">{order.estimatedDelivery}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Customer Information */}
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Customer Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <User className="h-5 w-5 text-gray-400 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">{order.customer.name}</p>
                      <p className="text-sm text-gray-500">{order.customer.email}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-gray-400 mt-0.5" />
                    <p className="text-sm text-gray-900">{order.customer.phone}</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-gray-400 mt-0.5" />
                    <p className="text-sm text-gray-900">{order.shippingAddress}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Order Items and Payment */}
            <div className="space-y-6">
              {/* Order Items */}
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Order Items</h3>
                <div className="space-y-4">
                  {order.items.map((item) => (
                    <div key={item.id} className="flex items-center gap-4">
                      <div className="h-16 w-16 bg-gray-100 rounded-lg flex items-center justify-center">
                        <Package className="h-8 w-8 text-gray-400" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-900">{item.name}</p>
                        <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium text-gray-900">#{item.price}</p>
                        <p className="text-sm text-gray-500">Total: #{item.price * item.quantity}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-900">Total Amount</span>
                    <span className="text-lg font-semibold text-gray-900">#{order.total}</span>
                  </div>
                </div>
              </div>

              {/* Payment Information */}
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Payment Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Payment Method</span>
                    <div className="flex items-center gap-2">
                      <CreditCard className="h-4 w-4 text-gray-400" />
                      <span className="text-sm text-gray-900">{order.paymentMethod}</span>
                    </div>
                  </div>
                  {order.trackingNumber && (
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">Tracking Number</span>
                      <div className="flex items-center gap-2">
                        <Truck className="h-4 w-4 text-gray-400" />
                        <span className="text-sm text-gray-900">{order.trackingNumber}</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 