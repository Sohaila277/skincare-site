import NotificationBar from "../components/NotificationBar/NotificationBar.jsx";
import Navbar from '../components/Navbar/Navbar.jsx';
import Hero from '../components/Hero/Hero.jsx';
import About from '../components/About/About.jsx'
import Services from '../components/Services/Services.jsx';
import ExpertSection from "../components/ExpertSection/ExpertSection.jsx";
import ProfessionalSection from "../components/ProfessionalSection/ProfessionalSection.jsx";
import TopProducts from "../components/TopProducts/TopProducts.jsx";
import ContactMap from "../components/ContactMap/ContactMap.jsx";
import Footer from "../components/Footer/Footer.jsx";

function Home () {

 return (

    <div>
        <NotificationBar />

        <Navbar />

        <Hero />
        <About />
        <Services />
        <ExpertSection />
        <ProfessionalSection />
        <TopProducts />
        <ContactMap />
        <Footer />

    </div>

 );

}

export default Home;