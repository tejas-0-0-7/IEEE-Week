import React, { useState, useEffect } from 'react';
import Navbaring from '../Components/Nav';
import Footer from '../Components/Foot';
import EventCard from '../Components/EventCard';
import './Events.css'
import EventRegistration from '../Components/EventRegistration';
import { MdCancel } from "react-icons/md";
import fetchEvents from '../Components/data';

const Events = () => {
    const [showForm, setShowForm] = useState(false);
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedEvent, setSelectedEvent] = useState(null);

    useEffect(() => {
        const loadEvents = async () => {
            try {
                setLoading(true);
                const fetchedEvents = await fetchEvents();
                console.log('Fetched events:', fetchedEvents);
                setEvents(fetchedEvents);
                setLoading(false);
            } catch (err) {
                console.error('Error loading events:', err);
                setError('Failed to load events');
                setLoading(false);
            }
        };
        loadEvents();
    }, []);

    const handleForm = (event) => {
        setSelectedEvent(event);
        setShowForm(true);
    }

    const closeForm = () => {
        setShowForm(false);
        setSelectedEvent(null);
    }

    if (loading) return <div>Loading events...</div>;
    if (error) return <div>Error: {error}</div>;

    return ( 
        <div className="events">
            <header></header>
            <Navbaring />
            <div className={`events-page`}>
                {events.length > 0 ? (
                    events.map(event => (
                        <EventCard key={event._id} event={event} onShowForm={handleForm} />
                    ))
                ) : (
                    <div>No events available</div>
                )}
                {showForm && (
                    <div className="modal">
                        <div className="modal-content">
                            <div className='cancel-btn'>
                                <MdCancel style={{size:'100px'}} onClick={closeForm}/>
                            </div>
                            <EventRegistration event={selectedEvent} />
                        </div>
                    </div>
                )}
            </div>
            <Footer />
        </div>
     );
}
 
export default Events;