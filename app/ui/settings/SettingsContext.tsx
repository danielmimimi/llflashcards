"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the shape of your settings state
interface Settings {
  theme: 'light' | 'dark';
  language: 'en' | 'es';
}

// Define the context value type
interface SettingsContextType {
  settings: Settings;
  updateSettings: (newSettings: Partial<Settings>) => void;
}

// Define default settings
const defaultSettings: Settings = {
  theme: 'light',
  language: 'en',
};

// Create Context
const SettingsContext = createContext<SettingsContextType | undefined>(undefined);

// Create a Provider Component
export const SettingsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [settings, setSettings] = useState<Settings>(defaultSettings);

  const updateSettings = (newSettings: Partial<Settings>) => {
    setSettings((prevSettings) => ({
      ...prevSettings,
      ...newSettings,
    }));
  };

  return (
    <SettingsContext.Provider value={{ settings, updateSettings }}>
      {children}
    </SettingsContext.Provider>
  );
};

// Custom hook to use settings
export const useSettings = (): SettingsContextType => {
  const context = useContext(SettingsContext);
  if (!context) {
    throw new Error('useSettings must be used within a SettingsProvider');
  }
  return context;
};