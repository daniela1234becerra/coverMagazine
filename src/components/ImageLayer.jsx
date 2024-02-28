import React from 'react';
import SteveJobsImage from '../img/SteveJobs.png';

function ImageLayer() {
  return (
    <div className="layer">
      <img src={SteveJobsImage} alt="SteveJobs" />
    </div>
  );
}

export default ImageLayer;