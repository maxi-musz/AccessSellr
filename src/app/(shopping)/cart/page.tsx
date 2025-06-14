"use client";

import { useState } from "react";
import { 
  Trash2, 
  ShoppingBag, 
  ArrowLeft, 
  Plus, 
  Minus, 
  Package, 
  Truck, 
  Shield,
  Heart,
  Star,
  Info,
  CheckCircle
} from "lucide-react";
import Image from "next/image";
import PageHeader from "@/components/ui/PageHeader";

// Add interface for cart item
interface CartItem {
  id: number;
  title: string;
  author: string;
  price: number;
  originalPrice: number;
  image: string;
  quantity: number;
  isbn: string;
  rating: number;
  reviews: number;
  inStock: boolean;
  format: string;
}

// Enhanced mock data with more professional details
const cartItems: CartItem[] = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    price: 24.99,
    originalPrice: 29.99,
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=200&h=280&fit=crop&crop=center",
    quantity: 1,
    isbn: "978-0-7432-7356-5",
    rating: 4.2,
    reviews: 1247,
    inStock: true,
    format: "Hardcover"
  },
  {
    id: 2,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    price: 18.99,
    originalPrice: 22.99,
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=200&h=280&fit=crop&crop=center",
    quantity: 2,
    isbn: "978-0-06-112008-4",
    rating: 4.5,
    reviews: 2156,
    inStock: true,
    format: "Paperback"
  },
  {
    id: 3,
    title: "1984",
    author: "George Orwell",
    price: 16.99,
    originalPrice: 19.99,
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=200&h=280&fit=crop&crop=center",
    quantity: 1,
    isbn: "978-0-452-28423-4",
    rating: 4.8,
    reviews: 3421,
    inStock: true,
    format: "Paperback"
  }
];

