import React, { useState, useEffect } from 'react';
import Navbaring from '../Components/Nav';
import Footer from '../Components/Foot';
import EventCard from '../Components/EventCard';
import './Events.css';
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
                // console.log('Fetched events:', fetchedEvents);
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
    };

    const closeForm = () => {
        setShowForm(false);
        setSelectedEvent(null);
    };

    // Separate events into technical and non-technical categories
    const technicalEvents = events.filter(event => event.category === "Technical");
    const nonTechnicalEvents = events.filter(event => event.category === "Non-Technical");

    if (loading) return <div>Loading events...</div>;
    if (error) return <div>Error: {error}</div>;

    return ( 
        <div className="events">
            <header></header>
            <Navbaring />

            <div className={`events-page`}>
                <h1>Technical Events</h1>
                <div className="events-section">
                    {technicalEvents.length > 0 ? (
                        technicalEvents.map(event => (
                            <EventCard key={event._id} event={event} />
                        ))
                    ) : (
                        <div>No technical events available</div>
                    )}
                </div>

                <h1>Non-Technical Events</h1>
                <div className="events-section">
                    {nonTechnicalEvents.length > 0 ? (
                        nonTechnicalEvents.map(event => (
                            <EventCard key={event._id} event={event}/>
                        ))
                    ) : (
                        <div>No non-technical events available</div>
                    )}
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Events;
