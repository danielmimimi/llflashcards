import React, { useState } from 'react';

interface FetchButtonProps {
    title:string;
  url: string;
}

const FetchButton: React.FC<FetchButtonProps> = ({title, url }) => {
  const [data, setData] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleFetch = () => {
    setLoading(true);
    setError(null);

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json(); // Assuming JSON response, adjust if needed.
      })
      .then((data) => {
        setData(JSON.stringify(data, null, 2)); // Format the JSON data as a string
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  };

  return (
    <div className="flex flex-col w-full h-full">
      <button
        onClick={handleFetch}
        className="flex-grow bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
      >
       {title} 
      </button>
      {/* <div className="flex-grow mt-4 bg-gray-100 p-4 rounded-lg shadow-md overflow-y-auto">
        {loading && <p>Loading...</p>}
        {error && <p className="text-red-500">Error: {error}</p>}
        {data && <pre className="whitespace-pre-wrap">{data}</pre>}
      </div> */}
    </div>
  );
};

export default FetchButton;
