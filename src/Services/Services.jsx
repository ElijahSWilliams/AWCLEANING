import "./Services.css";

function Services() {
  return (
    <>
      <h1 className="services__title">Services</h1>
      <h2 className="services__subtitle">Here are the services we offer:</h2>
      <div className="services">
        {/*   <ul>
          <li>Residential Cleaning</li>
          <li>Commercial Cleaning</li>
          <li>Deep Cleaning</li>
          <li>Move-In/Move-Out Cleaning</li>
          <li>Post-Construction Cleaning</li>
        </ul> */}

        {/* Cards that display each service */}
        {/* Card 1 */}
        <div className="service-card">
          <h2>Residential Cleaning</h2>
          {/* Image Here */}
          <img
            className="service-card-image"
            src="https://media.istockphoto.com/id/654153664/photo/cleaning-service-sponges-chemicals-and-mop.jpg?s=612x612&w=0&k=20&c=vHQzKbz7L8oEKEp5oQzfx8rwsOMAV3pHTV_1VPZsREA="
            alt=""
          />
          <p>
            Our residential cleaning services ensure your home is spotless and
            comfortable.
          </p>
        </div>
        {/* Card 2 */}
        <div className="service-card">
          <h2>Commercial Cleaning</h2>
          <img
            className="service-card-image"
            src="https://images.unsplash.com/photo-1581578731548-c64695cc6952"
            alt="commercial cleaning"
          />

          <p>
            We provide professional commercial cleaning solutions for your
            business needs.
          </p>
        </div>
        {/* Card 3 */}
        <div className="service-card">
          <h2>Deep Cleaning</h2>
          {/* Image Here */}
          <img
            className="service-card-image"
            src="https://www.deslaurier.com/hs-fs/hubfs/Showcase/Ironside%20Warmth/Deslaurier%20Fournier%20008.jpg?width=7198&name=Deslaurier%20Fournier%20008.jpg"
            alt="a clean kitchen"
          />
          <p>
            Our deep cleaning services tackle the toughest messes and leave your
            space pristine.
          </p>
        </div>
        {/* Card 4 */}
        <div className="service-card">
          <h2>Move-In/Move-Out Cleaning</h2>
          {/* Image Here */}
          <img
            className="service-card-image"
            src="https://media.istockphoto.com/id/623876738/photo/move-cardboard-boxes-and-cleaning-things.jpg?s=612x612&w=0&k=20&c=Rs07LCONb3jCU94joRSt-LqVbK_0FNvnpaVSGQvuqu4="
            alt="move-in/move-out cleaning"
          />
          <p>
            We offer thorough move-in/move-out cleaning to make your transition
            smooth and stress-free.
          </p>
        </div>
        <div className="service-card">
          <h2>Airbnb Cleaning</h2>
          {/* Image Here */}
          <img 
            className="service-card-image"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiqWX68r6j9b75fONkgVDXQme2q_UQmG4GLw&s"
            alt="airbnb cleaning"
          />
          <p>
            We provide specialized cleaning services for Airbnb hosts to ensure
            their properties are always ready for guests.
          </p>
        </div>
        <div className="service-card">
          <h2 className="">Eco-friendly Cleaning</h2>
          {/* Image Here */} 
          <img 
            className="service-card-image"
            src="https://www.marthastewart.com/thmb/9tIKbE6U9V5Zu6Azr8W5ncvsLd8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1469991492-c6a76faa77a043c59c85489f000a2957.jpg"
            alt="eco-friendly cleaning"
          />
          <p>
            We offer eco-friendly cleaning options to keep your space clean and
            safe for you and your family.
          </p>
        </div>
      </div>
    </>
  );
}

export default Services;
