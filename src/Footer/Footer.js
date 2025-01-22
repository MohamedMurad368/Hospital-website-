import React from 'react';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import './Footer.css';  

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-5 mt-5">
      <Container className='one'>
        <Row>
          {/* قسم المعلومات الأساسية */}
          <Col md={4}>
            <h5 className="footer-title">About Us</h5>
            <p className="footer-text">We are committed to providing excellent healthcare services to our patients, ensuring a high standard of care with a personalized approach.</p>
          </Col>

          {/* قسم الروابط السريعة */}
          <Col md={4}>
            <h5 className="footer-title">Quick Links</h5>
            <ListGroup>
              <ListGroup.Item action href="/" className="footer-link">
                Home
              </ListGroup.Item>
              <ListGroup.Item action href="#services" className="footer-link">
                Services
              </ListGroup.Item>
              <ListGroup.Item action href="#contactus" className="footer-link">
                Contact Us
              </ListGroup.Item>
            </ListGroup>
          </Col>

          {/* قسم التواصل */}
          <Col md={4}>
            <h5 className="footer-title">Contact Us</h5>
            <p className="footer-text">Email: info@example.com</p>
            <p className="footer-text">Phone: +1234567890</p>
            <p className="footer-text">Address: 123 Healthcare St, City, Country</p>
          </Col>
        </Row>

        <hr className="bg-white" />
        <Row className="text-center">
          <Col>
            <p>&copy; 2025 Your Company. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
