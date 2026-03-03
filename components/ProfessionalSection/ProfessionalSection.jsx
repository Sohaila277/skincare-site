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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore magn. Diam volutpat com sed
            egestas. Nisi quis eleifend quam adipiscing vitae proin sagittis nisl.
            Nulla malesuada pellentes elit eget.
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