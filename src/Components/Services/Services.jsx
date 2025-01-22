import React from 'react'
import { Link } from 'react-router-dom'
import './Services.css'
import { FaQuoteLeft } from "react-icons/fa";

const Services = () => {
  return (
    <div>
      <div className="services-container">
        <img src="/assets/banner1.jpg" alt="Services" className="services-image" />
        
        <div className="services-text">
          <h1>Service Details</h1>
          <h4>
            <Link to="/" className="home-link">Home</Link> Service Details
          </h4>
        </div>
      </div>

      <div className='details'>
        <img src="/assets/doctor 1.jpg" alt="Doctor" className="details-image" />
        <h2 className='text-start p-1'>Our Hospital Always Provide Good Services</h2>
        <p className='text-start p-1'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        <p className='bg-secondary p-3 text-start'>
          <FaQuoteLeft />     Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint optio rem magni, dolorum aut vel nostrum quae, fugit necessitatibus eius perferendis. Quia optio tenetur pariatur aliquam obcaecati enim quam eum?Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint optio rem magni, dolorum aut vel nostrum quae, fugit necessitatibus eius perferendis. Quia optio tenetur pariatur aliquam obcaecati enim quam eum?.
        </p>
        <p className='text-start p-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      </div>

      
      <div className="additional-content">
      <div className="content-left p-3">
          <img src="/assets/doctor 2.jpg" alt="Patient Care" className="content-image" />
        </div>

        <div className="content-right text-end p-5">
          <h2 className="text-start">We Always Care for Our Patients</h2>
          <p className="text-start">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto blanditiis obcaecati veritatis magnam pariatur...
          </p>
          <p className="text-start">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe rem natus nobis, dolorum nam excepturi iure...
          </p>
        </div>

      </div>
    </div>
  )
}

export default Services;
