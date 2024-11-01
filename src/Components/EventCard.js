import React from 'react';
import styled from 'styled-components';

const EventCard = ({ event, onShowForm }) => {
  const { name, description, image, date, time, venue } = event;

  const handleClick = () => {
    onShowForm(event);
  };

  return (
    <StyledWrapper>
      <div className="card">
        <div className="content">
          {/* Front of the card with the event poster */}
          <div className="front">
            <div className="img">
            <img src={image || "/images/default-event.jpg"} alt={`${name} event poster`} />
            </div>
            <div className="front-content">
              <small className="badge">Event</small>
              <div className="title">
                <strong>{name}</strong>
              </div>
            </div>
          </div>

          {/* Back of the card with event details */}
          <div className="back">
            <div className="back-content">
              <p className="event-name"><strong>{name}</strong></p>
              <div className="details">
                <p className="event-date">
                  <span>Date:</span> {new Date(date).toLocaleDateString()} <br />
                  <span>Time:</span> {time}
                </p>
                <p className="event-venue">
                  <span>Venue:</span> {venue}
                </p>
              </div>
              <p className="event-description">{description}</p>
              <button className="register-button" onClick={handleClick}>Register</button>
            </div>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card {
    width:300px;
    height:300px;
    position: relative;
  }
  .img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }


  .content {
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    transition: transform 300ms;
    box-shadow: 0px 0px 10px 1px #000000ee;
    border-radius: 5px;
  }

  .front, .back {
    background-color: #151515;
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    border-radius: 5px;
    overflow: hidden;
  }
    .front {
    transform: rotateY(0deg); 
  }
.back {
    transform: rotateY(180deg); 
    width: 100%;
    height: 100%;
    justify-content: center;
    display: flex;
    align-items: center;
    overflow: hidden;
    color: white;
    padding: 15px;
  }
  
  .title {
    font-size: 1rem;
    margin-top: 6px;
  }

  .back {
    width: 100%;
    height: 100%;
    justify-content: center;
    display: flex;
    align-items: center;
    overflow: hidden;
    color: white;
    padding:15px;
  }

  .back::before {
    position: absolute;
    content: ' ';
    display: block;
    width: 160px;
    height: 160%;
    background: linear-gradient(90deg, transparent, #ff9966, #ff9966, #ff9966, #ff9966, transparent);
    animation: rotation_481 5000ms infinite linear;
  }

  .back-content {
    position: absolute;
    width: 99%;
    height: 99%;
    background-color: #151515;
    border-radius: 5px;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }

  .card:hover .content {
    transform: rotateY(180deg);
  }
    .event-name {
    font-size: 1rem;
    margin-bottom: 8px;
    text-align: center;
  }

  .details {
    font-size: 0.85rem;
    margin-bottom: 10px;
    line-height: 1.5;
  }

  .event-date, .event-venue {
    margin: 5px 0;
    font-weight: 300;
  }

  .event-date span, .event-venue span {
    font-weight: 500;
    color: #ff9966;
  }

  .event-description {
    font-size: 0.8rem;
    margin: 10px 0;
    color: #ffffffcc;
    text-align: center;
  }

  .register-button {
    display: block;
    width: 100%;
    padding: 8px 0;
    background-color: #ff9966;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 0.9rem;
    text-align: center;
  }

  .register-button:hover {
    background-color: #ff8866;
  }

  @keyframes rotation_481 {
    0% {
      transform: rotateZ(0deg);
    }

    0% {
      transform: rotateZ(360deg);
    }
  }


  .front .front-content {
    position: absolute;
    width: 100%;
    height: 100%;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .front-content .badge {
    background-color: #00000055;
    padding: 2px 10px;
    border-radius: 10px;
    backdrop-filter: blur(2px);
    width: fit-content;
  }

  .description {
    box-shadow: 0px 0px 10px 5px #00000088;
    width: 100%;
    padding: 10px;
    background-color: #00000099;
    backdrop-filter: blur(5px);
    border-radius: 5px;
  }

  .title {
    font-size: 11px;
    max-width: 100%;
    display: flex;
    justify-content: space-between;
  }

  .title p {
    width: 50%;
  }

  .card-footer {
    color: #ffffff88;
    margin-top: 5px;
    font-size: 8px;
  }

  .front .img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  .circle {
    width: 90px;
    height: 90px;
    border-radius: 50%;
    background-color: #ffbb66;
    position: relative;
    filter: blur(15px);
    animation: floating 2600ms infinite linear;
  }

  #bottom {
    background-color: #ff8866;
    left: 50px;
    top: 0px;
    width: 150px;
    height: 150px;
    animation-delay: -800ms;
  }


  @keyframes floating {
    0% {
      transform: translateY(0px);
    }

    50% {
      transform: translateY(10px);
    }

    100% {
      transform: translateY(0px);
    }
  };


.content {
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform 300ms;
  box-shadow: 0px 0px 10px 1px #000000ee;
  border-radius: 5px;
}

.front, .back {
  background-color: #151515;
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  border-radius: 5px;
  overflow: hidden;
}

.back {
  width: 100%;
  height: 100%;
  justify-content: center;
  display: flex;
  align-items: center;
  overflow: hidden;
}

.back::before {
  position: absolute;
  content: ' ';
  display: block;
  width: 160px;
  height: 160%;
  background: linear-gradient(90deg, transparent, #ff9966, #ff9966, #ff9966, #ff9966, transparent);
  animation: rotation_481 5000ms infinite linear;
}

.back-content {
  position: absolute;
  width: 99%;
  height: 99%;
  background-color: #151515;
  border-radius: 5px;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
}

.card:hover .content {
  transform: rotateY(180deg);
}

@keyframes rotation_481 {
  0% {
    transform: rotateZ(0deg);
  }

  0% {
    transform: rotateZ(360deg);
  }
}

.front .front-content {
  position: absolute;
  width: 100%;
  height: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.front-content .badge {
  background-color: #00000055;
  padding: 2px 10px;
  border-radius: 10px;
  backdrop-filter: blur(2px);
  width: fit-content;
}

.description {
  box-shadow: 0px 0px 10px 5px #00000088;
  width: 100%;
  padding: 10px;
  background-color: #00000099;
  backdrop-filter: blur(5px);
  border-radius: 5px;
}

.title {
  font-size: 11px;
  max-width: 100%;
  display: flex;
  justify-content: space-between;
}

.title p {
  width: 50%;
}

.card-footer {
  color: #ffffff88;
  margin-top: 5px;
  font-size: 8px;
}

.front .img {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.circle {
  width: 90px;
  height: 90px;
  border-radius: 50%;
  background-color: #ffbb66;
  position: relative;
  filter: blur(15px);
  animation: floating 2600ms infinite linear;
}

#bottom {
  background-color: #ff8866;
  left: 50px;
  top: 0px;
  width: 150px;
  height: 150px;
  animation-delay: -800ms;
}

#right {
  background-color: #ff2233;
  left: 160px;
  top: -80px;
  width: 30px;
  height: 30px;
  animation-delay: -1800ms;
}

}`

  export default EventCard;