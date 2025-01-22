import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaClock, FaUserAlt, FaEnvelope, FaPhoneAlt, FaClipboardList, FaUserMd, FaBirthdayCake } from 'react-icons/fa';
import './style.css';
import doctorsData from '../../Json'

const DoctorPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    services: '',
    doctor: '',
    age: '',
    date: ''
  });

  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState(''); // يمكن أن تكون "success" أو "error"

  const servicesList = ['General Checkup', 'X-Ray', 'Laboratory Tests', 'Surgery'];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // التحقق من صحة النموذج
    if (!formData.name || !formData.email || !formData.phone || !formData.services || !formData.doctor || !formData.age || !formData.date) {
      setMessageType('error');
      setMessage('Please fill out all fields!');
      return;
    }

    setMessageType('success');
    setMessage('Your appointment has been successfully booked! We will confirm your appointment within 2 hours.');
  };

  // الحصول على الطبيب المختار من قائمة الأطباء
  const selectedDoctor = doctorsData.find(doctor => doctor.id === parseInt(formData.doctor));

  // إغلاق الرسالة
  const closeMessage = () => {
    setMessage('');
  };

  return (
    <div>
      <div className="Doctor-container">
        <img src="/assets/logo.jpg" alt="Logo" className="services-image" />
        <div className="services-text">
          <h1>Appointment</h1>
          <h4>
            <Link to="/" className="home-link">Home</Link> Appointment
          </h4>
        </div>
      </div>

      <div className="appointment-section">
        {/* نموذج الحجز */}
        <div className="book-appointment">
          <h3>Book your appointment</h3>
          <p>We will confirm your appointment within 2 hours</p>

          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label><FaUserAlt /> Name</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label><FaEnvelope /> Email</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label><FaPhoneAlt /> Phone</label>
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label><FaClipboardList /> Services</label>
                <select name="services" value={formData.services} onChange={handleChange}>
                  <option value="">Select Service</option>
                  {servicesList.map((service, index) => (
                    <option key={index} value={service}>{service}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label><FaUserMd /> Doctor</label>
                <select name="doctor" value={formData.doctor} onChange={handleChange}>
                  <option value="">Select Doctor</option>
                  {doctorsData.map(doctor => (
                    <option key={doctor.id} value={doctor.id}>{doctor.name} - {doctor.specialization}</option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label><FaBirthdayCake /> Age</label>
                <input type="number" name="age" value={formData.age} onChange={handleChange} />
              </div>
            </div>

            {/* اختيار الموعد */}
            <div className="form-row">
              <div className="form-group">
                <label><FaClock /> Appointment Date</label>
                <input type="datetime-local" name="date" value={formData.date} onChange={handleChange} />
              </div>
            </div>

            <button type="submit" className="btn-submit">Submit</button>
          </form>
        </div>

        {/* معلومات عن الطبيب المختار */}
        {selectedDoctor && (
          <div className="selected-doctor">
            <h3>Selected Doctor</h3>
            <div className="doctor-info">
              <img src={selectedDoctor.image} alt={selectedDoctor.name} className="doctor-image" />
              <div>
                <h4>{selectedDoctor.name}</h4>
                <p>{selectedDoctor.specialization}</p>
              </div>
            </div>
          </div>
        )}

        {/* أيام العمل */}
        <div className="working-hours">
          <h3>Working Hours</h3>
          <ul>
            <li><FaClock style={{ color: 'blue' }} /> Monday 9:00 AM - 8:00 PM</li>
            <li><FaClock style={{ color: 'blue' }} /> Tuesday 9:00 AM - 8:00 PM</li>
            <li><FaClock style={{ color: 'blue' }} /> Wednesday 9:00 AM - 8:00 PM</li>
            <li><FaClock style={{ color: 'blue' }} /> Thursday 9:00 AM - 8:00 PM</li>
            <li><FaClock style={{ color: 'blue' }} /> Friday 9:00 AM - 8:00 PM</li>
            <li><FaClock style={{ color: 'blue' }} /> Saturday 9:00 AM - 8:00 PM</li>
          </ul>
        </div>
      </div>

      {/* رسائل alert */}
      {message && (
        <div className={`alert ${messageType}`} onClick={closeMessage}>
          <div className="alert-content">
            <p>{message}</p>
            <button className="alert-close" onClick={closeMessage}>×</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DoctorPage;
