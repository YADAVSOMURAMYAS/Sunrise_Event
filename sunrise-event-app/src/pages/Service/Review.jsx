import React, { useState } from 'react'

function Review() {
    const reviews = [

        {
            name: "Raj Mehta",
            role: "Groom",
            image: "https://randomuser.me/api/portraits/men/6.jpg",
            review:
                "The team at Sunrise Events transformed our wedding into a royal Indian affair. From the mandap to the reception decor, everything was breathtaking!",
        },
        {
            name: "Priya Sharma",
            role: "Bride",
            image: "https://randomuser.me/api/portraits/women/7.jpg",
            review:
                "I couldn't have asked for a better decor team. Sunrise Events beautifully captured the essence of a traditional Indian wedding with vibrant colors and intricate designs!",
        },
        {
            name: "Amit Verma",
            role: "Father of the Bride",
            image: "https://randomuser.me/api/portraits/men/8.jpg",
            review:
                "Sunrise Events took care of everything! The floral arrangements, the lights, and the seating were all perfect. It felt like a Bollywood wedding!",
        }
    ];


    return (
        <>
            <div className="max-w-6xl mx-auto mt-20">
                <h2 className="text-3xl font-bold text-center text-pink-600 mb-8">Client Reviews</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {reviews.map((review, index) => (
                        <div
                            key={index}
                            className="bg-gradient-to-r from-pink-500 to-orange-400 p-6 rounded-lg shadow-lg text-white">

                            <div className="text-yellow-300 flex gap-1 mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <svg
                                        key={i}
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="20"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                    >
                                        <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
                                    </svg>
                                ))}
                            </div>

                            <p className="mb-4 text-lg font-semibold">"{review.review}"</p>

                            <div className="flex items-center gap-4">
                                <img
                                    src={review.image}
                                    alt={review.name}
                                    className="w-12 h-12 rounded-full border-2 border-white shadow-md"/>
                                <div>
                                    <p className="text-xl font-bold">{review.name}</p>
                                    <p className="text-sm italic">{review.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Review