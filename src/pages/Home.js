import React, { useEffect, useRef } from 'react';
import Navbaring from '../Components/Nav';
import Footer from '../Components/Foot';
import './Home.css';
import Slider from '../Components/Slider.js';
import './Slider.css';
import data from '../Components/data.js';
import CountDown from '../Components/CountDown.js';

function Home() {
  const initialVideoRef = useRef(null);
  const backgroundVideoRef = useRef(null);

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

      <CountDown />

      <div className='center'>
        <Slider data={data} activeSlide={5} />
      </div>

      <Footer />
    </div>
  );
}

export default Home;
