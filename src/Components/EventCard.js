import React from 'react';
import './EventCard.css';

const EventCard = ({ event, onShowForm }) => {
  const { name, description, image, date, time, venue } = event;

  const handleClick = () => {
    onShowForm(event);
  };

  return (
    <div className="event-container">
      <div className="item-container">
        <div className="img-container">
          <img src={image || "/images/default-event.jpg"} alt={`${name} event`} />
        </div>

        <div className="body-container">
          <div className="overlay"></div>

          <div className="event-info">
            <p className="title">{name}</p>
            <div className="separator"></div>

            <div className="additional-info">
              <p className="info">{description}</p>
              <p className="date-time">
                {new Date(date).toLocaleDateString()} at {time}
              </p>
              <p className="venue">{venue}</p>
            </div>
          </div>
          <button className="action" onClick={handleClick}>Register!</button>
        </div>
      </div>
    </div>
  );
};

export default EventCard;