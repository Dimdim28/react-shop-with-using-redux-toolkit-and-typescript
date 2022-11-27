import React from "react";

const Preloader: React.FC = () => {
  return (
    <div className="container">
      <div className="preLoader">
        <div className="shape">
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
        </div>
        <div className="shadow">
          <div className="shapeShadow"></div>
          <div className="shapeShadow"></div>
          <div className="shapeShadow"></div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
