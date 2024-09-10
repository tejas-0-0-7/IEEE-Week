import Navbaring from '../Components/Nav';
import Footer from '../Components/Foot';
import EventCard from '../Components/EventCard';
const Events = () => {
    return ( 
        <div className="events">
            <header></header>
            <Navbaring />
            <EventCard/>
            <Footer />
        </div>
     );
}
 
export default Events;