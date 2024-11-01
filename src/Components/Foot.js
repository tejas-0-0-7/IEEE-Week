import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn
} from 'mdb-react-ui-kit';
import './Foot.css';
import { FaFacebook, FaLinkedin, FaInstagram, FaYoutube, FaGoogle } from 'react-icons/fa';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebook, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';



export default function Footer() {
  return (
    <MDBFooter className='text-center fnu' color='white' bgColor='dark'>
      <MDBContainer className='p-4'>
        <section className='mb-4'>
          <span className="btnu">
            <a href="https://www.facebook.com/bmsce.ieee/" target='_blank'><FaFacebook size={20} className='iconu' /></a>
          </span>
          <span className="btnu">
            <a href="https://www.instagram.com/bmsce_ieee/profilecard/?igsh=MTN1cTEwaWlweWxvdQ==" target='_blank'><FaInstagram size={20} className='iconu' /></a>
          </span>
          <span className="btnu">
            <a href="https://www.linkedin.com/company/bmsce-ieee/" target='_blank'><FaLinkedin size={20} className='iconu' /></a>
          </span>
          <span className="btnu">
            <a href="https://youtube.com/@bmsceieee?si=34nyqBDgKDiIXYFv" target='_blank'><FaYoutube size={20} className='iconu' href='' /></a>
          </span>
          <span className="btnu">
            <a href="https://bmsceieee.com/" target='_blank'><FaGoogle size={20} className='iconu' /></a>
          </span>

        </section>

        {/* <section className=''>
          <form action=''>
            <MDBRow className='d-flex justify-content-center'>
              <MDBCol size="auto">
                <p className='pt-2'>
                  <strong>Sign up for our updates</strong>
                </p>
              </MDBCol>

              <MDBCol md='5' start>
                <MDBInput contrast type='email' placeholder='Email address' className='mb-4' />
              </MDBCol>

              <MDBCol size="auto">
                <MDBBtn outline color='light' type='submit' className='mb-478'>
                  Subscribe
                </MDBBtn>
              </MDBCol>
            </MDBRow>
          </form>
        </section> */}

        <section className='mb-4'>
           <a href='#https://www.ieee.org/' className='text-white me-2' style={{ fontSize: '1.2rem' }}>IEEE</a>{'\t'}{'\t'}
           {'\t'}{'\t'}<a href='#https://ieeeindiacouncil.org/' className='text-white me-2' style={{ fontSize: '1.2rem' }}>Region 10</a>{'\t'}{'\t'}{'\t'}
           {'\t'}{'\t'}<a href='#https://ieeebangalore.org/' className='text-white me-2' style={{ fontSize: '1.2rem' }}>Bangalore Section</a>{'\t'}{'\t'}{'\t'}
           {'\t'}{'\t'}<a href='#https://ieee-collabratec.ieee.org/app/home' className='text-white me-2' style={{ fontSize: '1.2rem' }}>IEEE Collabratec</a>{'\t'}{'\t'}{'\t'}
           {'\t'}{'\t'}{'\t'}<a href='#https://www.bmsce.ac.in/' className='text-white' style={{ fontSize: '1.2rem' }}>BMS College of Engineering</a>{'\t'}{'\t'}
          
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2024 Copyright: 
        <a className='text-white' href='https://bmsceieee.com/'> BMSCE IEEE </a>
      </div>
    </MDBFooter>
  );
}