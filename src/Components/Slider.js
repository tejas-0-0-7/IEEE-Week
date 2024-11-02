import React, { useState, useEffect } from 'react';
import '../pages/Slider.css';

const Slider = ({ data, activeSlide: initialActiveSlide = 0 }) => {
  const [activeSlide, setActiveSlide] = useState(initialActiveSlide);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [touchStartX, setTouchStartX] = useState(null); // Added state for touch start position

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleTouchStart = (e) => {
      setTouchStartX(e.touches[0].clientX);
    };

    const handleTouchMove = (e) => {
      if (!touchStartX) return;
      const touchEndX = e.touches[0].clientX;
      const diffX = touchStartX - touchEndX;

      if (diffX > 50) {
        // Swipe left
        next();
      } else if (diffX < -50) {
        // Swipe right
        prev();
      }

      setTouchStartX(null);
    };

    if (isMobile) {
      window.addEventListener('touchstart', handleTouchStart);
      window.addEventListener('touchmove', handleTouchMove);
    }
    return () => {
      if (isMobile) {
        window.removeEventListener('touchstart', handleTouchStart);
        window.removeEventListener('touchmove', handleTouchMove);
      }
    };
  }, [activeSlide, isMobile, touchStartX]);

  const next = () => activeSlide < data.length - 1 && setActiveSlide(activeSlide + 1);
  const prev = () => activeSlide > 0 && setActiveSlide(activeSlide - 1);

  const getStyles = (index) => {
    const offsetMultiplier = isMobile ? 1.2 : 2;
    const translateXBase = isMobile ? 150 : 240;
    const translateZBase = isMobile ? -200 : -300;

    if (activeSlide === index) {
      return {
        opacity: 1,
        transform: `translateX(0px) translateZ(0px) rotateY(0deg)`,
        zIndex: 10,
      };
    } else if (Math.abs(activeSlide - index) <= 3) {
      const direction = index > activeSlide ? 1 : -1;
      const offset = Math.abs(activeSlide - index);
      return {
        opacity: 1,
        transform: `translateX(${direction * translateXBase * offset}px) 
                    translateZ(${translateZBase - offset * 100}px) 
                    rotateY(${direction * 30 * offsetMultiplier}deg)`,
        zIndex: 10 - offset,
      };
    }
    return { opacity: 0, zIndex: 1 };
  };

  if (!data || data.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="slideC">
        {data.map((item, i) => (
          <React.Fragment key={item.id}>
            <div
              className="slide"
              style={getStyles(i)}
              onClick={() => setActiveSlide(i)}
              onDoubleClick={() => window.open(item.registrationForm, '_blank')}
            >
              <SliderContent {...item} />
            </div>
            <div className="reflection" style={getStyles(i)} />
          </React.Fragment>
        ))}
      </div>
    </>
  );
};

const SliderContent = ({ image }) => (
  <div className="sliderContent">
    <img
      src={image}
      style={{
        width: "100%",
        objectFit: "cover",
        borderRadius: "12px",
      }}
      alt="slide content"
    />
  </div>
);

export default Slider;
