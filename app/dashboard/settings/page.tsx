"use client"; 

import { useSettings } from '@/app/ui/settings/SettingsContext';
import React, { useState } from 'react';




const SettingsPage = () => {
  const { settings, updateSettings } = useSettings();
  const [theme, setTheme] = useState(settings.theme);
  const [language, setLanguage] = useState(settings.language);

  const handleSave = () => {
    updateSettings({ theme, language });
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Settings</h1>
      <div className="mb-4">
        <label className="block mb-2">Theme:</label>
        <select
          value={theme}
          onChange={(e) => setTheme(e.target.value)}
          className="border border-gray-300 rounded p-2"
        >
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block mb-2">Language:</label>
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="border border-gray-300 rounded p-2"
        >
          <option value="en">English</option>
          <option value="es">Spanish</option>
        </select>
      </div>
      <button
        onClick={handleSave}
        className="bg-blue-500 text-white p-2 rounded"
      >
        Save Settings
      </button>
    </div>
  );
};

export default SettingsPage;