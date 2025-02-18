import React, { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const testimonials = [
    { name: 'Likhon Ahmed', college: 'Dhaka College', review: 'TuitionBridge made finding a tutor easy...', image: 'https://res.cloudinary.com/dj2edy2rg/image/upload/v1739898898/Profil_pict_1_won7s5.png' },
    { name: 'Likhon Ahmed', college: 'Dhaka College', review: 'TuitionBridge made finding a tutor easy...', image: 'https://res.cloudinary.com/dj2edy2rg/image/upload/v1739898898/Profil_pict_1_won7s5.png' },
    { name: 'Rayhan', college: 'Dhaka College', review: 'TuitionBridge made finding a tutor easy...', image: 'https://res.cloudinary.com/dj2edy2rg/image/upload/v1739898898/Profil_pict_1_won7s5.png' },
    { name: 'Biplob', college: 'Dhaka College', review: 'TuitionBridge made finding a tutor easy...', image: 'https://res.cloudinary.com/dj2edy2rg/image/upload/v1739898898/Profil_pict_1_won7s5.png' },
    { name: 'Rahadi', college: 'Dhaka College', review: 'TuitionBridge made finding a tutor easy...', image: 'https://res.cloudinary.com/dj2edy2rg/image/upload/v1739898898/Profil_pict_1_won7s5.png' },
    { name: 'Robiul', college: 'Dhaka College', review: 'TuitionBridge made finding a tutor easy...', image: 'https://res.cloudinary.com/dj2edy2rg/image/upload/v1739898898/Profil_pict_1_won7s5.png' },
    { name: 'Jakaria', college: 'Dhaka College', review: 'TuitionBridge made finding a tutor easy...', image: 'https://res.cloudinary.com/dj2edy2rg/image/upload/v1739898898/Profil_pict_1_won7s5.png' },
    { name: 'Lian', college: 'Dhaka College', review: 'TuitionBridge made finding a tutor easy...', image: 'https://res.cloudinary.com/dj2edy2rg/image/upload/v1739898898/Profil_pict_1_won7s5.png' },
    { name: 'Rumon', college: 'Dhaka College', review: 'TuitionBridge made finding a tutor easy...', image: 'https://res.cloudinary.com/dj2edy2rg/image/upload/v1739898898/Profil_pict_1_won7s5.png' },
    { name: 'Ashik', college: 'Dhaka College', review: 'TuitionBridge made finding a tutor easy...', image: 'https://res.cloudinary.com/dj2edy2rg/image/upload/v1739898898/Profil_pict_1_won7s5.png' },
    { name: 'Mehedi', college: 'Dhaka College', review: 'TuitionBridge made finding a tutor easy...', image: 'https://res.cloudinary.com/dj2edy2rg/image/upload/v1739898898/Profil_pict_1_won7s5.png' },
    { name: 'Munna', college: 'Dhaka College', review: 'TuitionBridge made finding a tutor easy...', image: 'https://res.cloudinary.com/dj2edy2rg/image/upload/v1739898898/Profil_pict_1_won7s5.png' },
    { name: 'Kayume', college: 'Dhaka College', review: 'TuitionBridge made finding a tutor easy...', image: 'https://res.cloudinary.com/dj2edy2rg/image/upload/v1739898898/Profil_pict_1_won7s5.png' },
    { name: 'Ishan Rana', college: 'Dhaka College', review: 'TuitionBridge made finding a tutor easy...', image: 'https://res.cloudinary.com/dj2edy2rg/image/upload/v1739898898/Profil_pict_1_won7s5.png' },
];;

const TestimonialCarousel = () => {
    const [current, setCurrent] = useState(0);
    const length = testimonials.length;
    const itemsPerPage = 4;

    const nextSlide = () => setCurrent((current + itemsPerPage) % length);
    const prevSlide = () => setCurrent((current - itemsPerPage + length) % length);

    useEffect(() => {
        const interval = setInterval(nextSlide, 3000);
        return () => clearInterval(interval);
    }, [current]);

    const visibleTestimonials = Array.from({ length: itemsPerPage }, (_, i) => testimonials[(current + i) % length]);

    return (
        <>
            <div className='bg-[#64A8E8] h-64 text-center my-10 py-8'>
                <h2 className="text-4xl md:text-3xl font-bold text-white mt-2">What Our Students Are Saying</h2>
                <div className='border mt-7 mb-8 max-w-[60%] mx-auto border-white border-dotted'></div>
            </div>
            <div className='w-[90%] bg-white py-9 shadow rounded-2xl mx-auto -mt-40'>
                <div className="flex justify-center items-center space-x-4">
                    <button className="p-2 bg-white rounded-full shadow" onClick={prevSlide}><FaArrowLeft /></button>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        {visibleTestimonials.map((item, index) => (
                            <div key={index} className="w-64 bg-gradient-to-b from-blue-500 to-blue-300 rounded-2xl shadow-xl p-6 text-center transition-transform transform hover:scale-105">
                                <img src={item.image} alt={item.name} className="w-20 h-20 mx-auto rounded-full mb-4 border-4 border-white" />
                                <h3 className="text-xl font-semibold text-white mb-2">{item.name}</h3>
                                <p className="text-sm text-white mb-4">{item.college}</p>
                                <p className="text-white text-md">{item.review}</p>
                            </div>
                        ))}
                    </div>
                    <button className="p-2 bg-white rounded-full shadow" onClick={nextSlide}><FaArrowRight /></button>
                </div>
                <div className="flex justify-center mt-4 space-x-2">
                    {Array.from({ length: Math.ceil(length / itemsPerPage) }, (_, index) => (
                        <div key={index} className={`h-2 w-2 rounded-full ${index === Math.floor(current / itemsPerPage) ? 'bg-white' : 'bg-gray-400'}`}></div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default TestimonialCarousel;