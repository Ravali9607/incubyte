import React from 'react';
import { Container, Row, Col, Form,Button } from 'react-bootstrap';
import './Section.css';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/prism';

import { FaFacebookF, FaTwitter, FaLinkedinIn, FaRedditAlien, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Section() {
    
        const codeString = `
      int add(string numbers)
      `;
  return (
    <Container>
      <Row>
        <Col lg={10}  md={10} className='mx-auto'>
          <div className='section-div'>
            <div className='total-div-middle'>
              <a className="back-link" href="">
                <strong>←</strong> Back to Blog
              </a>
              <img 
                src="/images/laptop-plant.jpg" 
                alt="Incubyte TDD Assessment" 
                className="mt-3 img-fluid w-100 rounded mb-4" 
                style={{ width: '500px', height: '500px' }} 
              />
              <h1 className="mb-4 post-title">Incubyte TDD Assessment</h1>
              <div className="span-container">
                <span className='mb-3 badge rounded-pill bg-dark career-span'>
                  <a className="text-white careers-anchor" href="/tags/careers">Careers</a>
                </span>
                <span className='mb-3 badge rounded-pill bg-dark career-span'>
                  <a className="text-white careers-anchor" href="/tags/careers">Software Craftsmanship</a>
                </span>
                <span className='mb-3 badge rounded-pill bg-dark career-span'>
                  <a className="text-white careers-anchor" href="/tags/careers">TDD</a>
                </span>
              </div>
              <p className='text-right'>By <a className='name-tag'>Abhishek Keshri</a>, on Tuesday, September 21, 2021</p>
              <div>
                <p className='para1'>Hello there and welcome to the Incubyte TDD Kata!</p>
                <p className='para1'>This assessment is the first step in our recruiting process and will be followed by two pair programming/discussion sessions.</p>
                <h2 className='text-transform'>What we’re looking for</h2>
                <p className='para1'>
                  A Software Craftsperson at Incubyte is a person who has a strong commitment to the craft of software development.
                  Someone who is passionate about software, knows their tools well, and is able to use them effectively to create carefully crafted software.
                  Ultimately, a person who has a strong sense of what they are doing and is self-motivated to learn and grow.
                </p>
                <p className='para1'>
                  TDD is a core practice for all of us at Incubyte.
                  We strongly believe that well-written software is a lot more valuable for the business and end users, as compared to software that is hacked together (but works!).
                </p>
                <p className='para1'>
                  Through this assessment, we want to evaluate how readable and testable your code is. We want to see the Software Craftsperson in you.
                </p>
                <p className='para1'>
                  As software developers, searching the internet is something of a necessity and is a vital tool for being effective problem solvers.
                  We encourage you to Google away!
                </p>
                <p>With that, let’s jump right in!</p>
                <h2 className='text-transform'>Things to keep in mind</h2>
                <ol>
                  <li className='list'>Host your solution on a <strong>public</strong> GitHub/GitLab repository.</li>
                  <li className='list'>Follow best practices for TDD. Watch <a href="#">this video</a> to understand TDD better.</li>
                  <li className='list'>Commit your changes frequently, ideally after every change to show how your code evolves with every step of TDD.</li>
                  <li className='list'>We encourage you to use the programming language and tools you feel most comfortable with. If you are applying for a specific role, you might want to use the language that is most relevant to the role.</li>
                  <li className='list'>Do not rush; take your time. We want to see your best work!</li>
                  <li className='list'>Send us the link to your repo once you’re happy with what you have done.</li>
                </ol>
                <h2 className='text-transform'>String Calculator TDD Kata</h2>
                <h3 id="tips">Tips:</h3>
                <ul>
                    <li className='list'>Start with the simplest test case of an empty string and move to one and two numbers.</li>
                    <li className='list'>Remember to solve problems in a simple manner so that you force yourself to write tests you did not think about.</li>
                    <li className='list'>Remember to refactor after each passing test..</li>
                </ul>
                <h3 className='text-transform'>Steps</h3>
                <ol>
                    <li className='list'><p>Create a simple String calculator with a method signature like this:</p></li>
                    <div className="highlight">
        <SyntaxHighlighter language="cpp" style={nightOwl}>
          {codeString}
        </SyntaxHighlighter>
      </div>
      
               
                <ul>
        <li className='list'><strong>Input:</strong> a string of comma-separated numbers</li>
        <li className='list'> <strong>Output:</strong> an integer, sum of the numbers</li>
      </ul>
      <p className='list'><strong>Examples:</strong></p>
      <ul>
      <li className='list'><strong className='list'>Input:</strong> “”, <strong>Output:</strong> 0</li>
      <li className='list'><li><strong className='list'>Input:</strong> “1”, <strong>Output:</strong> 1</li></li>
      <li className='list'><strong className='list'>Input:</strong> “1,5”, <strong>Output:</strong> 6</li>
      </ul>
       <li className='list'>Allow the <span className='add'>add</span> method to handle any amount of numbers.</li>
    <li className='list'>Allow the add method to handle new lines between numbers (instead of commas). (<span className='add'>"1\n2,3"</span> should return 6)</li>
    <li className='list'><p>Support different delimiters:</p></li>
     <ul>
        <li className='list'><span className='add'>"//[delimiter]\n[numbers…]"</span>To change the delimiter, the beginning of the string will contain a separate line that looks like this:  For example,
         <span className='add'>"//;\n1;2"</span> where the delimiter is <span className='add'>";"</span>should return <span className='add' >3</span>.</li>
     </ul>
     <li className='list'>Calling <span className='add'>add </span> with a negative number will throw an exception: <span  className='add'> "negative numbers not allowed  &lt;negative_number&gt;"</span>.</li>

     <ul>
        <li className='list'>If there are multiple negative numbers, show all of them in the exception message, separated by commas.</li>
     </ul>
     
      </ol>
      <p className='para2 list' style={{ borderLeft: '2px solid #3ce8e5',     padding: '26px 0px 20px 25px', marginLeft:'10px'}}>Want more? Check out <a href="#" className='name-tag'>TDD Kata 1</a> for the full version. <strong>Extra points</strong> for completing all the steps!</p>
       <h1 ><b className='text-transform'>Have questions?</b></h1>
       <p className='list'>Feel free to ask us anything! We are <a href="#" className='name-tag'>here</a> to help.</p>
       <h1><b className=' text-transform '>Consider Sharing!</b></h1>


       <div className="social-buttons list">
      <a href="" className="btn1 facebook">
        <FaFacebookF /> Facebook
      </a>
      <a href="" className="btn1 twitter">
        <FaTwitter /> Twitter
      </a>
      <a href="" className="btn1 email">
        <MdEmail />E-Mail
      </a>
      <a href="" className="btn1 linkedin">
        <FaLinkedinIn /> LinkedIn
      </a>
      <a href="" className="btn1 reddit">
        <FaRedditAlien /> Reddit
      </a>
      <a href="" className="btn1 whatsapp">
        <FaWhatsapp /> WhatsApp
      </a>
    </div>
     <h1><b className='text-transform'>Hey You!</b></h1>
          <p className='para1'>
      You were caught scrolling too fast! 🚨
      <br/>
      Tell us your email so that we can inform you next time we release a blog.
    </p>

              </div>
            </div>
          </div>
        </Col>
        <div className='section-div2'>
        <Col lg={8} md={8} className='mx-auto'>
          <Form.Control 
            type="email" 
            name="email" 
            placeholder="name@email.com" 
            required 
            aria-label="Input your email to subscribe to Incubyte"
            className='rounded-border'
          />
        </Col>
        <Col lg={3} md={3} >
          <Button 
            type="submit" 
            className="btn1" 
            
          >
            Subscribe
          </Button>
        </Col>
        </div>
      </Row>
    </Container>
  );
}

export default Section;
