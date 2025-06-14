"use client";

import { useState } from "react";
import Image from "next/image";
import { Trash2, ShoppingCart } from "lucide-react";

// Mock wishlist data - replace with actual data from your backend
const wishlistItems = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=600&fit=crop&crop=center"
  },
  {
    id: 2,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    price: 18.99,
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=600&fit=crop&crop=center"
  },
  {
    id: 3,
    title: "1984",
    author: "George Orwell",
    price: 16.99,
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=600&fit=crop&crop=center"
  }
];

export default function ProfileWishlist() {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">My Wishlist</h3>
          <span className="text-sm text-gray-500">{wishlistItems.length} items</span>
        </div>
        <div className="space-y-4">
          {wishlistItems.map((item) => (
            <div key={item.id} className="flex gap-4 p-4 border border-gray-200 rounded-lg">
              <Image
                src={item.image}
                alt={item.title}
                width={200}
                height={280}
                className="w-full h-full object-cover"
              />
              <div className="flex-1">
                <h4 className="font-medium text-gray-900">{item.title}</h4>
                <p className="text-sm text-gray-500">by {item.author}</p>
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-lg font-semibold text-gray-900">${item.price}</span>
                  <div className="flex items-center gap-4">
                    <button className="text-indigo-600 hover:text-indigo-700 text-sm font-medium">
                      Add to Cart
                    </button>
                    <button className="text-gray-400 hover:text-red-500">
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 