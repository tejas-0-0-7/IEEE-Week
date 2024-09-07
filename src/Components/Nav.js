import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Nav.css';


function Navbaring() {
  return (
    
    <Navbar expand="lg" className='bgu'>
      <Container fluid>
        <Navbar.Brand href="/home"><img src="./BMSCEIEEE.png" alt="BMSCE IEEE" style={{height:"40px"}}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-1 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/home" className='links'>Home</Nav.Link>
            <Nav.Link href="/meet" className='links'>Meet the Team</Nav.Link>
            <Nav.Link href="/events" className='links'>Events</Nav.Link>
            <Nav.Link href="/membership" className='links'>Membership</Nav.Link>
            <Nav.Link href="/contact" className='links'>Contact Us</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success btnu">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbaring;