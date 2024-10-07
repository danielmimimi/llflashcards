'use client';
import React from 'react';

interface DropdownProps {
  options: string[];
  onChange: (value: string) => void;
  defaultValue?: string;
}

const Dropdown: React.FC<DropdownProps> = ({ options, onChange, defaultValue }) => {
  return (
    <select
      className="border rounded px-3 py-2"
      onChange={(e) => onChange(e.target.value)}
      defaultValue={defaultValue}
    >
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;