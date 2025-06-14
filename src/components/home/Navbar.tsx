'use client';

import { useState } from "react";
import MiniCartPreview from "@/components/home/MiniCartPreview";
import { 
  Menu, 
  X, 
  Home as HomeIcon, 
  BookOpen, 
  Tag, 
  User, 
  LogIn,
  ChevronDown,
  Package,
  Settings,
  LogOut,
  Search,
  Heart
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      {/* Modern Navbar with Glass Effect */}
      <nav className="fixed top-0 left-0 right-0 z-[100] bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-2">
                <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">
                  AccessSellr
                </span>
              </Link>
            </div>

            {/* Mobile Search and Actions */}
            <div className="flex items-center space-x-3 md:hidden">
              <button className="p-2 text-gray-600 hover:text-indigo-600 transition-colors">
                <Search className="w-5 h-5" />
              </button>
              <button className="p-2 text-gray-600 hover:text-indigo-600 transition-colors">
                <Heart className="w-5 h-5" />
              </button>
              <MiniCartPreview />
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 text-gray-600 hover:text-indigo-600 transition-colors"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {/* Search Bar */}
              <div className="relative w-64 lg:w-96">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input 
                  type="text"
                  placeholder="Search books, authors..."
                  className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>

              {/* Navigation Links */}
              <div className="flex items-center space-x-6">
                <Link href="/products" className="text-sm font-medium text-gray-700 hover:text-indigo-600 transition-colors">
                  Browse
                </Link>
                <Link href="/categories" className="text-sm font-medium text-gray-700 hover:text-indigo-600 transition-colors">
                  Categories
                </Link>
                <Link href="/deals" className="text-sm font-medium text-gray-700 hover:text-indigo-600 transition-colors">
                  Deals
                </Link>
              </div>

              {/* User Actions */}
              <div className="flex items-center space-x-4">
                <button className="relative p-2 text-gray-600 hover:text-indigo-600 transition-colors">
                  <Heart className="w-5 h-5" />
                  <span className="absolute -top-1 -right-1 bg-indigo-600 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">3</span>
                </button>
                <MiniCartPreview />
                
                {/* User Menu */}
                <div className="relative">
                  <button
                    onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                    className="flex items-center space-x-2 text-gray-700 hover:text-indigo-600 transition-colors"
                  >
                    <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full flex items-center justify-center">
                      <User className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-sm font-medium">Account</span>
                    <ChevronDown className="w-4 h-4" />
                  </button>
                  {isUserMenuOpen && (
                    <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-100 py-2">
                      <div className="px-4 py-2 border-b border-gray-100">
                        <p className="font-medium text-gray-900">John Doe</p>
                        <p className="text-sm text-gray-500">john@example.com</p>
                      </div>
                      <Link href="/profile" className="flex items-center space-x-3 px-4 py-2 text-gray-700 hover:bg-gray-50">
                        <User className="w-4 h-4" />
                        <span className="text-sm">Profile</span>
                      </Link>
                      <Link href="/orders" className="flex items-center space-x-3 px-4 py-2 text-gray-700 hover:bg-gray-50">
                        <Package className="w-4 h-4" />
                        <span className="text-sm">Orders</span>
                      </Link>
                      <Link href="/settings" className="flex items-center space-x-3 px-4 py-2 text-gray-700 hover:bg-gray-50">
                        <Settings className="w-4 h-4" />
                        <span className="text-sm">Settings</span>
                      </Link>
                      <div className="border-t border-gray-100 my-2"></div>
                      <button className="w-full flex items-center space-x-3 px-4 py-2 text-red-600 hover:bg-gray-50">
                        <LogOut className="w-4 h-4" />
                        <span className="text-sm">Sign Out</span>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 z-[99] md:hidden"
          onClick={handleBackdropClick}
        >
          <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" />
          <div className="absolute right-0 top-0 bottom-0 w-[280px] bg-white shadow-xl">
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="p-4 border-b border-gray-100">
                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold text-gray-900">Menu</span>
                  <button 
                    onClick={() => setIsMenuOpen(false)}
                    className="p-2 text-gray-500 hover:text-gray-700 transition-colors"
                    aria-label="Close menu"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Search Bar Mobile */}
              <div className="p-4 border-b border-gray-100">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input 
                    type="text"
                    placeholder="Search books, authors..."
                    className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
              </div>

              {/* Menu Items */}
              <div className="flex-1 overflow-y-auto">
                <nav className="p-4 space-y-1">
                  <Link href="/" className="flex items-center space-x-3 px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                    <HomeIcon className="w-5 h-5 text-indigo-600" />
                    <span className="text-sm font-medium">Home</span>
                  </Link>
                  <Link href="/products" className="flex items-center space-x-3 px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                    <BookOpen className="w-5 h-5 text-indigo-600" />
                    <span className="text-sm font-medium">Browse</span>
                  </Link>
                  <Link href="/categories" className="flex items-center space-x-3 px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                    <Tag className="w-5 h-5 text-indigo-600" />
                    <span className="text-sm font-medium">Categories</span>
                  </Link>
                  <Link href="/deals" className="flex items-center space-x-3 px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                    <Tag className="w-5 h-5 text-indigo-600" />
                    <span className="text-sm font-medium">Deals</span>
                  </Link>
                  <div className="border-t border-gray-200 my-2"></div>
                  <Link href="/profile" className="flex items-center space-x-3 px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                    <User className="w-5 h-5 text-indigo-600" />
                    <span className="text-sm font-medium">Profile</span>
                  </Link>
                  <Link href="/orders" className="flex items-center space-x-3 px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                    <Package className="w-5 h-5 text-indigo-600" />
                    <span className="text-sm font-medium">Orders</span>
                  </Link>
                  <Link href="/settings" className="flex items-center space-x-3 px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                    <Settings className="w-5 h-5 text-indigo-600" />
                    <span className="text-sm font-medium">Settings</span>
                  </Link>
                </nav>
              </div>

              {/* Footer */}
              <div className="p-4 border-t border-gray-100 space-y-2">
                <Link href="/login">
                  <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg py-2 flex items-center justify-center space-x-2">
                    <LogIn className="w-4 h-4" />
                    <span className="text-sm font-medium">Sign In</span>
                  </Button>
                </Link>
                <button className="w-full flex items-center space-x-2 px-3 py-2 text-red-600 hover:bg-gray-50 rounded-lg transition-colors">
                  <LogOut className="w-5 h-5" />
                  <span className="text-sm font-medium">Sign Out</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
} 