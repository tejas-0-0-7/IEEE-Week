import React,{useState} from 'react'
export default (props) => {
  const [activeSlide, setactiveSlide] = useState(props.activeSlide);
  const handleSlideClick = (index) => {
    setactiveSlide(index); 
  };

  const next = () =>
    activeSlide < props.data.length - 1 && setactiveSlide(activeSlide + 1);

  const prev = () => activeSlide > 0 && setactiveSlide(activeSlide - 1);

  const getStyles = (index) => {
    if (activeSlide === index) {
      // Center card (fully visible)
      return {
        opacity: 1,
        transform: "translateX(0px) translateZ(0px) rotateY(0deg)",
        zIndex: 10
      };
    } 
    else if (activeSlide - 1 === index) {
      // First card to the left
      return {
        opacity: 1,
        transform: "translateX(-240px) translateZ(-300px) rotateY(30deg)",
        zIndex: 9
      };
    } 
    else if (activeSlide + 1 === index) {
      // First card to the right
      return {
        opacity: 1,
        transform: "translateX(240px) translateZ(-300px) rotateY(-30deg)",
        zIndex: 9
      };
    } 
    else if (activeSlide - 2 === index) {
      // Second card to the left (wider angle, further back)
      return {
        opacity: 1,
        transform: "translateX(-480px) translateZ(-400px) rotateY(45deg)",
        zIndex: 8
      };
    } 
    else if (activeSlide + 2 === index) {
      // Second card to the right (wider angle, further back)
      return {
        opacity: 1,
        transform: "translateX(480px) translateZ(-400px) rotateY(-45deg)",
        zIndex: 8
      };
    } 
    else if (activeSlide - 3 === index) {
      // Third card to the left (even wider angle, even further back)
      return {
        opacity: 1,
        transform: "translateX(-720px) translateZ(-500px) rotateY(60deg)",
        zIndex: 7
      };
    } 
    else if (activeSlide + 3 === index) {
      // Third card to the right (even wider angle, even further back)
      return {
        opacity: 1,
        transform: "translateX(720px) translateZ(-500px) rotateY(-60deg)",
        zIndex: 7
      };
    } 
    else if (index < activeSlide - 3) {
      // Cards further left (barely visible)
      return {
        opacity: 1,
        transform: "translateX(-960px) translateZ(-600px) rotateY(75deg)",
        zIndex: 6
      };
    } 
    else if (index > activeSlide + 3) {
      // Cards further right (barely visible)
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
        {props.data.map((item, i) => (
          <React.Fragment key={item.id}>
            <div
              className="slide"
              style={{
                ...getStyles(i)
              }}
              onClick={() => handleSlideClick(i)}
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
      <img src={props.image} 
      style={{
        width: "400px" ,
        height: "320px",
        WebkitBoxReflect: "below 3px -webkit-gradient(linear, left top, left bottom, from(transparent), color-stop(75%, transparent), to(white))",
      }}>
      </img>
    </div>
  );
};

