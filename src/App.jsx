import React from 'react';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './herosection.css';

const title = "Tour apartments right from your home.";
const description = "We help renters make informed decisions even if they are not in town. Finding Places virtual tours are hosted by local residents to provide an unbiased and comprehensive view of the apartment.";
const colleges = [
  { name: "Columbia College", logo: "https://dashboard.codeparrot.ai/api/assets/Z3XSOIzDnKkfwYja" },
  { name: "NYU", logo: "https://dashboard.codeparrot.ai/api/assets/Z3XSOIzDnKkfwYja" },
  { name: "Barnard", logo: "https://dashboard.codeparrot.ai/api/assets/Z3XSOIzDnKkfwYja" },
  { name: "Temple University", logo: "https://dashboard.codeparrot.ai/api/assets/Z3XSOIzDnKkfwYja" },
  { name: "Rutgers", logo: "https://dashboard.codeparrot.ai/api/assets/Z3XSOIzDnKkfwYja" },
  { name: "Pratt", logo: "https://dashboard.codeparrot.ai/api/assets/Z3XSOIzDnKkfwYja" }
];

function App () {
  const [count, setCount] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true)
  }

  return (
    <div className="hero-container">
      {isOpen 
        ? <dialog open style={{ right: 0, left: 0, top: 0, bottom: 0}}> 
            <div style={{ display: "flex" }}>
              <p>Input phone number:</p>
              <input />
            </div>
            <div style={{ display: "flex" }}>
              <p>Input URL: </p>
              <input />
            </div>
            <button>Submit</button>
          </dialog> 
        : null
      }
      <nav className="navbar">
        <div className="logo">Finding Places</div>
        <div className="nav-links">
          <a href="#book">Book a Tour</a>
          <a href="#meet">Meet the Locals</a>
          <a href="#contact">Contact us</a>
          <a href="#blog">Blog</a>
        </div>
      </nav>

      <div className="hero-content">
        <div className="hero-text">
          <h1>{title}</h1>
          <p>{description}</p>
          <button className="book-tour-btn" onClick={openModal}>Book a Tour</button>
        </div>
        
        <div className="hero-images">
          <div className="phone-mockup">
            <div className="video-call-grid">
              <img src="/public/images/test-1.jpeg" alt="Apartment tour" className="main-image" />
              <img src="/public/images/test-2.jpeg" alt="Video participant" className="participant-1" />
              <img src="/public/images/test-3.jpeg" alt="Video participant" className="participant-2" />              
            </div>
          </div>
        </div>
      </div>

      <div className="colleges-section">
        <p className="colleges-text">
          We've helped students from these colleges tour and secure apartments remotely!
          <br />
          <span className="tags">#remote #international #virtual #trusted #renters</span>
        </p>
      </div>
    </div>
  )
}

export default App
