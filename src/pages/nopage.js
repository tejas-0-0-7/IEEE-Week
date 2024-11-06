import React from 'react';
import Navbaring from '../Components/Nav';
import Footer from '../Components/Foot';
import './ErrorPage.css'; // Import the CSS file for styling
import CountDown from '../Components/CountDown';

const Nopage = () => {
    return ( 
        <div>
            <Navbaring />
            <div className="error-page">
                <div className="error-content">
                    <h1>404</h1>
                    <h2>Page Not Found</h2>
                    <p>Sorry, the page you are looking for does not exist.</p>
                    <a href="/">Go back to Home</a>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default Nopage;