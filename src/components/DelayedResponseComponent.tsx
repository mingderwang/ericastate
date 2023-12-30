import React, { useEffect, useState } from 'react';
const DelayedResponseComponent = () => {
    const [response, setResponse] = useState('');
  
    useEffect(() => {
      // Simulate a delay of 2 seconds
      const delay = 2000;
  
      const fetchData = async () => {
        // Simulate an asynchronous operation, e.g., fetching data from an API
        // In a real-world scenario, you would replace this with your actual async operation
        await new Promise(resolve => setTimeout(resolve, delay));
  
        // Set the response after the delay
        setResponse('Delayed response received!');
      };
  
      fetchData();
    }, []); // The empty dependency array ensures the effect runs only once after the initial render
  
    return (
      <div>
        {!response && <p>Loading...</p>}
        {response && <p>{response}</p>}
      </div>
    );
  };
  
  export default DelayedResponseComponent;