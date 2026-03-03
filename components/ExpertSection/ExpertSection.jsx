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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore magn. Diam volutpat com sed
            egestas. Nisi quis eleifend quam adipiscing vitae proin sagittis nisl.
            Nulla malesuada pellentes elit eget.
          </p>
          <button className="view-more-btn">VIEW MORE</button>
        </div>
      </div>
    </section>
  );
};

export default ExpertSection;