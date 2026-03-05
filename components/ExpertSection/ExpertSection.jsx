import React from 'react';
import './ExpertSection.css';
import expertImg from '../../src/assets/images/expert.png'; 
import iconImg from '../../src/assets/images/face-icon.png'; 

const ExpertSection = () => {
  return (
    <section className="expert-section" id="expert">
      <h2 className="expert-main-title">
        CONNECTING YOU WITH EXPERTS IN <br /> SKIN CARE AND TREATMENTS
      </h2>

      <div className="expert-container">
        
        <div className="expert-image-wrapper">
          <img src={expertImg} alt="Skin treatment" className="expert-main-img" />
        </div>

       
        <div className="expert-content-box">
          <img src={iconImg} alt="icon" className="expert-icon" />
          <h3>Only pay if your condition improves after treatment</h3>
          <p>
            We believe so deeply in the power of our organic formulas that we prioritize 
            your results above all else. Our goal is to transform your skin through 
            natural healing and consistent care. If our personalized treatment plan 
            doesn't bring a visible change to your skin's health, we'll work with you 
            until it does.
          </p>
          <button className="view-more-btn">VIEW MORE</button>
        </div>
      </div>
    </section>
  );
};

export default ExpertSection;