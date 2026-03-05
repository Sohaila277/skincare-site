import './About.css'
import aboutMain from '../../src/assets/images/about-main.png'
import aboutSmall from '../../src/assets/images/about-small.png'

function About(){

return(

<section className="about" id="about">

<div className="about-images">

<img src={aboutMain} className="main-img"/>

<img src={aboutSmall} className="small-img"/>

</div>


<div className="about-text">

<h2>ABOUT US</h2>

<p>
Welcome to Glass Skin Effect, Home based organic skin care
manufacturer, bringing you a range of high-quality skin care made
from 100% organic.
</p>

<p>
Our mission is simple: to help you achieve that coveted, luminous glow 
  without harsh chemicals or synthetic fillers. We believe that what you 
  put on your body is just as important as what you put in it.
</p>

<button className="about-btn">
VIEW MORE
</button>

</div>


</section>

)

}

export default About