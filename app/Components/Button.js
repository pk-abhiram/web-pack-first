import React from 'react';
import './Button.css';

const STYLES = ['btn--primary', 'btn--outline', 'btn--test'];

const SIZES = ['btn--medium', 'btn--large'];

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <button
      className={`btn ${checkButtonStyle} ${checkButtonSize}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

const STYLESP = ['btn--primaryp', 'btn--outlinep', 'btn--testp'];

const SIZESP = ['btn--mediump', 'btn--largep'];

export const ButtonPlaces = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
}) => {
  const checkButtonStylep = STYLESP.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSizep = SIZESP.includes(buttonSize) ? buttonSize : SIZESP[0];

  return (
    <button
      className={`btn ${checkButtonStylep} ${checkButtonSizep}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};
