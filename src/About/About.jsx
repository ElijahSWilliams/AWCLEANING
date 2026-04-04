import "./About.css";

function About() {
  return (
    <div className="about">
      <h1 className="about__title">About Us</h1>
      <p className="about__main-text">
        At AWCleaning, we are dedicated to providing top-notch cleaning services
        that exceed our clients' expectations. With years of experience in the
        industry, we have built a reputation for reliability, professionalism,
        and exceptional results. Our team of skilled cleaners is committed to
        delivering a spotless and healthy environment for your home or office.
        We use eco-friendly products and the latest cleaning techniques to
        ensure that every space we clean is not only immaculate but also safe
        for you and your family. Whether you need regular cleaning, deep
        cleaning, or specialized services, AWCleaning is here to make your life
        easier and your space cleaner.
      </p>
      <p className="about__main-text">
        {" "}
        Service Areas: We proudly serve the Philadelphia, PA and the surrounding
        areas. If you're located in any of these areas, we're just a call away
        from providing you with exceptional cleaning services. Contact us today
        to schedule your cleaning appointment and experience the AWCleaning
        difference!{" "}
      </p>

      {/* Image of a Philadelphia Map */}
      <div className="about__image-container">
        <img
          className="about__img"
          src="https://upload.wikimedia.org/wikipedia/commons/2/28/Street_map_of_Philadelphia_and_surrounding_area.png"
          alt="map of philadelphia"
        />
      </div>
    </div>
  );
}

export default About;
