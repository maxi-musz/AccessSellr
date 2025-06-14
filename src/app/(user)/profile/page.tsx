"use client";

import { useState } from "react";
import Image from "next/image";
import { 
  User,
  BookOpen,
  Heart,
  Settings,
  DollarSign
} from "lucide-react";
import PageHeader from "@/components/ui/PageHeader";
import ProfileInfo from "@/components/profile/ProfileInfo";
import ProfileOrders from "@/components/profile/ProfileOrders";
import ProfileWishlist from "@/components/profile/ProfileWishlist";
import ProfileSettings from "@/components/profile/ProfileSettings";
import ReferralEarnings from "@/components/profile/ReferralEarnings";

// Mock user data - replace with actual user data from your backend
const userData = {
  name: "Mayowa Steve",
  email: "bernardmayowaa@gmail.com",
  phone: "+2348146694787",
  address: "123 Book Street, Reading City, RC 12345",
  joinDate: "March 2024",
  avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=faces",
  stats: {
    orders: 12,
    wishlist: 8,
    reviews: 5
  }
};

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("profile");

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader title="My Profile" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <p className="text-sm text-gray-500 mb-8">
          Manage your account settings and preferences
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex flex-col items-center">
                <Image
                  src={userData.avatar}
                  alt={`${userData.name}'s profile picture`}
                  width={120}
                  height={120}
                  className="w-30 h-30 rounded-full object-cover mb-4"
                />
                <h2 className="text-lg font-semibold text-gray-900">{userData.name}</h2>
                <p className="text-sm text-gray-500">Member since {userData.joinDate}</p>
              </div>

              <nav className="mt-8 space-y-1">
                <button
                  onClick={() => setActiveTab("profile")}
                  className={`w-full flex items-center gap-3 px-4 py-2 rounded-lg ${
                    activeTab === "profile"
                      ? "bg-indigo-50 text-indigo-600"
                      : "text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  <User className="h-5 w-5" />
                  Profile Information
                </button>
                <button
                  onClick={() => setActiveTab("referrals")}
                  className={`w-full flex items-center gap-3 px-4 py-2 rounded-lg ${
                    activeTab === "referrals"
                      ? "bg-indigo-50 text-indigo-600"
                      : "text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  <DollarSign className="h-5 w-5" />
                  Referral Earnings
                </button>
                <button
                  onClick={() => setActiveTab("orders")}
                  className={`w-full flex items-center gap-3 px-4 py-2 rounded-lg ${
                    activeTab === "orders"
                      ? "bg-indigo-50 text-indigo-600"
                      : "text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  <BookOpen className="h-5 w-5" />
                  My Orders
                </button>
                <button
                  onClick={() => setActiveTab("wishlist")}
                  className={`w-full flex items-center gap-3 px-4 py-2 rounded-lg ${
                    activeTab === "wishlist"
                      ? "bg-indigo-50 text-indigo-600"
                      : "text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  <Heart className="h-5 w-5" />
                  Wishlist
                </button>
                <button
                  onClick={() => setActiveTab("settings")}
                  className={`w-full flex items-center gap-3 px-4 py-2 rounded-lg ${
                    activeTab === "settings"
                      ? "bg-indigo-50 text-indigo-600"
                      : "text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  <Settings className="h-5 w-5" />
                  Settings
                </button>
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {activeTab === "profile" && <ProfileInfo userData={userData} />}
            {activeTab === "referrals" && <ReferralEarnings />}
            {activeTab === "orders" && <ProfileOrders />}
            {activeTab === "wishlist" && <ProfileWishlist />}
            {activeTab === "settings" && <ProfileSettings />}
          </div>
        </div>
      </div>
    </div>
  );
} 