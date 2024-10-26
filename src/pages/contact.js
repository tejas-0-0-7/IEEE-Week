import React, { useState } from "react";
import Navbaring from "../Components/Nav";
import Footer from "../Components/Foot";
import { FaHome, FaPhone, FaEnvelope } from "react-icons/fa";
import "./contact.css";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = { name, email, message };
  
    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      const result = await response.json();
  
      // Check the response status
      if (response.status === 201) {
        alert('Message sent successfully!');
        setName(''); // reset the form fields
        setEmail('');
        setMessage('');
      } else {
        alert('Error sending message. Please tr.');
        console.error('Error:', result.error);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error sending message. Please try again.');
    }
  };
  

  return (
    <div>
      <Navbaring />

      <div className="contact-container">
        <div className="contact-card">
          <h1 className="contact-title">Contact Us</h1>
          <p className="contact-description">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
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
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <textarea
                  placeholder="Type your Message..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
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
};

export default ContactUs;
