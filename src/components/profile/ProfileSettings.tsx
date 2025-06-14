import { Bell, Lock, CreditCard, ChevronRight } from "lucide-react";

export default function ProfileSettings() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Account Settings</h3>
      <div className="space-y-4">
        <button className="w-full flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
          <div className="flex items-center gap-3">
            <Bell className="h-5 w-5 text-gray-400" />
            <div>
              <p className="font-medium text-gray-900">Notification Preferences</p>
              <p className="text-sm text-gray-500">Manage your notification settings</p>
            </div>
          </div>
          <ChevronRight className="h-5 w-5 text-gray-400" />
        </button>
        <button className="w-full flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
          <div className="flex items-center gap-3">
            <Lock className="h-5 w-5 text-gray-400" />
            <div>
              <p className="font-medium text-gray-900">Privacy Settings</p>
              <p className="text-sm text-gray-500">Manage your privacy preferences</p>
            </div>
          </div>
          <ChevronRight className="h-5 w-5 text-gray-400" />
        </button>
        <button className="w-full flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
          <div className="flex items-center gap-3">
            <CreditCard className="h-5 w-5 text-gray-400" />
            <div>
              <p className="font-medium text-gray-900">Payment Methods</p>
              <p className="text-sm text-gray-500">Manage your payment information</p>
            </div>
          </div>
          <ChevronRight className="h-5 w-5 text-gray-400" />
        </button>
      </div>
    </div>
  );
} 