import React, { useState } from 'react';
import '../pages/Slider.css';

export default (props) => {
  const [activeSlide, setactiveSlide] = useState(props.activeSlide || 0);

  if (!props.data || props.data.length === 0) {
    return <div>Loading...</div>;
  }
	
  const handleSlideClick = (index) => {
    setactiveSlide(index); 
  };

  // Updated function for handling double-click to open link in a new tab
  const handleDoubleClick = (registrationForm) => {
    if (registrationForm) {
      window.open(registrationForm, '_blank'); // Open the link in a new tab
    }
  };

  const next = () =>
    activeSlide < props.data.length - 1 && setactiveSlide(activeSlide + 1);

  const prev = () => activeSlide > 0 && setactiveSlide(activeSlide - 1);

  const getStyles = (index) => {
    if (activeSlide === index) {
      return {
        opacity: 1,
        transform: "translateX(0px) translateZ(0px) rotateY(0deg)",
        zIndex: 10
      };
    } else if (activeSlide - 1 === index) {
      return {
        opacity: 1,
        transform: "translateX(-240px) translateZ(-300px) rotateY(30deg)",
        zIndex: 9
      };
    } else if (activeSlide + 1 === index) {
      return {
        opacity: 1,
        transform: "translateX(240px) translateZ(-300px) rotateY(-30deg)",
        zIndex: 9
      };
    } else if (activeSlide - 2 === index) {
      return {
        opacity: 1,
        transform: "translateX(-480px) translateZ(-400px) rotateY(45deg)",
        zIndex: 8
      };
    } else if (activeSlide + 2 === index) {
      return {
        opacity: 1,
        transform: "translateX(480px) translateZ(-400px) rotateY(-45deg)",
        zIndex: 8
      };
    } else if (activeSlide - 3 === index) {
      return {
        opacity: 1,
        transform: "translateX(-720px) translateZ(-500px) rotateY(60deg)",
        zIndex: 7
      };
    } else if (activeSlide + 3 === index) {
      return {
        opacity: 1,
        transform: "translateX(720px) translateZ(-500px) rotateY(-60deg)",
        zIndex: 7
      };
    } else if (index < activeSlide - 3) {
      return {
        opacity: 1,
        transform: "translateX(-960px) translateZ(-600px) rotateY(75deg)",
        zIndex: 6
      };
    } else if (index > activeSlide + 3) {
      return {
        opacity: 1,
        transform: "translateX(960px) translateZ(-600px) rotateY(-75deg)",
        zIndex: 6
      };
    }
  };

  return (
    <>
      {/* carousel */}
      <div className="slideC">
        {props.data && props.data.map((item, i) => (
          <React.Fragment key={item.id}>
            <div
              className="slide"
              style={{
                ...getStyles(i)
              }}
              onClick={() => handleSlideClick(i)}
              onDoubleClick={() => handleDoubleClick(item.registrationForm)} // Double-click handler for new tab
            >
              <SliderContent {...item} />
            </div>
            <div
              className="reflection"
              style={{
                ...getStyles(i)
              }}
            />
          </React.Fragment>
        ))}
      </div>
      {/* carousel */}
    </>
  );
};

const SliderContent = (props) => {
  return (
    <div className="sliderContent">
      <img src={`${props.image}`} 
      style={{
        width:"100%",
        objectFit:"cover",
        borderRadius: "12px",
      }} alt="slide content">
      </img>
    </div>
  );
};
