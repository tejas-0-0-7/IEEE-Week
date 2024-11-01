import React from 'react';
import styled, { keyframes } from 'styled-components';

const EventCard = ({ event }) => {
  const { name, description, image, date, time,price, priceIEEE,category,registrationOpen, registrationForm} = event;
  // Modified handleClick function to redirect to the registration link
  const handleClick = () => {
    console.log("Registration link:", registrationForm);
    if (registrationForm) {
      window.location.href = registrationForm;
    } else {
      console.warn("Registration link is not provided");
    }
  };

  return (
    <StyledWrapper>
      <div className="gradient-border">
        <div className="card">
          <div className="content">
            {/* Front of the card with title and event poster */}
            <div className="front">
              <div className="front-content">
                <div className="img">
                  <img src={image || "/images/default-event.jpg"} alt={`${name} event poster`} />
                </div>
              </div>
            </div>

            {/* Back of the card with title, date/time, venue, and description */}
            <div className="back">
              <div className="back-content">
                {/* Title prominently displayed */}
                <p className="event-title"><strong>{name}</strong></p>

                {/* Date, Time, and Venue in smaller font */}
                <div className="event-details">
                  <span>{date}</span>
                  <span>{time}</span> 
                  <span>{priceIEEE}  for IEEE Members</span>
                  <span>{price} for Non-IEEE Members</span>
                </div>

                {/* Event description */}
                <p className="event-description">{description}</p>

                {/* Register button redirects to external link */}
                <button className="register-button" onClick={handleClick}>Register</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};
// Subtle pulse animation for the gradient border
const pulseAnimation = keyframes`
  0%, 100% {
    box-shadow: 0 0 20px rgba(35, 110, 101, 0.6);
  }
  50% {
    box-shadow: 0 0 25px rgba(35, 110, 101, 1);
  }`
;



const StyledWrapper = styled.div`
  .gradient-border {
    width: 400px; 
    height: 400px;
    padding: 5px;
    background: linear-gradient(0deg, #236e65, #7ecd73, #236e65);
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px; /* Added margin-bottom to create space between cards */
  }

  .card {
    width: 100%;
    height: 100%;
    border-radius: 8px;
    background: rgba(35, 110, 101, 0.2);
    overflow: visible; /* Set overflow to visible to prevent clipping */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    transform-style: preserve-3d;
    transition: transform 0.6s;
  }
  .content {
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    transition: transform 0.6s;
  }

  .front, .back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    border-radius: 10px;
  }

  .front {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
  }

  .back {
    background-color: black; 
    transform: rotateY(180deg); 
    display: flex;
    align-items: center;
    padding: 20px; /* Increased padding */
    color: white;
    overflow: visible; /* Overflow content will be visible */
  }

  .front-content {
    text-align: center;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .img {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }

  .img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
  }

  .back-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px; /* Increased spacing */
    text-align: center;
    font-weight: bold; /* Make text bold */
  }

  .event-title {
    font-size: 1.2rem; /* Larger font size */
    margin-bottom: 10px;
    color: #ffffff;
  }

  .event-details {
    font-size: 0.85rem; /* Larger font size */
    color: #ffffffcc;
    margin-top: 10px; /* Add spacing between details */
  }

  .event-details span {
    display: block; /* Line break between details */
    font-weight: 600;
    color: #ffffff;
    margin-top: 5px; /* Spacing for better readability */
  }

  .event-description {
    font-size: 0.9rem; /* Larger font for better readability */
    color: #ffffffcc;
    text-align: justify;
    margin: 10px 0; /* Margins for spacing */
    line-height: 1.5; /* Improved line spacing */
  }

  .register-button {
    background: linear-gradient(90deg, #236e65, #7ecd73, #cff8d6);
    color: black;
    border: none;
    font-weight: 1000;
    width: 100%;
    padding: 14px 20px; /* Larger button */
    border-radius: 5px;
    margin-top: 15px; /* Increase margin for spacing */
    font-size: 1.2rem; /* Larger font for button */
    cursor: pointer;
    display: inline-block;
    transition: background-color 0.3s ease;
    align-self: center;
    position: relative;
    z-index: 1;
  }

  .register-button:hover {
    background: linear-gradient(270deg, #236e65, #7ecd73, #cff8d6);
    color: black;
  }

  .card:hover .content {
    transform: rotateY(180deg);
  }
`;
export default EventCard;