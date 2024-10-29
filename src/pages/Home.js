import React, { useEffect, useRef, useState } from 'react';
import Navbaring from '../Components/Nav';
import './Home.css';
import Slider from '../Components/Slider.js';
import fetchEvents from '../Components/data.js';
import CountDown from '../Components/CountDown.js';
import AboutUs from '../Components/about_us.js';

function Home() {
  const vantaRef = useRef(null);
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
      try {
        setLoading(true);
        const fetchedEvents = await fetchEvents();
        setEvents(fetchedEvents || []);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
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
      <div className="center">
        <Slider data={events} activeSlide={5} />
      </div>
      
      <h2 className="flagship-title">Flagship Event</h2>
      <div className="flagship-container">
        <div className="flagship-event">
          <img src="/images/sod.jpeg" alt="Flagship Event Poster" className="poster" />
          <div className="description">
            <h3>The Nine Circles of Hell </h3>
            <p>Join us for The Nine Circles of Hell, a thrilling non-technical flagship event by the BMSCE IEEE Student Branch! Inspired by Dante's Inferno, this immersive journey challenges participants with unique trials in each circle. Overcome the infernal obstacles to compete for exciting prizes! Are you ready to face the depths? Register now</p>
            <button className="know-more-button">Know More</button>
          </div>
        </div>
        <div className="flagship-event reverse">
          <img src="/images/sod.jpeg" alt="Flagship Event Poster" className="poster" />
          <div className="description">
            <h3>TECH EXPO</h3>
            <p>Join us at the Tech Expo, where innovation meets opportunity! This event will showcase a variety of companies presenting their cutting-edge products and solutions, creating a vibrant platform for networking and collaboration within the tech community. </p>
            <button className="know-more-button">Know More</button>
          </div>
        </div>
        <AboutUs />
      </div>
    </div>
  );
}

export default Home;
