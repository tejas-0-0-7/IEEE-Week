import React, { useState, useEffect, useRef } from "react";
import Navbaring from "../Components/Nav";
import Footer from "../Components/Foot";
import "./contact.css";

const ContactUs = () => {
  const vantaRef = useRef(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [vantaEffect, setVantaEffect] = useState(null);

  useEffect(() => {
    // Initialize Vanta effect
    const vantaEffectInstance = window.VANTA.BIRDS({
      el: ".birds",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
  scaleMobile: 1.00,
  birdSize: 1.20,
  wingSpan: 15.00,
  speedLimit: 2.00,
  separation: 100.00,
    quantity: 4.00,
      backgroundColor: 0x0,
      color1: 0x236e65,
      color2: 0x7ecd73,
      colorMode: "lerp" 
      //  lerp,variance, lerpGradient, varianceGradient
    });

    setVantaEffect(vantaEffectInstance);

    // Cleanup on unmount
    return () => {
      if (vantaEffect) {
        vantaEffect.destroy();
      }
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = { name, email, message };

    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Message sent successfully!");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        // alert("Error sending message. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      // alert("Error sending message. Please try again.");
    }
  };

  return (
    <div>
      <Navbaring />
      <div className="contact-container">
        <div className="contact-card">
          <h1 className="contact-title">Contact Us</h1>
          <div className="message-form">
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
      <Footer />
    </div>
  );
};

export default ContactUs;
