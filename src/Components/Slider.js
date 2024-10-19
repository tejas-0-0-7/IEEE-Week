import React, { useState } from 'react';

const Slider = (props) => {
  const [activeSlide, setActiveSlide] = useState(props.activeSlide);

  const handleSlideClick = (index) => {
    setActiveSlide(index); 
  };

  const next = () =>
    activeSlide < props.data.length - 1 && setActiveSlide(activeSlide + 1);

  const prev = () => activeSlide > 0 && setActiveSlide(activeSlide - 1);

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
      <div className="slideC">
        {props.data.map((item, i) => (
          <React.Fragment key={item.id}>
            <div
              className="slide"
              style={{
                ...getStyles(i)
              }}
              onClick={() => handleSlideClick(i)}
            >
              <SliderContent image={item.image} />
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
    </>
  );
};

const SliderContent = ({ image }) => {
  return (
    <div className="sliderContent">
      <img 
        src={image} 
        alt="Event"
        style={{
          width: "100%",
          objectFit: "cover",
          borderRadius: "12px",
        }}
      />
    </div>
  );
};

export default Slider;