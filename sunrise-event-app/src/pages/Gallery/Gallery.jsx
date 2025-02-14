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
    "https://s3-us-west-2.amazonaws.com/shaadiwishnewbucket/95b167a6-67eb-16dd-9716-4752d589d03f.jpg"
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
