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
Diam volutpat commodo sed egestas. Nisi quis eleifend quam
adipiscing vitae proin sagittis nisl. Nulla malesuada pellentesque
elit eget gravida cum sociis natoque penatibus.
</p>

<button className="about-btn">
VIEW MORE
</button>

</div>


</section>

)

}

export default About