import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Button.css';

const Button = ({url}) => {
  return (
    <motion.div
      initial={{ rotateY: 90, y: -200 }}
      animate={{ rotateY: 0, y: 0 }}
      transition={{ delay: 1.75, duration: 0.25, type: 'spring', stiffness: 250, weight: 750 }}
    >
      <a href={url} target='_blank' rel='noreferrer'>View Code</a>
    </motion.div>
  )
}

export default Button;
