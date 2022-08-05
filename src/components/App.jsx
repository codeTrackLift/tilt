import {useState, useEffect } from 'react'
import { motion } from 'framer-motion';
import Slider from './Slider';
import Tilt from './Tilt';
import Button from './Button';
import QrCode from './QrCode';


const App = () => {
  const [tilt, setTilt] = useState(12);
  const [contentStyle, setContentStyle] = useState({
    '--angle': tilt,
  })

  useEffect(() => {
    const style = {'--angle': tilt + 'deg'};
    setContentStyle(style);
  }, [tilt]);

  return (
    <motion.div
      initial={{ opacity: 0, rotateY: 90 }}
      animate={{ opacity: 1, rotateY: 0 }}
      transition={{ delay: 0.125, duration: 0.5, type: 'inertia', velocity: 360 }}
    >
      <Slider tilt={tilt} setTilt={setTilt} />
      <Tilt tilt={tilt} contentStyle={contentStyle} />
      <Button url={'https://github.com/codeTrackLift/tilt#readme'}/>
      <QrCode />
    </motion.div>
  )
}

export default App