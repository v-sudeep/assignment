import React, { useState } from 'react';
import { FaMusic, FaLightbulb, FaSmileBeam, FaStethoscope, FaGamepad, FaBusinessTime, FaDrumstickBite, FaBeer, FaAddressBook } from 'react-icons/fa';
import AddEventForm from './Apppp';

function App() {
  const [showFindEvents, setShowFindEvents] = useState(true);
  const [showCreateEvent, setShowCreateEvent] = useState(false);

  const handleFindEventsClick = () => {
    setShowFindEvents(true);
    setShowCreateEvent(false);
  };

  const handleCreateEventClick = () => {
    setShowFindEvents(false);
    setShowCreateEvent(true);
  };

  return (
    <div className="container">
      <div className="top-bar">
        <span className="company-name">eventbrite</span>
        <div className="search-bar-container">
          <input className="search-input" type="text" placeholder="Search" />
          <input className="search-input" type="text" placeholder="Location" />
        </div>
        <div className="button-container">
          <button className="button" onClick={handleFindEventsClick}>Find Events</button>
          <button className="button" onClick={handleCreateEventClick}>Create Event</button>
          <button className="button">Help center</button>
          <button className="button">Log In</button>
          <button className="button">Sign Up</button>
        </div>
      </div>
      {!showCreateEvent && (
        <div className="image">
          <img src="\app1.png" alt="Description of the image" className="image" />
        </div>
      )}
      {showFindEvents && (
        <div className="button1-container">
          <button className="circle-button">
            <span className="button-icon"><FaMusic /></span> Music Night
          </button>
          <button className="circle-button">
            <span className="button-icon"><FaLightbulb /></span> Night Life
          </button>
          <button className="circle-button">
            <span className="button-icon"><FaSmileBeam /></span> Performing & Visual Arts
          </button>
          <button className="circle-button">
            <span className="button-icon"><FaAddressBook /></span> Holidays
          </button>
          <button className="circle-button">
            <span className="button-icon"><FaStethoscope /></span> Health
          </button>
          <button className="circle-button">
            <span className="button-icon"><FaGamepad /></span> Hobbies
          </button>
          <button className="circle-button">
            <span className="button-icon"><FaBusinessTime /></span> Business
          </button>
          <button className="circle-button">
            <span className="button-icon"><FaDrumstickBite /><FaBeer /></span> Food and Drinks
          </button>
        </div>
      )}
      {showCreateEvent && <AddEventForm />} {/* Conditionally render AddEventForm */}
    </div>
  );
}

export default App;
