import React, { useState } from 'react'; 
import Navbaring from '../Components/Nav';
import Footer from '../Components/Foot';
import { FaHome, FaPhone, FaEnvelope } from 'react-icons/fa';
import './contact.css';  

const Contact = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    return (
        <div>
            <Navbaring />

            <div className="contact-container">
                <div className="contact-card">
                    <h1 className="contact-title">Contact Us</h1>
                    <p className="contact-description">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                    </p>

                    <div className="contact-content">
                        <div className="contact-info">
                            <div className="contact-details">
                                <div className="contact-icon">
                                    <FaHome />
                                </div>
                                <div>
                                    <p>BMS College of Engineering</p>
                                </div>
                            </div>

                            <div className="contact-details">
                                <div className="contact-icon">
                                    <FaPhone />
                                </div>
                                <div>
                                    <h3>MPodu, Chairperson</h3>
                                    <p>90517 60973</p>
                                </div>
                            </div>

                            <div className="contact-details">
                                <div className="contact-icon">
                                    <FaEnvelope />
                                </div>
                                <div>
                                    <h3>Email</h3>
                                    <p>bmsceieee@gmail.com</p>
                                </div>
                            </div>
                        </div>

                        <div className="message-form">
                            <h2>Send Message</h2>
                            <form onSubmit={handleSubmit}>
                                <input 
                                    type="text" 
                                    placeholder="Full Name" 
                                    name="fullName" 
                                    value={formData.fullName}
                                    onChange={handleChange}
                                />
                                <input 
                                    type="email" 
                                    placeholder="Email" 
                                    name="email" 
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                                <textarea 
                                    placeholder="Type your Message..." 
                                    name="message" 
                                    value={formData.message}
                                    onChange={handleChange}
                                ></textarea>
                                <button type="submit">Send</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default Contact;
