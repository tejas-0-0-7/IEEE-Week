import React from 'react';
import './EventCard.css';

const EventCard = ({ onShowForm }) => {
  return (
    <div className="event-container">
      <div className="item-container">
        <div className="img-container">
          <img src="/images/sod.jpeg" alt="Event image" />
        </div>

        <div className="body-container">
          <div className="overlay"></div>

          <div className="event-info">
            <p className="title">Science of Deduction</p>
            <div className="separator"></div>

            <div className="additional-info">
              <p className="info description">
                Event description goes here...
              </p>
            </div>
          </div>
          <button className="action" onClick={onShowForm}>Register</button>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
