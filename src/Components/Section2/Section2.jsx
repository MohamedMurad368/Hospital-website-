import React from 'react';
import './Section2.css'; // لإضافة الأنماط الخاصة بهذا القسم

// لاستخدام الأيقونات من FontAwesome
import { FaUserMd, FaBed, FaSmile, FaCalendarAlt } from 'react-icons/fa';

const Section2 = () => {
  return (
    <div className="section-container">
      <div className="row text-center">
        <div className="col-sm-3 stat-card">
          <div className="icon"><FaUserMd size={50} /></div>
          <div className="number">650</div>
          <div className="label">Doctors & Nurse</div>
        </div>

        <div className="col-sm-3 stat-card">
          <div className="icon"><FaBed size={50} /></div>
          <div className="number">850</div>
          <div className="label">Patients Beds</div>
        </div>

        <div className="col-sm-3 stat-card">
          <div className="icon"><FaSmile size={50} /></div>
          <div className="number">20000+</div>
          <div className="label">Happy Patients</div>
        </div>

        <div className="col-sm-3 stat-card">
          <div className="icon"><FaCalendarAlt size={50} /></div>
          <div className="number">18</div>
          <div className="label">Year Experience</div>
        </div>
      </div>

      
      <div className="video-container">
        <iframe
          className="video-player"
          width="100%"
          height="500px"  
          src="https://www.youtube.com/embed/mzOveJDK7iE"
          title="YouTube video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <br/>
    </div>
  );
};

export default Section2;
