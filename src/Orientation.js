import './Orientation.css';
import {useEffect} from 'react'


function Orientation() {

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://ajax.googleapis.com/ajax/libs/model-viewer/3.0.0/model-viewer.min.js';
    script.type = 'module'
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  });

  const modelViewerStyle = {
    width: '500px',
    height: '500px',
    border: '1px solid black',
  };

  return (
    <div className="orientation">
      <model-viewer src="src\assets\Rocket.glb"
              ios-src="src\assets\Rocket.glb"
              alt="glb rocket"              
              auto-rotate
              style={modelViewerStyle}></model-viewer>
    </div>
  );
}

export default Orientation;