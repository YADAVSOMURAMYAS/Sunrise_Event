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

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Thank you! Your message has been received.");
        event.target.reset();
      } else {
        console.error("Error", data);
        setResult("Oops! Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setResult("Oops! Something went wrong. Please try again.");
    }
  };

  return (
    <div className="!bg-[#fcc774] !min-h-screen !flex !flex-col !pt-10">
      <Navbar />

      {/* Centered Logo & Title */}
      <div className="!flex !flex-col !items-center !justify-center !text-center !mt-8 !px-6 md:!px-10">
        <img src={logo} alt="Logo" className="!h-24 !w-24 !mb-3 !mx-auto" />
        <h2 className="!text-3xl !font-bold !text-black !mx-auto">Let's Plan Your Dream Event</h2>
      </div>

      <div className="!text-center !mt-12">
        <p className="!text-xl !font-semibold !text-black">CONTACT US</p>
      </div>

      {/* Contact Section */}
      <div className="!max-w-6xl !mx-auto !flex !flex-wrap !bg-white !shadow-lg !rounded-lg !p-6 md:!p-10 !mt-10">
        
        {/* Left Column (Contact Details) */}
        <div className="!w-full md:!w-1/2 !p-5 !text-gray-700">
          <h3 className="!text-xl !font-bold !text-black !flex !items-center !gap-2">Get in Touch with Us 📩</h3>
          <p className="!mt-2 !text-lg">Planning a wedding or an event? Contact us for personalized event management services, including:</p>
          <ul className="!mt-3 !space-y-2 !text-lg">
            <li>✨ Wedding Decoration</li>
            <li>🎉 Reception Setup</li>
            <li>💃 Sangeet & Haldi Decoration</li>
            <li>🪑 Rental Furniture & Sitting Arrangements</li>
          </ul>
          <p className="!mt-4">We ensure an unforgettable experience tailored to your needs.</p>
          <ul className="!mt-5 !space-y-2 !font-semibold">
            <li>📧 sunriseevents@gmail.com</li>
            <li>📞 +91 98878 29699</li>
            <li>📍 BlackBunny campus, beside Highfield Ascot Mall, VIP Road, Surat, Gujarat-395007</li>
          </ul>
        </div>

        {/* Right Column (Contact Form) */}
        <div className="!w-full md:!w-1/2 !p-5">
          <form onSubmit={onSubmit} className="!bg-white !p-6 md:!p-8 !shadow-md !rounded-lg">
            <label className="!font-semibold !text-gray-700 !block !mt-2">Your Name</label>
            <input type="text" name="name" placeholder="Enter your name" required
              className="!w-full !p-3 !mt-1 !border !border-gray-300 !rounded-md !focus:outline-none !focus:ring-2 !focus:ring-orange-500"
            />

            <label className="!font-semibold !text-gray-700 !block !mt-4">Phone Number</label>
            <input type="tel" name="phone" placeholder="Enter your mobile number" required
              className="!w-full !p-3 !mt-1 !border !border-gray-300 !rounded-md !focus:outline-none !focus:ring-2 !focus:ring-orange-500"
            />

            <label className="!font-semibold !text-gray-700 !block !mt-4">Message</label>
            <textarea name="message" rows="6" placeholder="Tell us about your event!" required
              className="!w-full !p-3 !mt-1 !border !border-gray-300 !rounded-md !resize-none !focus:outline-none !focus:ring-2 !focus:ring-orange-500"
            ></textarea>

            <button type="submit"
              className="!w-full !mt-5 !bg-orange-500 !text-white !text-lg !font-semibold !p-3 !rounded-md !transition !duration-300 !hover:bg-orange-600"
            >
              Submit Now →
            </button>

            <span className="!block !mt-3 !font-bold !text-green-600">{result}</span>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
