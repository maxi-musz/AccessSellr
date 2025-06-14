"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { 
  ArrowLeft,
  Package,
  Truck,
  CheckCircle2,
  Clock,
  MapPin,
  CreditCard,
  Download,
  Printer,
  Share2,
  AlertCircle
} from "lucide-react";

// Mock data for orders (same as in orders/page.tsx)
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
      estimatedDelivery: "2024-03-18",
      status: "Delivered",
      history: [
        {
          date: "2024-03-18",
          time: "14:30",
          status: "Delivered",
          location: "Front Door",
          description: "Package has been delivered"
        },
        {
          date: "2024-03-18",
          time: "08:15",
          status: "Out for Delivery",
          location: "Local Facility",
          description: "Package is out for delivery"
        },
        {
          date: "2024-03-17",
          time: "23:45",
          status: "In Transit",
          location: "Distribution Center",
          description: "Package is in transit"
        },
        {
          date: "2024-03-16",
          time: "15:20",
          status: "Shipped",
          location: "Origin Facility",
          description: "Package has been shipped"
        },
        {
          date: "2024-03-15",
          time: "10:00",
          status: "Order Placed",
          location: "Online Store",
          description: "Order has been placed"
        }
      ]
    },
    shipping: {
      address: {
        name: "John Doe",
        street: "123 Main St",
        city: "New York",
        state: "NY",
        zip: "10001",
        country: "United States"
      },
      method: "Standard Shipping"
    },
    payment: {
      method: "Credit Card",
      last4: "4242",
      total: 89.97,
      subtotal: 60.97,
      shipping: 4.99,
      tax: 24.01
    }
  }
];

const statusColors = {
  Delivered: "bg-green-100 text-green-800",
  Processing: "bg-yellow-100 text-yellow-800",
  Shipped: "bg-blue-100 text-blue-800"
};

const statusIcons = {
  Delivered: CheckCircle2,
  Processing: Clock,
  Shipped: Truck
};

export default function OrderDetailsPage() {
  const params = useParams();
  const orderId = params.id as string;
  
  const order = orders.find(o => o.id === orderId);

  if (!order) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <AlertCircle className="h-12 w-12 text-red-500 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Order Not Found</h1>
          <p className="text-gray-500 mb-4">The order you're looking for doesn't exist.</p>
          <Link
            href="/orders"
            className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Orders
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/orders"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-4"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Orders
          </Link>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Order {order.id}
              </h1>
              <p className="mt-1 text-sm text-gray-500">
                Placed on {new Date(order.date).toLocaleDateString()}
              </p>
            </div>
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                <Printer className="h-4 w-4" />
                Print
              </button>
              <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                <Download className="h-4 w-4" />
                Download
              </button>
              <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                <Share2 className="h-4 w-4" />
                Share
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Order Status */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Order Status</h2>
              <div className="flex items-center gap-4 mb-6">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${statusColors[order.status]}`}>
                  {order.status}
                </span>
                {order.tracking && (
                  <span className="text-sm text-gray-500">
                    Tracking: {order.tracking.carrier} • {order.tracking.number}
                  </span>
                )}
              </div>
              <div className="space-y-4">
                {order.tracking?.history.map((event, index) => {
                  const Icon = statusIcons[event.status as keyof typeof statusIcons] || Clock;
                  return (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          index === 0 ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-600'
                        }`}>
                          <Icon className="h-4 w-4" />
                        </div>
                        {index < order.tracking!.history.length - 1 && (
                          <div className="w-0.5 h-12 bg-gray-200 mx-auto" />
                        )}
                      </div>
                      <div className="flex-1 pb-8">
                        <div className="flex items-center justify-between">
                          <h3 className="font-medium text-gray-900">{event.status}</h3>
                          <span className="text-sm text-gray-500">
                            {event.date} at {event.time}
                          </span>
                        </div>
                        <p className="text-sm text-gray-500 mt-1">{event.location}</p>
                        <p className="text-sm text-gray-600 mt-1">{event.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Order Items */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Order Items</h2>
              <div className="space-y-6">
                {order.books.map((book, index) => (
                  <div key={index} className="flex gap-4">
                    <img
                      src={book.image}
                      alt={book.title}
                      className="w-24 h-36 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-900">{book.title}</h3>
                      <p className="text-sm text-gray-500">by {book.author}</p>
                      <div className="mt-2 flex items-center gap-4 text-sm text-gray-500">
                        <span>{book.format}</span>
                        <span>${book.price}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Shipping Information */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Shipping Information</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-gray-400 mt-0.5" />
                  <div>
                    <p className="font-medium text-gray-900">{order.shipping.address.name}</p>
                    <p className="text-gray-500">{order.shipping.address.street}</p>
                    <p className="text-gray-500">
                      {order.shipping.address.city}, {order.shipping.address.state} {order.shipping.address.zip}
                    </p>
                    <p className="text-gray-500">{order.shipping.address.country}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Truck className="h-5 w-5 text-gray-400" />
                  <div>
                    <p className="text-gray-500">Shipping Method</p>
                    <p className="font-medium text-gray-900">{order.shipping.method}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Information */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Payment Information</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CreditCard className="h-5 w-5 text-gray-400" />
                  <div>
                    <p className="text-gray-500">Payment Method</p>
                    <p className="font-medium text-gray-900">
                      {order.payment.method} ending in {order.payment.last4}
                    </p>
                  </div>
                </div>
                <div className="pt-4 border-t border-gray-200">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Subtotal</span>
                      <span className="text-gray-900">${order.payment.subtotal}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Shipping</span>
                      <span className="text-gray-900">${order.payment.shipping}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Tax</span>
                      <span className="text-gray-900">${order.payment.tax}</span>
                    </div>
                    <div className="flex justify-between font-medium pt-2 border-t border-gray-200">
                      <span className="text-gray-900">Total</span>
                      <span className="text-gray-900">${order.payment.total}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 