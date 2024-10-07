// import React, { useEffect, useState } from 'react';

// const GetText: React.FC<ApiFetchProp> = ({ interval, url }) => {
//   const [textToDisplay, setText] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchText = () => {
//       fetch(url)
//         .then((response) => response.json())
//         .then((data) => {
//           if (Array.isArray(data) && data.length > 0) {
//             setText(data[0]);
//           } else {
//             setText('No word found');
//           }
//         })
//         .catch((error) => {
//           console.error('Error fetching data:', error);
//           setText('Error fetching data');
//         });
//     };

//     fetchText(); // Fetch immediately on component mount
//     const intervalId = setInterval(fetchText, interval); // Fetch periodically

//     return () => clearInterval(intervalId); // Cleanup interval on component unmount
//   }, [interval]);

//   return <div>{textToDisplay}</div>;
// };

// export default GetText;


import React, { useEffect, useState } from 'react';

interface ApiFetchProp {
  interval: number;
  url: string;
}

const GetText: React.FC<ApiFetchProp> = ({ interval, url }) => {
  const [localTime, setLocalTime] = useState<string | null>(null);
  const [uptime, setUptime] = useState<string | null>(null);
  const [blocks, setBlocks] = useState<Array<{ id: string, start: string, end: string, numbytes: string }>>([]);

  useEffect(() => {
    const fetchText = () => {
      fetch(url)
        .then((response) => response.text())
        .then((xmlString) => {
          const parser = new DOMParser();
          const xmlDoc = parser.parseFromString(xmlString, 'application/xml');

          // Extract <localtime> and <uptime>
          const localTimeNode = xmlDoc.querySelector('localtime');
          const uptimeNode = xmlDoc.querySelector('uptime');
          setLocalTime(localTimeNode ? localTimeNode.textContent : 'No local time found');
          setUptime(uptimeNode ? uptimeNode.textContent : 'No uptime found');

          // Extract block details
          const blockNodes = xmlDoc.querySelectorAll('block');
          const blocksData: Array<{ id: string, start: string, end: string, numbytes: string }> = [];
          blockNodes.forEach((block) => {
            const id = block.getAttribute('id') || 'N/A';
            const start = block.querySelector('start')?.textContent || 'N/A';
            const end = block.querySelector('end')?.textContent || 'N/A';
            const numbytes = block.querySelector('numbytes')?.textContent || 'N/A';
            blocksData.push({ id, start, end, numbytes });
          });
          setBlocks(blocksData);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
          setLocalTime('Error fetching data');
          setUptime('Error fetching data');
        });
    };

    fetchText(); // Fetch immediately on component mount
    const intervalId = setInterval(fetchText, interval); // Fetch periodically

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, [interval, url]);

  return (
    <div>
      <h3>System Info</h3>
      <p><strong>Local Time:</strong> {localTime}</p>
      <p><strong>Uptime:</strong> {uptime}</p>

      <h3>Track Blocks</h3>
      {blocks.length > 0 ? (
        <ul>
          {blocks.map((block, index) => (
            <li key={index}>
              <strong>Block ID:</strong> {block.id}<br />
              <strong>Start:</strong> {block.start}<br />
              <strong>End:</strong> {block.end}<br />
              <strong>Num Bytes:</strong> {block.numbytes}
            </li>
          ))}
        </ul>
      ) : (
        <p>No blocks found.</p>
      )}
    </div>
  );
};

export default GetText;