import React from 'react';
// import './styles.css';
import Lottie from "lottie-react";
import Carrot from './Carrot.json';





function Lotty() {
  return (
    <div className="Lotty">
      <header className="Lotti">
        <div style={{ width: "80%", }}>
          <Lottie loop={true} animationData={Carrot} />
        </div>
      </header>
    </div>
  );
}

export default Lotty;