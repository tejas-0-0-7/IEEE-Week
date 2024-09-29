import Navbaring from '../Components/Nav';
import Footer from '../Components/Foot';
import EventCard from '../Components/EventCard';
import './Events.css'
import { useState } from 'react';
import EventRegistration from '../Components/EventRegistration';

const Events = () => {
    const [showForm,setShowForm]=useState(false);
    const handleForm=()=>{
        setShowForm(true)
    }

    const closeForm=()=>{
        setShowForm(false)
    }
    return ( 
        <div className="events">
            <header></header>
            <Navbaring />
            <div className={`events-page ${showForm ? 'blurred' : ''}`}>
            <EventCard onShowForm={handleForm}/>
            <EventCard onShowForm={handleForm}/>
            <EventCard onShowForm={handleForm}/>
            {showForm && (
        <div className="modal">
          <div className="modal-content">
            <button className="close-button" onClick={closeForm}>X</button>
            <EventRegistration />
          </div>
        </div>
      )}
            </div>
            <Footer />
        </div>
     );
}
 
export default Events;