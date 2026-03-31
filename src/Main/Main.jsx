import "./Main.css";

function Main() {
  return (
    <>
      {/* Header Text */}
      <h1 className="main__header-title">Welcome to AW Cleaning Services!</h1>

      <div className="main">
        <div className="main__text-side">
          <h2 className="main__subheader-text">
            Your Trusted Partner for a Spotless Home and Office
          </h2>
          <p className="main-text">
            We offer a wide range of services to keep your home or office
            spotless and fresh. Contact us today for a free quote!
          </p>
          <p className="main-text">
            Our team of experienced professionals is dedicated to providing
            top-notch cleaning services tailored to your specific requirements.
            Whether you need regular maintenance or a one-time deep clean, we've
            got you covered. Affordable, trustworthy, and efficient – that's our
            promise to you. Let us take care of the mess so you can enjoy a
            clean and healthy environment!
          </p>
        </div>

        <div className="main__image-container">
          <img
            className="main__image"
            src="https://www.deslaurier.com/hs-fs/hubfs/Showcase/Ironside%20Warmth/Deslaurier%20Fournier%20008.jpg?width=7198&name=Deslaurier%20Fournier%20008.jpg"
            alt="a clean kitchen"
          />
          <p className="main__image-text">
            Experience the Difference with AW Cleaning Services
          </p>
          <p className="main__image-text">
            Spotless Spaces, Happy Faces, Peaceful Places!
            <br />
            <button className="main__cta-button">Get a Free Quote</button>
          </p>
        </div>
      </div>
    </>
  );
}

export default Main;
