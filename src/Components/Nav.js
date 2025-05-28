import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate, useLocation } from 'react-router-dom';
import './Nav.css';
import { useState, useEffect } from 'react';

function Navbaring() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isAnimating, setIsAnimating] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const handleLinkClick = (event, path) => {
    event.preventDefault();
    if (window.innerWidth <= 768) {
      setIsAnimating(true);
      setTimeout(() => {
        navigate(path);
        setIsAnimating(false);
      }, 300);
    } else {
      navigate(path);
    }
  };

  const navLinks = [
    { path: '/meet', label: 'Meet the Team' },
    { path: '/events', label: 'Events' },
    { path: '/membership', label: 'Membership' },
    { path: '/contact', label: 'Contact Us' }
  ];

  return (
    <Navbar expand="lg" className={`bgu ${scrolled ? 'scrolled' : ''}`}>
      <Container fluid>
        <Navbar.Brand onClick={(e) => handleLinkClick(e, '/home')} style={{ cursor: 'pointer' }}>
          <img src="/BMSCEIEEE.png" alt="BMSCE IEEE" style={{ height: "40px" }} />
        </Navbar.Brand> 
        <Navbar.Collapse id="navbarScroll" className='justify-content-end'>
          <Nav className="my-1 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
            {navLinks.map(({ path, label }) => (
              <Nav.Link 
                key={path}
                onClick={(e) => handleLinkClick(e, path)}
                className={`links ${location.pathname === path ? 'active' : ''} ${isAnimating ? 'animating' : ''}`}
              >
                {label}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbaring;
