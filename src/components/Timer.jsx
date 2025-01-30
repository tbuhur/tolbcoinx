import React, { useState, useEffect } from "react";

function Timer() {
  const [seconds, setSeconds] = useState(0);

  // Effect to update seconds every 1 second
  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    // Cleanup function to clear interval on component unmount
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array means this runs once on mount

  return (
    <div className="text-red-600">
      <p>Elapsed Time: {seconds} seconds</p>
    </div>
  );
}

export default Timer;
