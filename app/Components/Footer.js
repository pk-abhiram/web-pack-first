import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>Join the Adventure!</p>
        <p className='footer-subscription-text'>
          &copy; {1900 + new Date().getYear()} , made by @pk_abhiram
        </p>
      </section>
    </div>
  );
}

export default Footer;
