import React from 'react';
import './EventCard.css';
import { useNavigate } from 'react-router-dom'; 

function EventCard(props) {

  const navigate = useNavigate(); 
  const handleClick = () => {
    navigate('/eventdescription'); 
  };

  return (
    <div className="event-container">
      <div className="item-container">
        <div className="img-container">
          <img src="./images/Tejas(Treasurer).jpg" alt="Event image" />
        </div>

        <div className="body-container">
          <div className="overlay"></div>

          <div className="event-info">
            <p className="title">Bihar ka Majdur</p>
            <div className="separator"></div>

            <div className="additional-info">
              <p className="info description">
                Has experience of travelling over 50 kilometers everyday. A little weak in English but his proficiency in Minecraft makes him the perfect worker. Hire him today! Pro tip: Keep him fed or he can start getting annoying pretty quick.
              </p>
            </div>
          </div>
          <button className="action" onClick={handleClick}>Book him!</button>
        </div>
      </div>
    </div>
  );
}

export default EventCard;
