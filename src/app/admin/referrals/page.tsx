"use client";

import { useState } from "react";
import {
  Search,
  X,
  User,
  Calendar,
  Eye,
  MoreVertical,
  ArrowUpDown,
  DollarSign,
  SlidersHorizontal,
  Download,
  Plus,
  Users,
  Award,
  TrendingUp,
  Settings
} from "lucide-react";
import ReferralSettingsModal, { ReferralSettings } from "@/components/modals/ReferralSettingsModal";

interface Referral {
  id: string;
  referrer: {
    id: string;
    name: string;
    email: string;
    phone: string;
  };
  referred: {
    id: string;
    name: string;
    email: string;
    phone: string;
  };
  date: string;
  status: "Pending" | "Completed" | "Expired";
  reward: number;
  rewardStatus: "Pending" | "Paid";
  conversionDate?: string;
}

// Mock data - replace with actual data from your backend
const referrals: Referral[] = [
  {
    id: "REF001",
    referrer: {
      id: "CUST001",
      name: "John Doe",
      email: "john@example.com",
      phone: "+234 123 456 7890"
    },
    referred: {
      id: "CUST002",
      name: "Jane Smith",
      email: "jane@example.com",
      phone: "+234 987 654 3210"
    },
    date: "2024-03-15",
    status: "Completed",
    reward: 5000.00,
    rewardStatus: "Paid",
    conversionDate: "2024-03-20"
  },
  {
    id: "REF002",
    referrer: {
      id: "CUST003",
      name: "Mike Johnson",
      email: "mike@example.com",
      phone: "+234 555 666 7777"
    },
    referred: {
      id: "CUST004",
      name: "Sarah Williams",
      email: "sarah@example.com",
      phone: "+234 111 222 3333"
    },
    date: "2024-03-10",
    status: "Pending",
    reward: 5000.00,
    rewardStatus: "Pending"
  },
  {
    id: "REF003",
    referrer: {
      id: "CUST002",
      name: "Jane Smith",
      email: "jane@example.com",
      phone: "+234 987 654 3210"
    },
    referred: {
      id: "CUST005",
      name: "David Brown",
      email: "david@example.com",
      phone: "+234 333 444 5555"
    },
    date: "2024-03-05",
    status: "Expired",
    reward: 5000.00,
    rewardStatus: "Pending"
  }
];

