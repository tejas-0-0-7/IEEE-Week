import Navbaring from '../Components/Nav';
import Footer from '../Components/Foot';
import CountDownMem from '../Components/CountDownMem';
// import MdForm from '../Components/Form';
// import './Membership.css';

const Membership = () => {
    return ( 
        <div className="main-container"> {/* Main container for flexbox layout */}
            <Navbaring />
            <div className="content">
                <CountDownMem />
            </div>
            <Footer className="footer" /> {/* Ensure footer has the class */}
        </div>
    );
}
 
export default Membership;
