import React, { useEffect, useRef, useState } from 'react';
import Navbaring from '../Components/Nav';
import './Home.css';
import Slider from '../Components/Slider.js';
import './Slider.css';
import fetchEvents from '../Components/data.js';
import CountDown from '../Components/CountDown.js';
import AboutUs from '../Components/about_us.js';
import Overtheyears from '../Components/Overtheyears'; // Import the new component

function Home() {
  const vantaRef = useRef(null);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const vantaEffect = window.VANTA.NET({
      el: ".net",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,
      color: 0x428679,
      backgroundColor: 0x0,
      points: 25.00,
      maxDistance: 16.00,
      spacing: 15.00,
      showDots: false
    });

    const loadEvents = async () => {
      const fetchedEvents = await fetchEvents();
      const eventImages = fetchedEvents.map(event => ({ id: event._id, image: event.image }));
      setEvents(eventImages);
    };
    loadEvents();
  }, []);

  return (
    <div>
      <Navbaring />

      <div className="countdown-container">
        <CountDown />
      </div>
      <h2 className="events-title">Events</h2>

      <div className='center'>
        <Slider data={events} activeSlide={5} />
      </div>

      {/* Flagship Events Section */}
      <h2 className="flagship-title">Flagship Event</h2>

      <div className="flagship-container">
        <div className="flagship-event">
          <img src="/images/sod.jpeg" alt="Flagship Event Poster" className="poster" />
          <div className="description">
            <h3>Event Name 1</h3>
            <p>Short description about the first flagship event. Details about the event, time, and participants.</p>
            <button className="know-more-button">Know More</button>
          </div>
        </div>

        <div className="flagship-event reverse">
          <div className="description">
            <h3>Event Name 2</h3>
            <p>Short description about the second flagship event. Details about the event, time, and participants.</p>
            <button className="know-more-button">Know More</button>
          </div>
          <img src="/images/sod.jpeg" alt="Flagship Event Poster" className="poster" />
        </div>
        <div>
        <AboutUs />
        </div>
      </div>
    </div>
  );
}

export default Home;
