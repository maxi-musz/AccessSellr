"use client";

import { useState } from "react";
import { DollarSign, Users, TrendingUp, ArrowUpRight, ArrowDownRight, Share2 } from "lucide-react";

// Mock data - replace with actual data from your backend
const referralData = {
  totalEarnings: 245000.50,
  pendingEarnings: 45000.00,
  totalReferrals: 12,
  activeReferrals: 8,
  monthlyStats: {
    current: 8500.50,
    previous: 6500.00,
    change: 31.5
  },
  recentReferrals: [
    {
      id: 1,
      name: "Mike Taiwo",
      date: "2024-03-15",
      status: "Completed",
      earnings: 25000.00
    },
    {
      id: 2,
      name: "Blessing Emma",
      date: "2024-03-14",
      status: "Pending",
      earnings: 20000.00
    },
    {
      id: 3,
      name: "Aanuoluwapo Segun",
      date: "2024-03-12",
      status: "Completed",
      earnings: 2500.00
    }
  ]
};

export default function ReferralEarnings() {
  return (
    <div className="space-y-6">
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Total Earnings</p>
              <p className="text-2xl font-semibold text-gray-900">#{referralData.totalEarnings}</p>
            </div>
            <div className="p-3 bg-green-50 rounded-lg">
              <DollarSign className="h-6 w-6 text-green-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm text-green-600">
            <TrendingUp className="h-4 w-4 mr-1" />
            <span>Active</span>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Pending Earnings</p>
              <p className="text-2xl font-semibold text-gray-900">#{referralData.pendingEarnings}</p>
            </div>
            <div className="p-3 bg-yellow-50 rounded-lg">
              <DollarSign className="h-6 w-6 text-yellow-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm text-yellow-600">
            <ArrowUpRight className="h-4 w-4 mr-1" />
            <span>Processing</span>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Total Referrals</p>
              <p className="text-2xl font-semibold text-gray-900">{referralData.totalReferrals}</p>
            </div>
            <div className="p-3 bg-blue-50 rounded-lg">
              <Users className="h-6 w-6 text-blue-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm text-blue-600">
            <span>{referralData.activeReferrals} Active</span>
          </div>
        </div>
      </div>

      {/* Monthly Performance */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900">Monthly Performance</h3>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-500">This Month</span>
            <div className="flex items-center text-green-600">
              <ArrowUpRight className="h-4 w-4" />
              <span className="text-sm font-medium">{referralData.monthlyStats.change}%</span>
            </div>
          </div>
        </div>
        <div className="flex items-end justify-between">
          <div>
            <p className="text-2xl font-semibold text-gray-900">#{referralData.monthlyStats.current}</p>
            <p className="text-sm text-gray-500">vs ${referralData.monthlyStats.previous} last month</p>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
            <Share2 className="h-4 w-4" />
            Share Referral Link
          </button>
        </div>
      </div>

      {/* Recent Referrals */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Referrals</h3>
        <div className="space-y-4">
          {referralData.recentReferrals.map((referral) => (
            <div key={referral.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
              <div>
                <p className="font-medium text-gray-900">{referral.name}</p>
                <p className="text-sm text-gray-500">
                  {new Date(referral.date).toLocaleDateString()}
                </p>
              </div>
              <div className="flex items-center gap-4">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  referral.status === 'Completed' 
                    ? 'bg-green-100 text-green-800'
                    : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {referral.status}
                </span>
                <span className="text-lg font-semibold text-gray-900">
                  #{referral.earnings}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 