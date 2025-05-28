import React from 'react';
import {
  MDBFooter,
  MDBContainer,
} from 'mdb-react-ui-kit';
import './Foot.css';
import { FaFacebook, FaLinkedin, FaInstagram, FaYoutube, FaGoogle } from 'react-icons/fa';

export default function Footer() {
  return (
    <MDBFooter className='text-center fnu' color='white'>
      <MDBContainer className='p-0'>
        <section className='mb-4'>
          <div className="btnu">
            <a href="https://www.facebook.com/bmsce.ieee/" target='_blank' rel="noopener noreferrer">
              <FaFacebook className='iconu' />
            </a>
            <a href="https://www.instagram.com/bmsce_ieee/profilecard/?igsh=MTN1cTEwaWlweWxvdQ==" target='_blank' rel="noopener noreferrer">
              <FaInstagram className='iconu' />
            </a>
            <a href="https://www.linkedin.com/company/bmsce-ieee/" target='_blank' rel="noopener noreferrer">
              <FaLinkedin className='iconu' />
            </a>
            <a href="https://youtube.com/@bmsceieee?si=34nyqBDgKDiIXYFv" target='_blank' rel="noopener noreferrer">
              <FaYoutube className='iconu' />
            </a>
            <a href="https://bmsceieee.com/" target='_blank' rel="noopener noreferrer">
              <FaGoogle className='iconu' />
            </a>
          </div>
        </section>

        <section className='footer-links mb-4'>
           <a href='https://www.ieee.org/' className='text-white'>IEEE</a>
           <a href='https://ieeeindiacouncil.org/' className='text-white'>Region 10</a>
           <a href='https://ieeebangalore.org/' className='text-white'>Bangalore Section</a>
           <a href='https://ieee-collabratec.ieee.org/app/home' className='text-white'>IEEE Collabratec</a>
           <a href='https://www.bmsce.ac.in/' className='text-white'>BMS College of Engineering</a>
        </section>
      </MDBContainer>

      <div className='copyright text-center'>
        © 2024 Copyright: 
        <a className='text-white' href='https://bmsceieee.com/'> BMSCE IEEE </a>
      </div>
    </MDBFooter>
  );
}
