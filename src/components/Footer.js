import React from "react";
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './Footer.css';
import { FaLinkedin, FaTwitter, FaGithub, FaRss } from 'react-icons/fa';



const Footer = () => {

    return (
        <Container fluid className="bg-custom section">
            <Row>
                <Col md={12} lg={12}>
                    <Container className="footer-top mb-4 mt-0">
                        <Row className="d-flex flex-lg-row flex-column justify-content-between align-items-lg-start align-items-center">
                            <Col>
                                <div className="logo-container">
                                    <a className="d-block h3" href="https://blog.incubyte.co/">
                                        <img className="img-fluid footer-img" src="/images/mainlogo.png" alt="Incubyte Blog" />
                                    </a>
                                </div>
                            </Col>

                            <Col className="d-flex flex-md-row flex-column align-items-center footer-top-links">
                                <ul className="py-1"><a href="https://www.incubyte.co/about-us" title="About Us">About Us</a></ul>
                                <ul className="py-1"><a href="https://www.incubyte.co/what-we-do-overview" title="Services">Services</a></ul>
                                <ul className="py-1"><a href="https://www.incubyte.co/contact-us" title="Contact Us">Contact Us</a></ul>
                                <ul className="py-1"><a href="https://incubyte.co/" title="Home">Home</a></ul>
                                <ul className="py-1"><a href="https://www.incubyte.co/careers" title="Careers">Careers</a></ul>
                            </Col>

                            <Col className="d-flex align-items-center socials">
                                <ul className="list-inline d-flex justify-content-center">
                                    <li className="list-inline-item px-2">
                                        <a href="https://www.linkedin.com/company/incubyte" title="LinkedIn">
                                            <FaLinkedin className="social-icon" />
                                        </a>
                                    </li>
                                    <li className="list-inline-item px-2">
                                        <a href="https://twitter.com/Incubyte_co" title="Twitter">
                                            <FaTwitter className="social-icon" />
                                        </a>
                                    </li>
                                    <li className="list-inline-item px-2">
                                        <a href="https://www.github.com/incubyte" title="GitHub">
                                            <FaGithub className="social-icon" />
                                        </a>
                                    </li>
                                    <li className="list-inline-item px-2">
                                        <a href="https://feedly.com/i/subscription/feed/https://blog.incubyte.co/rss/" title="RSS Feed">
                                            <FaRss className="social-icon" />
                                        </a>
                                    </li>
                                </ul>

                            </Col>           
                        </Row>
                        <Row className="footer-bottom d-flex justify-content-between align-items-center mt-3 border-top">
                            <Col lg={6} className="text-lg-left text-center">
                                <div className="inner-border">
                                    © 2024 Incubyte - All Rights Reserved
                                </div>
                            </Col>
                            <Col lg={6} className="d-flex justify-content-lg-end justify-content-center footer-bottom-links">
                                <ul className="p-2"><a href="https://www.incubyte.co/privacy-policy" title="Privacy Policy" className="footer-blog">Privacy Policy</a></ul>
                                <ul className="p-2"><a href="https://www.incubyte.co/privacy-policy" title="Terms and Conditions" className="footer-blog">Terms and Conditions</a></ul>
                                <ul className="p-2"><a href="https://www.incubyte.co/privacy-policy" title="Cookie Policy" className="footer-blog">Cookie Policy</a></ul>
                            </Col>
                        </Row>
                    </Container>
                </Col>
            </Row>
        </Container>
    )
}
export default Footer;