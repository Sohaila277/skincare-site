import './Services.css';
import img1 from '../../src/assets/images/img1.png';
import img2 from '../../src/assets/images/img2.png';
import img3 from '../../src/assets/images/img3.png';
 

const Services = () => {
  const servicesData = [
    {
      id: 1,
      title: "ORGANIC SOLUTION",
      subtitle: "Get the promo",
      image: img1
    },
    {
      id: 2,
      title: "TREATMENT",
      subtitle: "Start from $25.00",
      image: img2
    },
    {
      id: 3,
      title: "EXCELLENT OFFERS",
      subtitle: "Get the promo",
      image: img3
    }
  ];

  return (
    <section className="service-section" id="services">
      <h2 className="service-title">WHAT WE OFFER</h2>
      
      <div className="service-container">
        {servicesData.map((item) => (
          <div key={item.id} className="service-card">
            <div className="img-circle-wrapper">
              <img src={item.image} alt={item.title} className="service-img" />
            </div>
            <h3 className="service-name">{item.title}</h3>
            <p className="service-price">{item.subtitle}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;