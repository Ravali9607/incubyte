import React, { useState } from 'react';
import { Container, Row, Col, Navbar, Form, Button } from 'react-bootstrap';
import './Header.css';
import { FaSearch } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";
import Section from './Section';
import Footer from './Footer';

function Header() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <>
    <header className="navigation-bar">
      
        <Navbar expand="lg" className="navbar navbar-light bg-transparent py-3">
          <Row className="w-100 ">
            <Col xs={12} md={6} sm={6} className="d-flex align-items-center">
              <Navbar.Brand className="d-none d-sm-block" href="https://www.incubyte.co/">
                <img width="130px" className="img-fluid" src="/images/mainlogo.png" alt="Incubyte Blog" />
              </Navbar.Brand>
            </Col>
            <Col xs={12} md={6} sm={6} className="d-flex justify-content-end align-items-center gap-2">
              <div>
                <FaMoon className='half-moon'/>
              </div>
              <Form inline className="d-inline-flex flex-row ml-2 nav-search-form" action="https://blog.incubyte.co/search/" method="get">
                <Form.Group className="form-outline mr-2 gap-3">
                  <Form.Control
                    type="text"
                    id="search-input"
                    name="query"
                    placeholder="Search"
                    className="form-control rounded nav-search-input"
                    value={searchQuery}
                    onChange={handleInputChange}
                  />
                </Form.Group>
                <Button
                  type="submit"
                  id="search-button"
                  className="w-25 border-0 nav-search-button search-btn gap-3"
                  
                >
                  <FaSearch />
                </Button>
              </Form>
              <a href="https://www.incubyte.co/lets-get-started" title="Let's Talk" className="big-btn2 btn btn-sm ml-2 mr-2">
                Let's Talk
              </a>
            </Col>
          </Row>
        </Navbar>
      
    </header>
    <Section />
    <Footer />
     
    </>
  );
}

export default Header;
