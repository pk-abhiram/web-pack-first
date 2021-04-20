import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ButtonPlaces } from './Button';
import './Navbar.css';
import { Instagram, LinkedIn } from '@material-ui/icons';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);
  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link
            to='/second-landing-page/'
            className='navbar-logo'
            onClick={closeMobileMenu}
          >
            APK <i className='fab fa-typo3' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <a
                href='https://www.instagram.com/pk_abhiram/'
                target='_blank'
                className='nav-links'
                rel='noopener noreferrer'
                onClick={closeMobileMenu}
              >
                <Instagram color='secondary' fontSize='large' />
              </a>
            </li>
            <li className='nav-item'>
              <a
                href='https://www.linkedin.com/in/abhiram-pk/'
                target='_blank'
                className='nav-links'
                rel='noopener noreferrer'
                onClick={closeMobileMenu}
              >
                <LinkedIn color='primary' fontSize='large' />
              </a>
            </li>
          </ul>
          {button && (
            <a
              href='https://pk-abhiram.github.io/LandingPage/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <ButtonPlaces buttonStyle='btn--outlinep'>Places</ButtonPlaces>
            </a>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
