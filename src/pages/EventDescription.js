import React, { useState } from 'react';
import './EventDescription.css';
import { Radio } from 'antd';

const EventDescription = () => {
  const [formData, setFormData] = useState({
    Name: '',
    phone: '',
    email: '',
    ieeeMember: '',
    membershipId: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Registration Successful!');
  };

  return (
    <>
    <h1>IEEE DAY 2024 in fancy text</h1>
    <div className="event-description-page">
      <div className="event-details-container">
        <h1 className="event-description-page-title">Event Name</h1>
        <div className='event-details-desc-page'>
        <div className="event-desc-img">
          <img src="https://via.placeholder.com/300" alt="Event Image" />
        </div>
        <div className="event-desc-details">
        <p>
          <strong>Date:</strong> Date
        </p>
        <p>
          <strong>Time:</strong> Time
        </p>
        <p>
          <strong>Venue:</strong> Venue
        </p>
        </div>
        </div>
        <p className="event-description-desc">
          Eiusmod non veniam Lorem amet cupidatat quis reprehenderit anim magna adipisicing in elit laborum.
        </p>
      </div>
      <div className="event-form-container">
        <h2>Register Now</h2>
        <form className="event-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <input
              type="text"
              name="Name"
              placeholder="Your name"
              value={formData.Name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-row">
            <input
              type="tel"
              name="phone"
              placeholder="Your phone number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-row">
            <input
              type="email"
              name="email"
              placeholder="Your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
  <div className="form-row">
  <label>IEEE Member:</label>
  <div className="radio-group">
    <label>
      <input
        type="radio"
        name="ieeeMember"
        value="yes"
        checked={formData.ieeeMember === 'yes'}
        onChange={handleChange}
      />
      Yes
    </label>
    <br></br>
    <label>
      <input
        type="radio"
        name="ieeeMember"
        value="no"
        checked={formData.ieeeMember === 'no'}
        onChange={handleChange}
      />
      No
    </label>
  </div>
</div>
{formData.ieeeMember=="yes" && (
        <div className="form-row">
          <label>IEEE Membership ID</label>
          <input
              type="number"
              name="membershipId"
              placeholder="ID"
              value={formData.membershipId}
              onChange={handleChange}
              required
            />
          </div>
)}
          <button type="submit" className="submit-btn">
            Register
          </button>
        </form>
      </div>
    </div>
    </>
  );
};

export default EventDescription;
