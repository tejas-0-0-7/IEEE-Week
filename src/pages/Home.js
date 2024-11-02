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
        // console.log(events)
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
          <img src="/images/NCOH.jpg" alt="Flagship Event Poster" className="poster" />
          <div className="description">
            <h3>The Nine Circles of Hell </h3>
            <p>Join us for The Nine Circles of Hell, a thrilling non-technical flagship event by the BMSCE IEEE Student Branch! Inspired by Dante's Inferno, this immersive journey challenges participants with unique trials in each circle. Overcome the infernal obstacles to compete for exciting prizes! Are you ready to face the depths? Register now</p>
            <a href="https://forms.gle/oXV7BCGUDs6yL5jm6" target='__blank'>
             <button className="know-more-button">Register!</button>
            </a>
          </div>
        </div>
        <div className="flagship-event reverse">
          <img src="/images/API.jpg" alt="Flagship Event Poster" className="poster" />
          <div className="description">
            <h3>API and REST</h3>
            <p>
            Join us at the API Workshop, where connectivity meets innovation! This hands-on session covers API essentials, including REST architecture, design, testing, and security. Perfect for developers and tech enthusiasts looking to enhance their skills and network within the tech community. </p>
            <a href="https://forms.gle/H2bzi6CzFST3ZctT6" target='__blank'>
              <button className="know-more-button">Register!</button>
            </a>
          </div>
        </div>
        <AboutUs />
      </div>
    </div>
  );
}

export default Home;



// PS C:\Users\vigne\OneDrive\Desktop\IEEE_DAY_WEBSITE\IEEE-Week\backend> cd..
// PS C:\Users\vigne\OneDrive\Desktop\IEEE_DAY_WEBSITE\IEEE-Week> git add .
// PS C:\Users\vigne\OneDrive\Desktop\IEEE_DAY_WEBSITE\IEEE-Week> git commit -m "homepage done" 
// [master f5e2908] homepage done
//  56 files changed, 324 insertions(+), 224 deletions(-)
// PS C:\Users\vigne\OneDrive\Desktop\IEEE_DAY_WEBSITE\IEEE-Week> git push 