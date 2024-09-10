import React from 'react'
import './EventCard.css'

function EventCard(props) {
  return (
    <div class="event-container">
    <div class="item-container">
        <div class="img-container">
            <img src="./images\Tejas(Treasurer).jpg" alt="Event image"></img>
        </div>

        <div class="body-container">
            <div class="overlay"></div>

            <div class="event-info">
                <p class="title">Bihar ka Majdur</p>
                <div class="separator"></div>

                <div class="additional-info">
                    <p class="info description">
                        Has experience of travelling over 50 kilometers everyday. A little weak in english but his proficiency in Minecraft makes him the perfect worker. Hire him today! Pro tip: Keep him fed or he can start getting annoying pretty quick.
                    </p>
                </div>
            </div>
            <button class="action">Book him!</button>
        </div>
    </div>
    </div>
  )
}


export default EventCard

