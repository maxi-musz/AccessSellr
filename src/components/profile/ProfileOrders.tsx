import { Package, Truck, CheckCircle2, Clock, Eye } from "lucide-react";
import Link from "next/link";

// Mock orders data - replace with actual data from your backend
const orders = [
  {
    id: "ORD-2024-001",
    date: "2024-03-15",
    status: "Delivered",
    total: 89.97,
    items: 3,
    books: [
      {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        format: "Hardcover",
        price: 24.99,
        image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=600&fit=crop&crop=center"
      },
      {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        format: "Paperback",
        price: 18.99,
        image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=600&fit=crop&crop=center"
      },
      {
        title: "1984",
        author: "George Orwell",
        format: "Paperback",
        price: 16.99,
        image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=600&fit=crop&crop=center"
      }
    ],
    tracking: {
      number: "1Z999AA10123456789",
      carrier: "UPS",
      estimatedDelivery: "2024-03-18"
    }
  },
  {
    id: "ORD-2024-002",
    date: "2024-03-10",
    status: "Processing",
    total: 45.98,
    items: 2,
    books: [
      {
        title: "Pride and Prejudice",
        author: "Jane Austen",
        format: "Hardcover",
        price: 22.99,
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop&crop=center"
      },
      {
        title: "The Catcher in the Rye",
        author: "J.D. Salinger",
        format: "Paperback",
        price: 19.99,
        image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400&h=600&fit=crop&crop=center"
      }
    ],
    tracking: {
      number: "1Z999AA10234567890",
      carrier: "FedEx",
      estimatedDelivery: "2024-03-13"
    }
  }
];

type OrderStatus = 'Delivered' | 'Processing' | 'Shipped';

const statusColors: Record<OrderStatus, string> = {
  Delivered: "bg-green-100 text-green-800",
  Processing: "bg-yellow-100 text-yellow-800",
  Shipped: "bg-blue-100 text-blue-800"
};

export default function ProfileOrders() {
  return (
    <div className="space-y-6">
      {orders.map((order) => (
        <div
          key={order.id}
          className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
        >
          {/* Order Header */}
          <div className="p-6 border-b border-gray-200">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h2 className="text-lg font-semibold text-gray-900">
                  Order {order.id}
                </h2>
                <p className="text-sm text-gray-500">
                  Placed on {new Date(order.date).toLocaleDateString()}
                </p>
              </div>
              <div className="flex items-center gap-4">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${statusColors[order.status as OrderStatus]}`}>
                  {order.status}
                </span>
                <Link
                  href={`/orders/${order.id}`}
                  className="flex items-center gap-2 text-indigo-600 hover:text-indigo-700"
                >
                  <Eye className="h-4 w-4" />
                  View Details
                </Link>
              </div>
            </div>
          </div>

          {/* Order Items */}
          <div className="p-6">
            <div className="space-y-4">
              {order.books.map((book, index) => (
                <div key={index} className="flex gap-4">
                  <img
                    src={book.image}
                    alt={book.title}
                    className="w-20 h-28 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-900">{book.title}</h3>
                    <p className="text-sm text-gray-500">by {book.author}</p>
                    <div className="mt-1 flex items-center gap-4 text-sm text-gray-500">
                      <span>{book.format}</span>
                      <span>${book.price}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-500">
                  {order.items} {order.items === 1 ? 'item' : 'items'} • Total: ${order.total}
                </div>
                {order.tracking && (
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Truck className="h-4 w-4" />
                    <span>
                      {order.tracking.carrier} • {order.tracking.number}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
} 