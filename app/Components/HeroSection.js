import React, { useState, useEffect } from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import video1 from '../videos/video-3.mp4';
import video2 from '../videos/video-2.mp4';
import { Link as Scroll } from 'react-scroll';
import { Collapse } from '@material-ui/core';
function HeroSection() {
  const [video, setVideo] = useState(false);
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, []);
  return (
    <div className='hero-container'>
      <video src={video ? video1 : video2} autoPlay loop muted />
      <h1>ADVENTURE AWAITS</h1>

      <p>What are you waiting for?</p>
      <Collapse
        in={checked}
        {...(checked ? { timeout: 1500 } : {})}
        className='hero-container2'
      >
        <div className='hero-btns'>
          <Scroll to='place-to-visit' smooth={true}>
            <Button
              className='btns'
              buttonStyle='btn--outline'
              buttonSize='btn--large'
            >
              GET STARTED
            </Button>
          </Scroll>
          <Button
            className='btns'
            buttonStyle='btn--primary'
            buttonSize='btn--large'
            onClick={(e) => {
              setVideo(!video);
            }}
          >
            BACKGROUND NXT <i className='far fa-play-circle' />
          </Button>
        </div>
      </Collapse>
    </div>
  );
}

export default HeroSection;
