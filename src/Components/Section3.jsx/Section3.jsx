import React from 'react';
import { FaStethoscope, FaBone, FaHeartbeat, FaAmbulance, FaTeeth, FaBrain } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './Section3.css';

const Section3 = () => {
  return (
    <div className='services-section'>
      <div className='section-header'>
        <p>Services</p>
        <h2>Our Hospital Our Hospital Services</h2>
      </div>

      <div className='card-container'>
        {/* Wrap each card in a Link component to navigate to services page */}
        <Link to="/services" className="card-link">
          <div className='card'>
            <div className='icon'><FaStethoscope size={40} /></div>
            <div className='title'>Expert Doctor</div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
          </div>
        </Link>

        <Link to="/services" className="card-link">
          <div className='card'>
            <div className='icon'><FaBone size={40} /></div>
            <div className='title'>Diagnosis</div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
          </div>
        </Link>

        <Link to="/services" className="card-link">
          <div className='card'>
            <div className='icon'><FaHeartbeat size={40} /></div>
            <div className='title'>Pathology</div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
          </div>
        </Link>

        <Link to="/services" className="card-link">
          <div className='card'>
            <div className='icon'><FaTeeth size={40} /></div>
            <div className='title'>Dental Care</div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
          </div>
        </Link>

        <Link to="/services" className="card-link">
          <div className='card'>
            <div className='icon'><FaBrain size={40} /></div>
            <div className='title'>Neurology</div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
          </div>
        </Link>

        <Link to="/services" className="card-link">
          <div className='card'>
            <div className='icon'><FaAmbulance size={40} /></div>
            <div className='title'>Ambulance</div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
          </div>
        </Link>

        <Link to="/services" className="card-link">
          <div className='card'>
            <div className='icon'><FaStethoscope size={40} /></div>
            <div className='title'>Cardiology</div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
          </div>
        </Link>

        <Link to="/services" className="card-link">
          <div className='card'>
            <div className='icon'><FaHeartbeat size={40} /></div>
            <div className='title'>Medicine</div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Section3;
