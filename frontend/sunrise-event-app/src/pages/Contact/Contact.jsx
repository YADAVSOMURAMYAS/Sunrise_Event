import React from 'react';
import './Contact.css';
import Navbar from '../../components/Navbar/Navbar';
import mail_icon from '../../assets/mail-icon.png';
import phone_icon from '../../assets/phone-icon.png';
import location_icon from '../../assets/location-icon.png';
import msg_icon from '../../assets/msg-icon.png';
import white_arrow from '../../assets/white-arrow.png';
import Title from '../../components/Title/Title';
import logo from '../../assets/logo.png';

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);
    formData.append("access_key", "77c9f661-a922-4520-96cf-2da71b830103");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Thank you! Your message has been received.");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult("Oops! Something went wrong. Please try again.");
    }
  };

  return (
    <div className='contact-container'>
      <Navbar />
      
      <div className="title">
      <p>CONTACT US</p>
        <div className="subheading"><img src={logo} alt="" /><h2>Let's Plan Your Dream Event</h2></div>
      </div>

      <div className="contact">
        <div className="contact-column">
          <h3>Get in Touch with Us <img src={msg_icon} alt="Message Icon" /></h3>
          <p>
            Planning a wedding or an event? Contact us for personalized event management services, including:
          </p>
          <ul>
            <li>✨ Wedding Decoration</li>
            <li>🎉 Reception Setup</li>
            <li>💃 Sangeet & Haldi Decoration</li>
            <li>🪑 Rental Furniture & Sitting Arrangements</li>
          </ul>
          <p>We ensure an unforgettable experience tailored to your needs.</p>
          <ul>
            <li><img src={mail_icon} alt="Mail Icon" /> sunriseevents@gmail.com</li>
            <li><img src={phone_icon} alt="Phone Icon" /> +91 98878 29699</li>
            <li><img src={location_icon} alt="Location Icon" /> BlackBunny campus, beside highfield ascot mall building, VIP Road, opp. Palm Avenue, Surat ,Gujarat-395007</li>
          </ul>
        </div>
        <div className="contact-column">
          <form onSubmit={onSubmit}>
            <label>Your Name</label>
            <input type="text" name="name" placeholder="Enter your name" required />
            <label>Phone Number</label>
            <input type="tel" name="phone" placeholder="Enter your mobile number" required />
            <label>Message</label>
            <textarea name="message" rows="6" placeholder="Tell us about your event!" required></textarea>
            <button type="submit" className="btn dark-btn">
              Submit Now <img src={white_arrow} alt="Arrow Icon" />
            </button>
          </form>
          <span>{result}</span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
