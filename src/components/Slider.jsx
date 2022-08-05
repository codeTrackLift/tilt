import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Slider.css';

const spanStyle = {
  color: 'black',
  fontSize: '1rem',
  textShadow: 'none',
  transform: 'translateY(.125rem)',
}

const Slider = ({tilt, setTilt}) => {
  const changeHandler = (e) => {
    setTilt(e.target.value)
  }

  return (
    <motion.div
      id='sliderWrapper'
      initial={{ y: 200 }}
      animate={{ y: 0 }}
      transition={{ delay: 1.125, duration: 0.5 }}
    >
      <span style={spanStyle}>{tilt}&#176;</span>
        <input
          id='slider'
          min='5'
          max='85'
          step='1'
          type='range'
          value={tilt}
          onChange={changeHandler}
        >
      </input>
    </motion.div>
  )
};

export default Slider;
