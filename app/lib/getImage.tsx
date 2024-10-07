// import React, { useEffect, useState } from 'react';

// const GetImage: React.FC<ApiFetchProp> = ({ interval, url }) => {
//   const [imageUrl, setImageUrl] = useState<string | null>(null);
//   const [imageKey, setImageKey] = useState<number>(0);

//   useEffect(() => {
//     const fetchImage = () => {
//       fetch(url)
//         .then((response) => {
//           setImageUrl(response.url);
//           setImageKey((prevKey) => prevKey + 1); // to force update
//         })
//         .catch((error) => {
//           console.error('Error fetching image:', error);
//         });
//     };
//     fetchImage();
//     const intervalId = setInterval(fetchImage, interval);
//     return () => clearInterval(intervalId);
//   }, []);

//   return (
//     <div>
//       {imageUrl && <img key={imageKey} src={imageUrl} alt="Random" />}
//     </div>
//   );
// }

// export default GetImage;

// Flickering
// import React, { useEffect, useState } from 'react';

// interface GetImageProps {
//   interval: number;
//   url: string;
// }

// const GetImage: React.FC<GetImageProps> = ({ interval, url }) => {
//   const [imageUrl, setImageUrl] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchImage = () => {
//       fetch(url)
//         .then((response) => response.blob())
//         .then((blob) => {
//           const newUrl = URL.createObjectURL(blob);
//           setImageUrl((prevUrl) => {
//             if (prevUrl !== newUrl) {
//               return newUrl;
//             }
//             return prevUrl;
//           });
//         })
//         .catch((error) => {
//           console.error('Error fetching image:', error);
//         });
//     };

//     fetchImage();
//     const intervalId = setInterval(fetchImage, interval);

//     return () => clearInterval(intervalId);
//   }, [interval, url]);

//   return (
//     <div>
//       {imageUrl && <img src={imageUrl} alt="Dynamic content"  className="object-contain max-w-full max-h-full" />}
//     </div>
//   );
// };

// export default GetImage;

import React, { useEffect, useState } from 'react';

interface GetImageProps {
  interval: number;
  url: string;
}

const GetImage: React.FC<GetImageProps> = ({ interval, url }) => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [prevImageUrl, setPrevImageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const fetchImage = () => {
      fetch(url)
        .then((response) => response.blob())
        .then((blob) => {
          const newUrl = URL.createObjectURL(blob);

          // Set the previous image URL before updating the new one
          setPrevImageUrl(imageUrl);
          setImageUrl(newUrl);
          setLoading(true);
        })
        .catch((error) => {
          console.error('Error fetching image:', error);
        });
    };

    // Fetch the image and set up the interval
    fetchImage();
    timeoutId = setInterval(fetchImage, interval);

    // Clean up the interval and previous image URL on unmount
    return () => {
      clearInterval(timeoutId);
      if (prevImageUrl) {
        URL.revokeObjectURL(prevImageUrl);
      }
      if (imageUrl) {
        URL.revokeObjectURL(imageUrl);
      }
    };
  }, [interval, url, imageUrl]);

  return (
    <div className="w-full h-full flex justify-center items-center relative">
      {prevImageUrl && (
        <img
          src={prevImageUrl}
          // alt="Previous content"
          className="object-contain max-w-full max-h-full absolute"
        />
      )}
      {imageUrl && (
        <img
          src={imageUrl}
          alt="Dynamic content"
          className="object-contain max-w-full max-h-full"
          onLoad={() => setLoading(false)}
        />
      )}
    </div>
  );
};

export default GetImage;



