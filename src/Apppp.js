import React, { useState } from 'react';
import axios from 'axios';
import '/'

function AddEventForm() {
  // Define state to hold form data
  const [formData, setFormData] = useState({
    event_name: '',
    date: '',
    time: '',
    location: '',
    image: null, // For file upload
    is_liked: false, // Default value for is_liked
    user_id: 1, // Replace with specific user's ID
  });

  // Function to handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Function to handle file input change
  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      image: file,
    });
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataToSend = new FormData();
      for (const key in formData) {
        formDataToSend.append(key, formData[key]);
      }
      // Send form data to the backend
      await axios.post('http://your-backend-url/api/events/', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      // Reset form fields after successful submission
      setFormData({
        event_name: '',
        date: '',
        time: '',
        location: '',
        image: null,
        is_liked: false,
        user_id: 1,
      });
      alert('Event added successfully!');
    } catch (error) {
      console.error('Error adding event:', error);
      alert('Failed to add event. Please try again.');
    }
  };

  return (
    <div className="form-container">
      <h2>Add New Event</h2>
      <form onSubmit={handleSubmit} className="event-form">
        <div className="form-group">
          <label>Event Name:</label>
          <input
            type="text"
            name="event_name"
            value={formData.event_name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Date:</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Time:</label>
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Location:</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className1='submit-button' className="form-group">
          <label>Image:</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileInputChange}
            required
          />
        </div>
        <button type="submit" className="submit-button">Add Event</button>
      </form>
    </div>
  );
}

export default AddEventForm;
