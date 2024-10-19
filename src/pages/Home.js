import React, { useEffect, useRef, useState } from 'react';
import Navbaring from '../Components/Nav';
import './Home.css';
import Slider from '../Components/Slider.js';
import './Slider.css';
import fetchEvents from '../Components/data.js';
import CountDown from '../Components/CountDown.js';
import Overtheyears from '../Components/Overtheyears'; // Import the new component

function Home() {
  const initialVideoRef = useRef(null);
  const backgroundVideoRef = useRef(null);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const hasWatchedVideo = localStorage.getItem('hasWatchedVideo');

    if (!hasWatchedVideo) {
      initialVideoRef.current.style.display = 'block';
      initialVideoRef.current.play();

      initialVideoRef.current.addEventListener('ended', () => {
        initialVideoRef.current.style.display = 'none';
        backgroundVideoRef.current.style.display = 'block';
        backgroundVideoRef.current.play();
        localStorage.setItem('hasWatchedVideo', 'true');
      });
    } else {
      initialVideoRef.current.style.display = 'none';
      backgroundVideoRef.current.style.display = 'block';
      backgroundVideoRef.current.play();
    }

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

      <div className="video-container">
        <video ref={initialVideoRef} id="video-initial" autoPlay muted>
          <source src="intro.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video ref={backgroundVideoRef} id="video-background" autoPlay muted>
          <source src="static.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="countdown-container">
        <CountDown />
      </div>
      <h2 className="events-title">Events</h2>

      <div className='center'>
        <Slider data={events} activeSlide={5} />
      </div>
<<<<<<< HEAD

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
      </div>
    </div>
  );
}

export default Home;
=======

      <div>
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
      {/* "Over the Years" Section */}
      <Overtheyears /> {/* Call the new component here */}

    </div>
  );
}
export default Home;
>>>>>>> 90f28bf56f2bf445c4e4f4673c042ded62e0e5eb
