import React from "react";
import InfoBox from "./InfoBox";
import "../Services.css"; 

const Services: React.FC = () => {
  return (
    <div id="services-section" className="info-boxes"> 
      <div className="box">
        <InfoBox
          title="Product Scope"
          description="A structured 15-day process to align your product vision with your business goals."
          animationName="slideInLeft"
        />
      </div>
      <div className="box">
        <InfoBox
          title="UX/UI Design"
          description="Design an engaging product that is easy-to-use, attractive and functional."
          animationName="slideInLeft"
        />
      </div>
      <div className="box">
        <InfoBox
          title="MVP Builder"
          description="Go to the market quickly with a high-quality Minimal Viable Product."
          animationName="slideInLeft"
        />
      </div>
      <div className="box">
        <InfoBox
          title="Dedicated Teams"
          description="Build your product with a dedicated team of developers."
          animationName="slideInLeft"
        />
      </div>
      <div className="box">
        <InfoBox
          title="Custom Software Development"
          description="Lean frameworks applied to your vision to create an innovative custom software solution."
          animationName="slideInLeft"
        />
      </div>
    </div>
  );
};

export default Services;
