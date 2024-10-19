import React, { useState, useEffect } from 'react';
import './Overtheyears.css';

const OverTheYears = () => {
  const [tickerIndex, setTickerIndex] = useState(0);
  
  const tickerItems = [
    "Year 2019: First event launched...",
    "Year 2020: Record-breaking participation...",
    "Year 2021: Going virtual with new success...",
    "Year 2022: Achieved milestones with 1000+ attendees...",
  ];

  const imageItems = [
    '/images/sod.jpeg',
    '/images/sushanth.jpg',
    '/images/sod.jpeg',
    '/images/sushanth.jpg',
    '/images/sod.jpeg',
  ];

  useEffect(() => {
    const tickerInterval = setInterval(() => {
      setTickerIndex((prevIndex) => (prevIndex + 1) % imageItems.length);
    }, 3000);

    return () => clearInterval(tickerInterval);
  }, []);

  return (
    <div className="over-the-years-section">
      <div className="image-ticker">
        <img src={imageItems[tickerIndex]} alt={`Year ${tickerIndex + 2019}`} />
      </div>
      <div className="description-section">
        <p className="description">
          Our event has seen exponential growth over the past few years, breaking attendance records and delivering exceptional experiences. With each passing year, we have introduced new segments, creative formats, and interactive elements that captivate our audience.
        </p>
        <p className="description">
          Join us this year to witness the grandeur and excitement as we continue to innovate and inspire! Don't miss out on the unforgettable moments and memories we create together.
        </p>
      </div>
    </div>
  );
}

export default OverTheYears;
