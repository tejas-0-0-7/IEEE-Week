import React from 'react'
import './EventRegistration.css'
import { useState } from 'react';

const EventRegistration = () => {
  const [formData,setformData]=useState({
    name:'',
    email:'',
    phone:'',
    ieeeMember:'',
    membershipId:''
  })
  const handleChange=(e)=>{
    setformData({...formData,[e.target.name]:e.target.value})
  }
  const handleSubmit=(e)=>{
    e.preventDefault()
    alert("Sucessful Registration")
    console.log("Registration Successful")
  }
  return (
    <div className="registration-form">
      <h2 className="form-title">Register for the Event</h2>
      <form onSubmit={handleSubmit} className="form-content">
        <div className="form-row">
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-row">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Enter your phone number"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-row">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-row">
          <label>Are you an IEEE Member?</label>
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
        {formData.ieeeMember === 'yes' && (
          <div className="form-row">
            <label htmlFor="membershipId">IEEE Membership ID</label>
            <input
              type="number"
              id="membershipId"
              name="membershipId"
              placeholder="Enter your IEEE Membership ID"
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
  );
};

export default EventRegistration;