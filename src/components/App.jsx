import {useState, useEffect } from 'react'
import Slider from './Slider';
import Tilt from './Tilt';
import Button from './Button';
import qrCode from '../assets/qr-code.png';

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
    <>
    <Slider tilt={tilt} setTilt={setTilt} />
    <Tilt tilt={tilt} contentStyle={contentStyle} />
    <Button url={'https://github.com/codeTrackLift/tilt#readme'}/>
    <img id='qrCode' src={qrCode} alt='QR Code' />
    </>
  )
}

export default App