export default function ReferralsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [sortBy, setSortBy] = useState("date");
  const [sortOrder, setSortOrder] = useState("desc");
  const [dateRange, setDateRange] = useState({ start: "", end: "" });
  const [rewardRange, setRewardRange] = useState({ min: "", max: "" });
  const [showFilters, setShowFilters] = useState(false);
  const [showSettingsModal, setShowSettingsModal] = useState(false);

  // Initial referral settings
  const [referralSettings, setReferralSettings] = useState<ReferralSettings>({
    referralPercentage: 10,
    minimumReferrals: 1,
    rewardThreshold: 50,
    expirationDays: 30
  });

  const handleSaveSettings = (newSettings: ReferralSettings) => {
    setReferralSettings(newSettings);
    // Here you would typically make an API call to save the settings
    console.log('Saving new settings:', newSettings);
  };

  const filteredReferrals = referrals
    .filter(referral => {
      const matchesSearch = 
        referral.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
        referral.referrer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        referral.referrer.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
        referral.referred.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        referral.referred.email.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesStatus = selectedStatus === "All" || referral.status === selectedStatus;
      
      const matchesDateRange = (!dateRange.start || referral.date >= dateRange.start) &&
                             (!dateRange.end || referral.date <= dateRange.end);
      
      const matchesRewardRange = (!rewardRange.min || referral.reward >= parseFloat(rewardRange.min)) &&
                               (!rewardRange.max || referral.reward <= parseFloat(rewardRange.max));

      return matchesSearch && matchesStatus && matchesDateRange && matchesRewardRange;
    })
    .sort((a, b) => {
      let comparison = 0;
      switch (sortBy) {
        case "date":
          comparison = new Date(a.date).getTime() - new Date(b.date).getTime();
          break;
        case "reward":
          comparison = a.reward - b.reward;
          break;
        default:
          comparison = 0;
      }
      return sortOrder === "desc" ? -comparison : comparison;
    });

  const handleSort = (column: string) => {
    if (sortBy === column) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortBy(column);
      setSortOrder("asc");
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-green-100 text-green-800";
      case "Pending":
        return "bg-yellow-100 text-yellow-800";
      case "Expired":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getRewardStatusColor = (status: string) => {
    switch (status) {
      case "Paid":
        return "bg-green-100 text-green-800";
      case "Pending":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="space-y-6">
      {/* Header with Actions */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Referrals</h1>
          <p className="text-sm text-gray-500 mt-1">Manage and track customer referrals</p>
        </div>
        <div className="flex items-center gap-3">
          <button 
            onClick={() => setShowSettingsModal(true)}
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-200"
          >
            <Settings className="h-4 w-4" />
            Settings
          </button>
          <button className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-200">
            <Download className="h-4 w-4" />
            Export
          </button>
          <button className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-200">
            <Plus className="h-4 w-4" />
            Add Referral
          </button>
        </div>
      </div>

      {/* Settings Modal */}
      <ReferralSettingsModal
        isOpen={showSettingsModal}
        onClose={() => setShowSettingsModal(false)}
        onSave={handleSaveSettings}
        initialSettings={referralSettings}
      />

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl shadow-sm border border-blue-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-blue-600 font-medium">Total Referrals</p>
              <p className="text-2xl font-semibold text-gray-900">{referrals.length}</p>
            </div>
            <div className="p-3 bg-blue-100 rounded-lg">
              <Users className="h-6 w-6 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl shadow-sm border border-green-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-green-600 font-medium">Completed</p>
              <p className="text-2xl font-semibold text-gray-900">
                {referrals.filter(r => r.status === "Completed").length}
              </p>
            </div>
            <div className="p-3 bg-green-100 rounded-lg">
              <Award className="h-6 w-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl shadow-sm border border-purple-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-purple-600 font-medium">Pending</p>
              <p className="text-2xl font-semibold text-gray-900">
                {referrals.filter(r => r.status === "Pending").length}
              </p>
            </div>
            <div className="p-3 bg-purple-100 rounded-lg">
              <TrendingUp className="h-6 w-6 text-purple-600" />
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl shadow-sm border border-amber-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-amber-600 font-medium">Total Rewards</p>
              <p className="text-2xl font-semibold text-gray-900">
                #{referrals.reduce((sum, r) => sum + r.reward, 0).toLocaleString()}
              </p>
            </div>
            <div className="p-3 bg-amber-100 rounded-lg">
              <DollarSign className="h-6 w-6 text-amber-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filter Controls */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            {/* Search Bar */}
            <div className="w-96 relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search referrals..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
              />
            </div>

            {/* Filter Toggle Button */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                showFilters
                  ? "bg-indigo-50 text-indigo-600"
                  : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-50"
              }`}
            >
              <SlidersHorizontal className="h-4 w-4" />
              Filters
              {(dateRange.start || dateRange.end || rewardRange.min || rewardRange.max) && (
                <span className="ml-1 px-2 py-0.5 text-xs font-medium rounded-full bg-indigo-100 text-indigo-600">
                  Active
                </span>
              )}
            </button>
          </div>

          {/* Advanced Filters */}
          {showFilters && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 bg-gray-50 rounded-lg">
              {/* Date Range */}
              <div className="space-y-4">
                <h3 className="text-sm font-medium text-gray-700">Referral Date Range</h3>
                <div className="flex items-center gap-4">
                  <div className="flex-1">
                    <label className="block text-sm text-gray-500 mb-1">From</label>
                    <div className="relative">
                      <input
                        type="date"
                        value={dateRange.start}
                        onChange={(e) => setDateRange({ ...dateRange, start: e.target.value })}
                        className="w-full pl-4 pr-10 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                      />
                      <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <label className="block text-sm text-gray-500 mb-1">To</label>
                    <div className="relative">
                      <input
                        type="date"
                        value={dateRange.end}
                        onChange={(e) => setDateRange({ ...dateRange, end: e.target.value })}
                        className="w-full pl-4 pr-10 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                      />
                      <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Reward Range */}
              <div className="space-y-4">
                <h3 className="text-sm font-medium text-gray-700">Reward Range</h3>
                <div className="flex items-center gap-4">
                  <div className="flex-1">
                    <label className="block text-sm text-gray-500 mb-1">Min Amount</label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">#</span>
                      <input
                        type="number"
                        value={rewardRange.min}
                        onChange={(e) => setRewardRange({ ...rewardRange, min: e.target.value })}
                        className="w-full pl-8 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                        placeholder="0"
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <label className="block text-sm text-gray-500 mb-1">Max Amount</label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">#</span>
                      <input
                        type="number"
                        value={rewardRange.max}
                        onChange={(e) => setRewardRange({ ...rewardRange, max: e.target.value })}
                        className="w-full pl-8 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                        placeholder="100000"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Active Filters */}
          {(selectedStatus !== "All" || dateRange.start || dateRange.end || rewardRange.min || rewardRange.max) && (
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-sm text-gray-500">Active filters:</span>
              <div className="flex items-center gap-2">
                {selectedStatus !== "All" && (
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm bg-indigo-50 text-indigo-700">
                    {selectedStatus}
                    <button 
                      onClick={() => setSelectedStatus("All")}
                      className="ml-1 hover:text-indigo-900"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </span>
                )}
                {(dateRange.start || dateRange.end) && (
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm bg-indigo-50 text-indigo-700">
                    Date Range
                    <button 
                      onClick={() => setDateRange({ start: "", end: "" })}
                      className="ml-1 hover:text-indigo-900"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </span>
                )}
                {(rewardRange.min || rewardRange.max) && (
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm bg-indigo-50 text-indigo-700">
                    Reward Range
                    <button 
                      onClick={() => setRewardRange({ min: "", max: "" })}
                      className="ml-1 hover:text-indigo-900"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </span>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="border-b border-gray-200">
          <nav className="flex -mb-px">
            {["All", "Pending", "Completed", "Expired"].map((tab) => (
              <button
                key={tab}
                onClick={() => setSelectedStatus(tab)}
                className={`px-6 py-4 text-sm font-medium border-b-2 transition-all duration-200 ${
                  selectedStatus === tab
                    ? "border-indigo-500 text-indigo-600 bg-indigo-50/50"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 hover:bg-gray-50/50"
                }`}
              >
                {tab}
                {tab !== "All" && (
                  <span className={`ml-2 px-2 py-0.5 text-xs font-medium rounded-full ${
                    selectedStatus === tab
                      ? "bg-indigo-100 text-indigo-600"
                      : "bg-gray-100 text-gray-600"
                  }`}>
                    {referrals.filter(r => r.status === tab).length}
                  </span>
                )}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Referrals Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Referral ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Referrer
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Referred
                </th>
                <th 
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:text-gray-700"
                  onClick={() => handleSort("date")}
                >
                  <div className="flex items-center gap-1">
                    Date
                    <ArrowUpDown className="h-4 w-4" />
                  </div>
                </th>
                <th 
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:text-gray-700"
                  onClick={() => handleSort("reward")}
                >
                  <div className="flex items-center gap-1">
                    Reward
                    <ArrowUpDown className="h-4 w-4" />
                  </div>
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Reward Status
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredReferrals.map((referral) => (
                <tr key={referral.id} className="hover:bg-gray-50 transition-colors duration-200">
                  <td className="px-6 py-4">
                    <div className="text-sm font-medium text-gray-900">{referral.id}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <div className="h-8 w-8 flex-shrink-0 bg-gradient-to-br from-indigo-50 to-blue-50 rounded-lg flex items-center justify-center">
                        <User className="h-5 w-5 text-indigo-600" />
                      </div>
                      <div className="ml-3">
                        <div className="text-sm font-medium text-gray-900">{referral.referrer.name}</div>
                        <div className="text-xs text-gray-500">{referral.referrer.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <div className="h-8 w-8 flex-shrink-0 bg-gradient-to-br from-indigo-50 to-blue-50 rounded-lg flex items-center justify-center">
                        <User className="h-5 w-5 text-indigo-600" />
                      </div>
                      <div className="ml-3">
                        <div className="text-sm font-medium text-gray-900">{referral.referred.name}</div>
                        <div className="text-xs text-gray-500">{referral.referred.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{referral.date}</div>
                    {referral.conversionDate && (
                      <div className="text-xs text-gray-500">Converted: {referral.conversionDate}</div>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">#{referral.reward.toLocaleString()}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(referral.status)}`}>
                      {referral.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getRewardStatusColor(referral.rewardStatus)}`}>
                      {referral.rewardStatus}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex items-center justify-end gap-2">
                      <button 
                        className="p-1.5 text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors duration-200"
                        title="View Details"
                      >
                        <Eye className="h-5 w-5" />
                      </button>
                      <button 
                        className="p-1.5 text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors duration-200"
                        title="More Options"
                      >
                        <MoreVertical className="h-5 w-5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
} 