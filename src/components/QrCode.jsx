import React from 'react';
import { motion } from 'framer-motion';
import qrCode from '../images/qr-code.png';

const QrCode = () => {
  return (
    <motion.div
        initial={{ scale: 0, y: -250 }}
        animate={{ scale: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <img id='qrCode' src={qrCode} alt='QR Code'></img>
      </motion.div>
  )
};

export default QrCode;