import "./Hero.css";
import hero from "../../src/assets/images/hero.png";
import Button from "../Button/Button.jsx";

function Hero(){

 return(

  <section className="hero" id="hero">

      <div className="hero-content">

          <h1>
          HOME BASED <br/>
          ORGANIC SKIN CARE
          </h1>

          <p>
          Bringing you a range of high-quality skin care
          made from 100% organic
          </p>

          <div className="hero-input">

              <input
              placeholder="Email Address"
              />

              <Button text="Get Noticed"/>

          </div>

      </div>

      <img src={hero} className="hero-image"/>

  </section>

 )

}

export default Hero;