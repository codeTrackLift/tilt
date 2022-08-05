import '../styles/Tilt.css';

function Tilt({contentStyle}) {

  const positionTracker = (num) => {
    const trackers = [];
    for(let i = 0; i < num; i++) {
      trackers.push(<div className="position-tracker" key={i}></div>)
    }
    return trackers
  };

  return (
    <>
    <div className="tilt-wrapper">
      {positionTracker(9)}
      <div className="tilt-content" style={contentStyle}>
        <h1>Tilt</h1>
        <p>hover <span>|</span> touch</p>
      </div>
    </div>
    </>
  );
};

export default Tilt;
