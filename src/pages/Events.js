import Navbaring from '../Components/Nav';
import Footer from '../Components/Foot';
import EventCard from '../Components/EventCard';
import './Events.css'
import { useState } from 'react';
import EventRegistration from '../Components/EventRegistration';
import { MdCancel } from "react-icons/md";

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
            <div className={`events-page`}>
            <EventCard onShowForm={handleForm}/>
            <EventCard onShowForm={handleForm}/>
            <EventCard onShowForm={handleForm}/>
            {showForm && (
        <div className="modal">
          <div className="modal-content">
            <div className='cancel-btn'>
            <MdCancel style={{size:'100px'}} onClick={closeForm}/>
            </div>
            <EventRegistration/>
          </div>
        </div>
      )}
            </div>
            <Footer />
        </div>
     );
}
 
export default Events;