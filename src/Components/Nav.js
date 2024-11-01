import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Nav.css';
import { useState } from 'react';

function Navbaring() {
  const [activeLink, setActiveLink] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleLinkClick = (event, href, index) => {
    if (window.innerWidth <= 768) {
      event.preventDefault(); // Prevent immediate navigation on mobile
      setActiveLink(index); // Set the active link
      setIsAnimating(true); // Trigger the hover effect

      setTimeout(() => {
        window.location.href = href; // Navigate after the animation
      }, 1000); // Delay matches your CSS transition duration
    } else {
      window.location.href = href; // Navigate immediately on desktop
    }
  };

  return (
    <Navbar expand="lg" className='bgu'>
      <Container fluid>
        <Navbar.Brand href="/home">
          <img src="./BMSCEIEEE.png" alt="BMSCE IEEE" style={{ height: "40px" }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className='justify-content-end'>
          <Nav className="my-1 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
            {['/meet', '/events', '/membership', '/contact'].map((href, index) => (
              <Nav.Link 
                key={href}
                href={href} 
                className={`links ${isAnimating && activeLink === index ? 'active' : ''}`} 
                onClick={(e) => handleLinkClick(e, href, index)}
              >
                {href === '/meet' ? 'Meet the Team' : href === '/events' ? 'Events' : href === '/membership' ? 'Membership' : 'Contact Us'}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbaring;
