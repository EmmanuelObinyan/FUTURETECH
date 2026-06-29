import React from "react";
import {
  User,
  Lock,
  Bell,
  Moon,
  Globe,
  Trash2,
  LogOut,
  ChevronRight,
} from "lucide-react";

const SettingItem = ({ icon: Icon, title, subtitle, danger = false }) => (
  <button
    className={`w-full flex items-center justify-between p-4 rounded-xl transition-all duration-300 ${
      danger
        ? "hover:bg-red-500/10"
        : "hover:bg-slate-800"
    }`}
  >
    <div className="flex items-center gap-4">
      <div
        className={`p-3 rounded-lg ${
          danger ? "bg-red-500/20" : "bg-blue-600/20"
        }`}
      >
        <Icon
          className={`w-5 h-5 ${
            danger ? "text-red-400" : "text-blue-400"
          }`}
        />
      </div>

      <div className="text-left">
        <h3
          className={`font-medium ${
            danger ? "text-red-400" : "text-white"
          }`}
        >
          {title}
        </h3>

        <p className="text-sm text-gray-400">{subtitle}</p>
      </div>
    </div>

    <ChevronRight className="text-gray-500" size={18} />
  </button>
);

const SettingsPage = () => {
  return (
    <div className="min-h-screen bg-[#0f172a] text-white p-8">

      <div className="max-w-4xl mx-auto">

        <h1 className="text-3xl font-bold mb-2">
          Settings
        </h1>

        <p className="text-gray-400 mb-8">
          Manage your FutureTechs account preferences and security.
        </p>

        <div className="bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden">

          <SettingItem
            icon={User}
            title="Profile"
            subtitle="Edit your personal information"
          />

          <SettingItem
            icon={Lock}
            title="Password & Security"
            subtitle="Change password and secure your account"
          />

          <SettingItem
            icon={Bell}
            title="Notifications"
            subtitle="Manage email and push notifications"
          />

          <SettingItem
            icon={Moon}
            title="Appearance"
            subtitle="Switch between dark and light mode"
          />

          <SettingItem
            icon={Globe}
            title="Language & Region"
            subtitle="Select your preferred language"
          />

          <SettingItem
            icon={Trash2}
            title="Delete Account"
            subtitle="Permanently delete your account"
            danger
          />

          <SettingItem
            icon={LogOut}
            title="Logout"
            subtitle="Sign out from this device"
          />

        </div>

        <div className="mt-8 text-center text-gray-500 text-sm">
          FutureTechs v1.0.0
        </div>

      </div>

    </div>
  );
};

export default SettingsPage;
