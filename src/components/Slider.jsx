import React from 'react';
import '../styles/Slider.css';

const wrapperStyle = {
  display: 'flex',
  justifyContent: 'center',
  margin: '0 auto 0.75rem auto',
};

const inputStyle = {
  appearance: 'none',
  background: 'white',
  boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
  cursor: 'pointer',
  padding: '0 0.5rem',
  WebkitAppearance: 'none',
};

const spanStyle = {
  color: 'black',
  fontFamily: 'Arial',
  fontSize: '1rem',
  padding: '0 0.5rem',
  textShadow: 'none',
  transform: 'translateY(0.125rem)',
};

const Slider = ({tilt, setTilt}) => {

  const changeHandler = (e) => {
    setTilt(e.target.value)
  }

  return (
    <div style={wrapperStyle}>
      <span style={spanStyle}>{tilt}&#176;</span>
        <input
          id='tilt'
          min='5'
          max='90'
          step='1'
          type='range'
          value={tilt}
          onChange={changeHandler}
          style={inputStyle}
        >
      </input>
    </div>
  )
};

export default Slider;
