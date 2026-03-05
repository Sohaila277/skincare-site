import React from 'react';
import './ProfessionalSection.css';
import professionalImg from '../../src/assets/images/professional-skin.png'; 
import jarIcon from '../../src/assets/images/cream.png'; // New Flaticon icon

const ProfessionalSection = () => {
  return (
    <section className="prof-section" id="professional">
      <div className="prof-container">
        
       
        <div className="prof-content-box">
          <img src={jarIcon} alt="Cream icon" className="prof-icon" />
          <h2 className="prof-title">
            Speak to a professional <br /> without the in person
          </h2>
          <p className="prof-text">
            Skip the waiting room and get expert advice from the comfort of your home. 
            Our skincare specialists are available for virtual consultations to help 
            identify your skin type and recommend the perfect organic regimen. 
            Professional beauty care is now just a click away.
          </p>
          <button className="view-more-btn">VIEW MORE</button>
        </div>

       
        <div className="prof-image-wrapper">
          <img src={professionalImg} alt="Professional skin care" className="prof-main-img" />
        </div>

      </div>
    </section>
  );
};

export default ProfessionalSection;