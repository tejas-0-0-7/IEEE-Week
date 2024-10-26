import React, { useState } from "react";
import Navbaring from "../Components/Nav";
import Footer from "../Components/Foot";
import "./contact.css";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = { name, email, message };

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      // Check the response status
      if (response.status === 201) {
        alert("Message sent successfully!");
        // Do NOT reset the fields after successful submission
      } else {
        alert("Error sending message. Please try again.");
        console.error("Error:", result.error);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error sending message. Please try again.");
    }
  };

  return (
    <div>
      <Navbaring />
      <div className="contact-container">
        <div className="contact-card">
          <h1 className="contact-title">CONTACT US</h1>

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
