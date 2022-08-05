import React from 'react';
import '../styles/Button.css';

const Button = ({url}) => {
  return (
    <div>
      <a href={url} target="_blank" rel='noreferrer'>View Code</a>
    </div>
  )
}

export default Button;
