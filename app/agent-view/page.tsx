'use client'
import React, { useEffect, useState } from 'react';

export default function Page() {
  return <div> 
    <Greeting/>
    <Greeting/>
  </div>;
}

function Greeting() {
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  useEffect(() => {
    const fetchImage = () => {
      fetch('https://picsum.photos/200/300')
        .then((response) => {
          setImageUrl(response.url);
        })
        .catch((error) => {
          console.error('Error fetching image:', error);
        });
    };
    fetchImage();
    const intervalId = setInterval(fetchImage, 100);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <p>Hello</p>
      {imageUrl && <img src={imageUrl} alt="Random from Picsum" />}
    </div>
  );
}