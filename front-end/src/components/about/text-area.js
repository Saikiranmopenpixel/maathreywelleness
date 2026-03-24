

const TextArea = () => {
  return (
    <section className="about__text pt-115 pb-100">
      <div className="container">
        <div className="row">
          <div className="col-xl-4 col-lg-4">
            <div
              className="about__text-wrapper wow fadeInUp"
              data-wow-delay=".3s"
              data-wow-duration="1s"
            >
              <h3 className="about__text-title">
                About Us <br /> Maathrey Wellness
              </h3>
            </div>
          </div>
          <div className="col-xl-8 col-lg-8">
            <div
              className="about__text wow fadeInUp"
              data-wow-delay=".6s"
              data-wow-duration="1s"
            >
              <p>
             Maathrey Wellness is a dedicated healthcare company focused on providing high-quality pharmaceutical and nutraceutical products that support better health and everyday wellness. We specialize in a wide range of tablets, capsules, and health supplements designed to address various health needs such as immunity, bone strength, liver care, and lifestyle-related conditions.
              </p>

              <p>
                At Maathrey Wellness, we are committed to maintaining the highest standards of quality, safety, and effectiveness in all our products. Our formulations are carefully developed using scientifically backed ingredients to ensure reliable results and customer satisfaction. We continuously strive to innovate and improve our offerings to meet the evolving healthcare needs of modern life.
              </p>
              <p>Our mission is to make healthcare accessible and affordable while promoting preventive care and overall well-being. With a customer-first approach and a focus on trust and excellence, Maathrey Wellness aims to be a reliable partner in helping people lead healthier, happier, and more active lives.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TextArea;
