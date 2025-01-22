import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // استيراد Link من react-router-dom
import doctorsData from '../../Json';  // استيراد بيانات الأطباء من json.js
import './Doctor.css';

const Doctor = () => {
  const [showAllDoctors, setShowAllDoctors] = useState(false);
  const [hoveredDoctorIndex, setHoveredDoctorIndex] = useState(null);  // تعريف الحالة للماوس

  // تحديد الأطباء الذين سيتم عرضهم بناءً على الحالة
  const doctorsToShow = showAllDoctors ? doctorsData : doctorsData.slice(0, 3);

  // دالة لتبديل حالة إظهار/إخفاء الأطباء
  const handleSeeMoreClick = () => {
    setShowAllDoctors((prev) => !prev);
  };

  return (
    <div className="container mt-5 bg-light py-5 doctor-section">
      <h1 className="text-start mb-4">Meet Our Doctors</h1>
      <div className="row">
        {doctorsToShow.map((doctor, index) => (
          <div
            key={index}
            className="col-md-4 mb-4"
            onMouseEnter={() => setHoveredDoctorIndex(index)} // تعيين الفهرس عند المرور
            onMouseLeave={() => setHoveredDoctorIndex(null)}  // إعادة تعيين عند مغادرة الماوس
          >
            <div className="card shadow-sm rounded">
              <div className="card-img-container position-relative">
                <img 
                  src={doctor.image} 
                  alt={doctor.name} 
                  className="card-img-top rounded-top" 
                />
                {hoveredDoctorIndex === index && (
                  <Link to={`/doctor/${doctor.id}`} className="btn-get-appointment">
                    Get Appointment
                  </Link>
                )}
              </div>
              <div className="card-body">
                <h5 className="card-title">{doctor.name}</h5>
                <p className="card-text">{doctor.specialization}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* زر See More */}
      <div className="text-center mt-4">
        <button onClick={handleSeeMoreClick} className="btn btn-primary">
          {showAllDoctors ? 'See Less' : 'See More'}
        </button>
      </div>
    </div>
  );
};

export default Doctor;
