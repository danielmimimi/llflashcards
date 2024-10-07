'use client'
import React, { useEffect, useState } from 'react';
import config from '../../config.json'; // Adjust the path as necessary based on your project structure
import GetImage from '@/app/lib/getImage';
import FetchButton from '@/app/lib/fetchButton';
import GetText from '@/app/lib/getText';
import Dropdown from '@/app/lib/dropdown';
import { useSettings } from '@/app/ui/settings/SettingsContext';

const Page: React.FC = () => {
  const { intervalDuration,url1,url2,url3 } = config;
  const { settings } = useSettings();
  const [expandedImage, setExpandedImage] = useState<string | null>(null);

  const [dropdownValue, setDropdownValue] = useState<string | null>(null);
  const dropdownOptions = ['Network A', 'Network B', 'Network C'];

  const handleDropdownChange = (value: string) => {
    setDropdownValue(value);
    console.log('Selected:', value);
  };

return (
  <div className="min-h-screen flex flex-col items-center justify-center">
    <div className="grid grid-cols-2 grid-rows-6 gap-4 p-4 bg-white rounded-lg shadow-lg w-full h-screen">
      <div className="col-span-1 row-span-1 flex justify-center items-center">
        <FetchButton title={'Reset'} url={url3}/>
      </div>
      <div className="col-span-1 flex justify-center items-center">
        <GetText interval={intervalDuration} url={url3} />
      </div>
        <div className="col-span-2 flex justify-center items-center">
        <Dropdown
          options={dropdownOptions}
          onChange={handleDropdownChange}
          defaultValue="Option 1" // Set a default value if needed
        />
        </div>
      <div className="col-span-2 row-span-3 flex justify-center items-center overflow-hidden">
        {/* The image will stay within this grid cell */}
        <GetImage interval={intervalDuration} url={url1} />
      </div>
      <div className="col-span-1 row-span-1 flex">
        <FetchButton title={'Start'} url={url3}/>
      </div>
      <div className="col-span-1 row-span-1 flex">
        <FetchButton title={'Stop'} url={url3}/>
      </div>
      <div className="col-span-2 flex justify-center items-center">
        <h1>Maybe Agent Console</h1>
      </div>
    </div>
  </div>
);
};


export default Page;