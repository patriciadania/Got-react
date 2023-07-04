import React from 'react';
import YouTube from 'react-youtube';
import './Trailer.css';

const Trailer = () => {
  const divStyle = {
    backgroundImage: "url('/got.jpg')",
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    minHeight: '100vh',
  };
  const videoId = 'KPLWWIOCOOQ';

  return (
    <div style={divStyle}>
      <div className="trailer-container">
      <YouTube videoId={videoId} className="trailer-video" />
    </div>
      
    </div>
  );
};

export default Trailer;
