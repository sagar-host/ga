import React from 'react';
// import './styles.css';
import Lottie from "lottie-react";
import Parrot from './Parrot.json';





function Lott() {
  return (
    <div className="Lott">
      <header className="Lotti">
        <div style={{ width: "80%", }}>
          <Lottie loop={true} animationData={Parrot} />
        </div>
      </header>
    </div>
  );
}

export default Lott;