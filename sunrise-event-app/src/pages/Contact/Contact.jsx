import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
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
    <div className="bg-[#fcc774] min-h-screen flex flex-col pt-10">
      <Navbar />
      
      {/* Page Title */}
      <div className="text-center my-10">
        <p className="text-xl font-semibold text-black">CONTACT US</p>
        <div className="flex justify-center items-center gap-4">
          <img src={logo} alt="Logo" className="h-20 w-20" />
          <h2 className="text-3xl font-bold text-black">Let's Plan Your Dream Event</h2>
        </div>
      </div>

      {/* Contact Section */}
      <div className="max-w-6xl mx-auto flex flex-wrap bg-white shadow-xl rounded-lg p-10">
        {/* Left Column (Contact Details) */}
        <div className="w-full md:w-1/2 text-gray-700">
          <h3 className="text-2xl font-bold text-black flex items-center gap-2">
            Get in Touch with Us <span>📩</span>
          </h3>
          <p className="mt-3 text-lg">Planning a wedding or an event? Contact us for personalized event management services, including:</p>
          <ul className="mt-4 space-y-2 text-lg">
            <li>✨ Wedding Decoration</li>
            <li>🎉 Reception Setup</li>
            <li>💃 Sangeet & Haldi Decoration</li>
            <li>🪑 Rental Furniture & Sitting Arrangements</li>
          </ul>
          <p className="mt-4">We ensure an unforgettable experience tailored to your needs.</p>
          <ul className="mt-5 space-y-3">
            <li className="flex items-center gap-3"><span>📧</span> sunriseevents@gmail.com</li>
            <li className="flex items-center gap-3"><span>📞</span> +91 98878 29699</li>
            <li className="flex items-center gap-3">
              <span>📍</span> BlackBunny campus, beside Highfield Ascot Mall, VIP Road, Surat, Gujarat-395007
            </li>
          </ul>
        </div>

        {/* Right Column (Contact Form) */}
        <div className="w-full md:w-1/2 mt-10 md:mt-0">
          <form onSubmit={onSubmit} className="bg-white p-8 shadow-lg rounded-lg">
            <label className="block font-semibold text-gray-700">Your Name</label>
            <input type="text" name="name" placeholder="Enter your name" required 
              className="w-full p-3 border border-gray-300 rounded-md mt-1 focus:ring-2 focus:ring-orange-400"/>

            <label className="block mt-4 font-semibold text-gray-700">Phone Number</label>
            <input type="tel" name="phone" placeholder="Enter your mobile number" required 
              className="w-full p-3 border border-gray-300 rounded-md mt-1 focus:ring-2 focus:ring-orange-400"/>

            <label className="block mt-4 font-semibold text-gray-700">Message</label>
            <textarea name="message" rows="6" placeholder="Tell us about your event!" required 
              className="w-full p-3 border border-gray-300 rounded-md mt-1 focus:ring-2 focus:ring-orange-400 resize-none"></textarea>

            <button type="submit" className="w-full mt-5 bg-orange-500 text-white font-bold py-3 rounded-lg hover:bg-orange-600 transition-all">
              Submit Now →
            </button>

            <span className="block mt-3 text-green-600 font-semibold">{result}</span>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
