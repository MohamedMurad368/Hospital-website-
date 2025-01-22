import React from 'react';
import './Section1.css'; // Importing the CSS file

const Section1 = () => {
  return (
    <div className="section1">
      <div className="content">
        <div className="text-container">
          <p className="text-blue">We Provide All Health Care Solution</p>
          <h1 className="text-blue">Protect Your Health And Take Care Of Your Health</h1>
          <div className="button-container">
            <img 
              src="/assets/25.png" 
              alt="Small Icon" 
              className="small-image" 
            />
            <button className="read-more-btn">Read More</button>
          </div>
        </div>
        <div className="image-container">
          <img src="/assets/doctor.png" alt="Doctor" className="doctor-image" />
        </div>
      </div>
      {/* New image at the bottom */}
      <div className="bottom-image-container">
        <img src="/assets/23.png" alt="" className="bottom-image" />
      </div>
    </div>
  );
}

export default Section1;