export default function ProfessionalCartPage() {
  const [items, setItems] = useState<CartItem[]>(cartItems);
  const [promoCode, setPromoCode] = useState("");
  const [promoApplied, setPromoApplied] = useState(false);
  const [savedItems, setSavedItems] = useState<CartItem[]>([]);

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    setItems(items.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  const removeItem = (id: number) => {
    setItems(items.filter(item => item.id !== id));
  };

  const saveForLater = (id: number) => {
    const item = items.find(item => item.id === id);
    if (item) {
      setSavedItems([...savedItems, item]);
      removeItem(id);
    }
  };

  const applyPromoCode = () => {
    if (promoCode.toLowerCase() === 'save10') {
      setPromoApplied(true);
    }
  };

  const subtotal = items.reduce((total, item) => total + (item.price * item.quantity), 0);
  const savings = items.reduce((total, item) => 
    total + ((item.originalPrice - item.price) * item.quantity), 0
  );
  const shipping = subtotal > 50 ? 0 : 7.99;
  const promoDiscount = promoApplied ? subtotal * 0.1 : 0;
  const tax = (subtotal - promoDiscount) * 0.08;
  const total = subtotal + shipping + tax - promoDiscount;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      <PageHeader title="Shopping Cart" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Cart Summary */}
        <div className="mb-8">
          <p className="text-gray-600">
            {items.length} {items.length === 1 ? 'item' : 'items'} in your cart
          </p>
          
          {savings > 0 && (
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-center gap-3 mt-4">
              <CheckCircle className="h-5 w-5 text-green-600" />
              <span className="text-green-800 font-medium">
                You&apos;re saving ${savings.toFixed(2)} on this order!
              </span>
            </div>
          )}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items - Takes up 2 columns */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
              {items.length === 0 ? (
                <div className="p-12 text-center">
                  <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <ShoppingBag className="h-12 w-12 text-gray-400" />
                  </div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                    Your cart is empty
                  </h2>
                  <p className="text-gray-600 mb-8 max-w-md mx-auto">
                    Discover our curated collection of books and add your favorites to get started.
                  </p>
                  <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-lg font-medium transition-colors">
                    Explore Books
                  </button>
                </div>
              ) : (
                <div className="divide-y divide-gray-100">
                  {items.map((item) => (
                    <div key={item.id} className="p-6 hover:bg-gray-50/50 transition-colors">
                      <div className="flex gap-6">
                        {/* Book Image */}
                        <div className="relative">
                          <div className="w-28 h-36 rounded-xl overflow-hidden bg-gray-100 shadow-sm">
                            <Image
                              src={item.image}
                              alt={item.title}
                              width={112}
                              height={144}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          {item.originalPrice > item.price && (
                            <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                              ${(item.originalPrice - item.price).toFixed(2)} off
                            </div>
                          )}
                        </div>

                        {/* Book Details */}
                        <div className="flex-1 min-w-0">
                          <div className="flex justify-between items-start mb-3">
                            <div className="flex-1 min-w-0">
                              <h3 className="font-semibold text-gray-900 text-lg leading-tight">
                                {item.title}
                              </h3>
                              <p className="text-gray-600 mt-1">{item.author}</p>
                              <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                                <span>{item.format}</span>
                                <span>ISBN: {item.isbn}</span>
                                <div className="flex items-center gap-1">
                                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                  <span>{item.rating}</span>
                                  <span>({item.reviews.toLocaleString()})</span>
                                </div>
                              </div>
                            </div>
                            
                            {/* Action Buttons */}
                            <div className="flex items-center gap-2 ml-4">
                              <button
                                onClick={() => saveForLater(item.id)}
                                className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                                title="Save for later"
                              >
                                <Heart className="h-5 w-5" />
                              </button>
                              <button
                                onClick={() => removeItem(item.id)}
                                className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                                title="Remove item"
                              >
                                <Trash2 className="h-5 w-5" />
                              </button>
                            </div>
                          </div>

                          {/* Quantity and Price */}
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div className="flex items-center border border-gray-300 rounded-lg">
                                <button
                                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                  className="p-2 hover:bg-gray-50 rounded-l-lg transition-colors"
                                  disabled={item.quantity <= 1}
                                >
                                  <Minus className="h-4 w-4" />
                                </button>
                                <input
                                  type="number"
                                  min="1"
                                  value={item.quantity}
                                  onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) || 1)}
                                  className="w-12 text-center border-0 focus:ring-0 bg-transparent"
                                />
                                <button
                                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                  className="p-2 hover:bg-gray-50 rounded-r-lg transition-colors"
                                >
                                  <Plus className="h-4 w-4" />
                                </button>
                              </div>
                              {item.inStock ? (
                                <span className="text-green-600 text-sm font-medium">In Stock</span>
                              ) : (
                                <span className="text-red-600 text-sm font-medium">Out of Stock</span>
                              )}
                            </div>
                            
                            <div className="text-right">
                              {item.originalPrice > item.price && (
                                <div className="text-sm text-gray-500 line-through">
                                  ${(item.originalPrice * item.quantity).toFixed(2)}
                                </div>
                              )}
                              <div className="text-xl font-bold text-gray-900">
                                ${(item.price * item.quantity).toFixed(2)}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Continue Shopping */}
            <div className="mt-6">
              <button className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium transition-colors">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Continue Shopping
              </button>
            </div>
          </div>

          {/* Order Summary - Takes up 1 column */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
                <div className="p-6 border-b border-gray-100">
                  <h2 className="text-xl font-semibold text-gray-900">Order Summary</h2>
                </div>
                
                <div className="p-6 space-y-4">
                  {/* Promo Code */}
                  <div className="space-y-3">
                    <label className="text-sm font-medium text-gray-700">Promo Code</label>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        placeholder="Enter code"
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value)}
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      />
                      <button
                        onClick={applyPromoCode}
                        className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg font-medium transition-colors"
                      >
                        Apply
                      </button>
                    </div>
                    {promoApplied && (
                      <div className="flex items-center gap-2 text-green-600 text-sm">
                        <CheckCircle className="h-4 w-4" />
                        <span>Promo code applied!</span>
                      </div>
                    )}
                  </div>

                  {/* Price Breakdown */}
                  <div className="space-y-3 pt-4 border-t border-gray-100">
                    <div className="flex justify-between text-gray-600">
                      <span>Subtotal ({items.length} items)</span>
                      <span>${subtotal.toFixed(2)}</span>
                    </div>
                    
                    {savings > 0 && (
                      <div className="flex justify-between text-green-600">
                        <span>Savings</span>
                        <span>-${savings.toFixed(2)}</span>
                      </div>
                    )}
                    
                    <div className="flex justify-between text-gray-600">
                      <div className="flex items-center gap-2">
                        <span>Shipping</span>
                        <Info className="h-4 w-4" />
                      </div>
                      <span>{shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}</span>
                    </div>
                    
                    {promoApplied && (
                      <div className="flex justify-between text-green-600">
                        <span>Promo discount (10%)</span>
                        <span>-${promoDiscount.toFixed(2)}</span>
                      </div>
                    )}
                    
                    <div className="flex justify-between text-gray-600">
                      <span>Tax</span>
                      <span>${tax.toFixed(2)}</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-200">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-semibold text-gray-900">Total</span>
                      <span className="text-2xl font-bold text-gray-900">${total.toFixed(2)}</span>
                    </div>
                  </div>

                  <button
                    className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white py-4 rounded-xl font-semibold text-lg transition-colors mt-6"
                    disabled={items.length === 0}
                  >
                    Proceed to Checkout
                  </button>

                  {/* Trust Badges */}
                  <div className="mt-8 pt-6 border-t border-gray-100 space-y-4">
                    <div className="flex items-center gap-3 text-sm text-gray-600">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                        <Package className="h-4 w-4 text-green-600" />
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">Free shipping</div>
                        <div>On orders over $50</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 text-sm text-gray-600">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <Truck className="h-4 w-4 text-blue-600" />
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">Fast delivery</div>
                        <div>2-3 business days</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 text-sm text-gray-600">
                      <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                        <Shield className="h-4 w-4 text-purple-600" />
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">Secure & Safe</div>
                        <div>100% secure payment</div>
                      </div>
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