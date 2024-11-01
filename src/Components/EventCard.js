import React from 'react';
import styled, { keyframes } from 'styled-components';

const EventCard = ({ event }) => {
  const { name, description, image, date, time, category,registrationOpen, registrationLink } = event;

  // Modified handleClick function to redirect to the registration link
  const handleClick = () => {
    if (registrationLink) {
      window.location.href = registrationLink;
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
                  <p><span>Date:</span> {date}</p>
                  <p><span>Time:</span> {time}</p>
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
    width: 350px; /* Set to 350px */
    height: 350px; /* Set to 350px */
    border-radius: 10px; /* Rounded corners for the gradient border */
    background: linear-gradient(0deg, #236e65, #7ecd73, #cff8d6); /* Gradient border */
    padding: 5px; /* Reduced padding to control border thickness */
    animation: ${pulseAnimation} 2s infinite; /* Subtle animation */
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .card {
    width: 100%;
    height: 100%;
    perspective: 1000px;
    position: relative;
    border: none; /* Removed the border */
    border-radius: 10px; /* Ensure the card has the same rounded corners */
    background-color: #81b9a2; /* Keep the front color here */
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
    overflow: hidden;
  }

  .front {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
  }

  .back {
    background-color: black; /* Changed to black for the backside */
    transform: rotateY(180deg); 
    display: flex;
    align-items: center;
    padding: 10px; /* Adjusted padding for smaller size */
    color: white;
    position: relative;
  }

  /* Front content styling to match example */
  .front-content {
    text-align: center;
    height: 100%; /* Ensures the front content fills the height */
    display: flex;
    flex-direction: column;
    justify-content: center; /* Center content vertically */
  }

  .img {
    width: 100%; /* Set to 100% to make the image fill the card */
    height: 100%; /* Ensure the div is 100% height */
    display: flex; /* Use flex to center the image */
    justify-content: center;
    align-items: center;
    overflow: hidden; /* Hide any overflow */
  }

  .img img {
    width: 100%; /* Fill the entire width */
    height: 100%; /* Fill the entire height */
    object-fit: cover; /* Ensures the image covers the area */
    border-radius: 8px;
  }

  .back-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    text-align: center;
  }

  .event-title {
    font-size: 1.4rem; /* Adjusted font size for smaller card */
    margin-bottom: 8px;
    color: #ffffff;
  }

  .event-details {
    font-size: 0.75rem; /* Adjusted font size for smaller card */
    color: #ffffffcc;
  }

  .event-details span {
    font-weight: 500;
    color: #ffffff;
  }

  .event-description {
    font-size: 0.85rem; /* Slightly increased font size for description */
    color: #ffffffcc;
    text-align: justify;
  }

  .register-button {
    background: linear-gradient(90deg, #236e65, #7ecd73, #cff8d6);
    color: black;
    border: none;
    font-weight: 1000;
    width: 100%; /* Set to 100% to make it fill the container */
  padding: 12px 15px; /* Increase padding for a larger button */
    border-radius: 5px;
    margin-top: 10px; /* Adjust margin for better spacing */
    font-size: 1rem; /* Increased font size for button */
    cursor: pointer;
    display: inline-block;
    transition: background-color 0.3s ease;
    align-self: center; /* Center the button */
    position: relative;
    z-index: 1;
  }

  .register-button:hover {
    background: linear-gradient(270deg, #236e65, #7ecd73, #cff8d6);
    color: black;
  }

  /* Apply flipping effect on hover */
  .card:hover .content {
    transform: rotateY(180deg);
  }
`;
export default EventCard;