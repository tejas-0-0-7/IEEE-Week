import React, { useEffect, useRef, useState } from 'react';
import Navbaring from '../Components/Nav';
import './Home.css';
import Slider from '../Components/Slider.js';
import './Slider.css';
import fetchEvents from '../Components/data.js';
import CountDown from '../Components/CountDown.js';
import Overtheyears from '../Components/Overtheyears'; // Import the new component


function Home() {
  // const initialVideoRef = useRef(null);
  // const backgroundVideoRef = useRef(null);
  const vantaRef = useRef(null);
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
 //   const hasWatchedVideo = localStorage.getItem('hasWatchedVideo');

    // if (!hasWatchedVideo) {
    //   initialVideoRef.current.style.display = 'block';
    //   initialVideoRef.current.play();

    //   initialVideoRef.current.addEventListener('ended', () => {
    //     initialVideoRef.current.style.display = 'none';
    //     backgroundVideoRef.current.style.display = 'block';
    //     backgroundVideoRef.current.play();
    //     localStorage.setItem('hasWatchedVideo', 'true');
    //   });
    // } else {
    //   initialVideoRef.current.style.display = 'none';
    //   backgroundVideoRef.current.style.display = 'block';
    //   backgroundVideoRef.current.play();
    // }
    const vantaEffect = window.VANTA.NET({
      el: ".net",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,
      color: 0xdaa520,
      backgroundColor: 0x0,
      points: 13.00,
      maxDistance: 16.00,
      spacing: 20.00,
      showDots: false
    })
    
    const loadEvents = async () => {
      try{
      setLoading(true);
      const fetchedEvents = await fetchEvents();
      console.log('fetchedEvents:', fetchedEvents);
      setEvents(fetchedEvents);
      }catch(error){
        setError(error);
      }finally{
        setLoading(false);
      }
    };
    loadEvents();
  }, []);

  return (
    
    <div>
      <Navbaring />

      {/* <div className="video-container">
        <video ref={initialVideoRef} id="video-initial" autoPlay muted>
          <source src="intro.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video ref={backgroundVideoRef} id="video-background" autoPlay muted>
          <source src="static.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div> */}

      <div className="countdown-container">
        <CountDown />
      </div>
      <h2 className="events-title">Events</h2>

      <div className='center'>
        {console.log('events:', events)}
        <Slider data={events} activeSlide={5} />
      </div>
      
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
      </div>
    </div>
  );
}

export default Home;
