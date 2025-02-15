import React from 'react'
import './Gallery.css'
import Navbar from '../../components/Navbar/Navbar'
import { useState, useEffect } from "react";
import Footer from '../../components/Footer/Footer'

const Gallery = () => {
  const [currentImage, setCurrentImage] = useState(null);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setCurrentImage(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const images = [
  
    "https://s3-us-west-2.amazonaws.com/shaadiwishnewbucket/de36f1a9-1dd0-8dcd-2859-add0e3303100.jpg",
    "https://s3-us-west-2.amazonaws.com/shaadiwishnewbucket/97198252-65ef-175b-e3b5-974e4393cb65.jpg",
    "https://s3-us-west-2.amazonaws.com/shaadiwishnewbucket/7ceb07e5-3737-2295-957c-59184605c2ec.jpg",
    "https://s3-us-west-2.amazonaws.com/shaadiwishnewbucket/97409a77-7afd-4f88-50c8-04cbd220499a.jpg",
    "https://s3-us-west-2.amazonaws.com/shaadiwishnewbucket/aa2c017d-22eb-b4ce-e6fd-77bd08c12a74.jpg",
    "https://s3-us-west-2.amazonaws.com/shaadiwishnewbucket/a539954f-48eb-af03-4938-17fc60ae558a.jpg",
    "https://s3-us-west-2.amazonaws.com/shaadiwishnewbucket/2a22a7e4-c8d9-3cea-278f-8a1577d56e60.jpg",
    "https://s3-us-west-2.amazonaws.com/shaadiwishnewbucket/8fccfff2-edcf-9164-5817-d8f214ec2b10.jpg",
    "https://s3-us-west-2.amazonaws.com/shaadiwishnewbucket/310291db-e123-6f91-c16b-27bca4035df6.jpg",
    "https://s3-us-west-2.amazonaws.com/shaadiwishnewbucket/33887de0-4f10-4325-49ff-7f197e39df08.jpg",
    "https://s3-us-west-2.amazonaws.com/shaadiwishnewbucket/283276ec-d081-093a-8ebf-62540cb38946.jpg",
    "https://s3-us-west-2.amazonaws.com/shaadiwishnewbucket/69700ed6-217d-eeb4-e5e7-038604fe33d8.jpg",
    "https://s3-us-west-2.amazonaws.com/shaadiwishnewbucket/25fa2912-1a99-370b-1613-27ce434e6125.jpg",
    "https://s3-us-west-2.amazonaws.com/shaadiwishnewbucket/1e44db08-9374-4c0d-bf64-293b8471feb9.jpg",
    "https://s3-us-west-2.amazonaws.com/shaadiwishnewbucket/2a4426a2-81e7-7586-8c3a-64bb76fdb3ad.jpg",
    "https://s3-us-west-2.amazonaws.com/shaadiwishnewbucket/1973231f-4f2a-1910-c3e5-09d66dcf9e10.jpg",
    "https://s3-us-west-2.amazonaws.com/shaadiwishnewbucket/95b167a6-67eb-16dd-9716-4752d589d03f.jpg",
    "https://i.pinimg.com/originals/da/f0/b5/daf0b56190f59591494732061749c913.jpg",
    "https://i.pinimg.com/736x/a0/54/9b/a0549b84084a8f6058ec5d7c72e7562e.jpg",
    "https://deowgxgt4vwfe.cloudfront.net/uploads/1689585920_large.jpg",
    "https://www.bluelightproductionsllc.com/wp-content/uploads/2020/03/IMG_20140510_165316_748.jpg",
    "https://cms.interiorcompany.com/wp-content/uploads/2024/01/keep-it-eye-catching-with-balloons-for-republic-day-office-decoration.jpg",
    "https://i.pinimg.com/originals/ab/e1/aa/abe1aa7cea7e0b1fe547ca11300f6b06.jpg",
    "https://www.thewowstyle.com/wp-content/uploads/2020/10/Corporate-Event.jpg",
    "https://www.theknot.com/tk-media/images/3714cc34-eff4-4cc7-b911-86476d6f5646~rs_768.h",
    "https://i.pinimg.com/originals/bf/20/1a/bf201a5bfca919bd7f80fbcc6f737773.jpg",
    "https://th.bing.com/th/id/OIP.qkdO8c57FfpiZOLn2ZulZwAAAA?rs=1&pid=ImgDetMain",
    "https://images.squarespace-cdn.com/content/v1/59cc1d43197aea6d683b9d52/1677102774831-ZU3TB67LFVHBX55S6XYD/macewan_50th_aniverssary-2.jpg",
    "https://th.bing.com/th/id/OIP.S6xrQoHg49bF9_Vnnw8URQHaLG?rs=1&pid=ImgDetMain",
    "https://thejarvi.com/wp-content/uploads/2023/01/BIRTH004.jpg",
    "https://m.media-amazon.com/images/S/aplus-media-library-service-media/dcaea3de-a672-4359-b70a-a735a01313c7.__CR0,0,970,600_PT0_SX970_V1___.jpg",
    "https://stbonavenue.com/wp-content/uploads/2023/07/3_Blog-07-2023_8-12-Months-Out.jpg",
  ];
  return (
    <div>
      <Navbar />
      <section className="bg-gray-100 py-16">
        <div className="w-full mx-auto max-w-[90%] flex flex-col justify-center relative p-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-semibold text-gray-800">Event Gallery</h1>
            <p className="text-gray-600 mt-2">Explore moments captured from our events.</p>
          </div>
          <div className="border-t pt-12">
            <div className="columns-1 gap-5 sm:columns-2 sm:gap-8 md:columns-3 [&>img:not(:first-child)]:mt-8">
              {images.map((src, index) => (
                <div
                  key={index}
                  className="cursor-pointer mb-10 overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition duration-300"
                  onClick={() => setCurrentImage(src)}
                >
                  <img
                    src={src}
                    alt={`Image ${index + 1}`}
                    className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
          {currentImage && (
            <div
              className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 p-4 mt-12"
              onClick={() => setCurrentImage(null)}
            >
              <div
                className="max-w-2xl w-auto bg-white p-6 rounded-lg shadow-lg relative"
                onClick={(e) => e.stopPropagation()}
              >
                <div
                  className="absolute cursor-pointer top-4 right-4 text-gray-700 bg-gray-200 rounded-full p-1.5 w-8 h-8 flex items-center justify-center hover:bg-gray-300 focus:outline-none"
                  onClick={() => setCurrentImage(null)}
                >
                  ✕
                </div>
                <img src={currentImage} alt="Full Size" className="w-full max-h-[80vh] object-contain rounded-lg" />
              </div>
            </div>
          )}
        </div>
      </section>
      <Footer />

    </div>
  )
}

export default Gallery
