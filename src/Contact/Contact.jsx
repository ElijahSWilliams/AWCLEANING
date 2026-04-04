import "./Contact.css";

function Contact() {
  return (
    <div className="contact">
      <h1 className="contact__title">Contact Us</h1>
      <p className="contact__main-text">
        We would love to hear from you! Whether you have questions about our
        services, want to request a quote, or just want to say hello, feel free
        to reach out to us. You can contact us here:
      </p>
      <ul className="contact__methods">
        <li>
          Email: <a href="mailto:info@awcleaning.com">info@awcleaning.com</a>
        </li>
        <li>
          Phone: <a href="tel:+1234567890">(123) 456-7890</a>
        </li>
        <li>Address: 123 Clean Street, Philadelphia, PA 19103</li>
      </ul>

      {/* Contact Form */}
      {/*     <form className="contact__form">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" rows="5" required></textarea>

        <button type="submit" className="contact__submit-button">
          Send Message
        </button>
      </form> */}

      {/* <p className="contact__main-text">
        We look forward to connecting with you and providing you with
        exceptional cleaning services!
      </p> */}
    </div>
  );
}

export default Contact;
