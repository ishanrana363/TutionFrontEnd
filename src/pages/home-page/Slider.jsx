import { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const data = [
    { id: 1, title: 'Bangla Medium', img: 'https://res.cloudinary.com/dj2edy2rg/image/upload/v1739895357/image_18035_kzllvq.png' },
    { id: 2, title: 'Bangla Medium', img: 'https://res.cloudinary.com/dj2edy2rg/image/upload/v1739895357/image_18035_kzllvq.png' },
    { id: 3, title: 'Bangla Medium', img: 'https://res.cloudinary.com/dj2edy2rg/image/upload/v1739895357/image_18035_kzllvq.png' },
    { id: 4, title: 'Bangla Medium', img: 'https://res.cloudinary.com/dj2edy2rg/image/upload/v1739895357/image_18035_kzllvq.png' },
];

export default function Carousel() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? data.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev === data.length - 1 ? 0 : prev + 1));
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full py-6 flex flex-col items-center justify-center">
            <button onClick={prevSlide} className="absolute left-[10%] p-2 bg-white shadow-md rounded-full">
                <FaChevronLeft size={20} />
            </button>
            <div className="flex overflow-hidden w-[80%] justify-center">
                {data.map((item, index) => (
                    <div
                        key={item.id}
                        className={`min-w-[250px] transition-transform duration-500 ease-in-out transform ${index === currentIndex ? 'scale-100' : 'scale-90 opacity-50'
                            } border-2 border-blue-500 rounded-lg p-4 text-center mx-2`}
                    >
                        <img
                            src={item.img}
                            alt={item.title}
                            className="w-full h-48 object-cover rounded-t-lg"
                        />
                        <p className="mt-2 font-semibold">{item.title}</p>
                    </div>
                ))}
            </div>
            <button onClick={nextSlide} className="absolute right-[10%] p-2 bg-white shadow-md rounded-full">
                <FaChevronRight size={20} />
            </button>
            <div className="flex space-x-2 mt-4">
                {data.map((_, index) => (
                    <div
                        key={index}
                        className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-blue-500' : 'bg-gray-300'}`}
                    />
                ))}
            </div>
        </div>
    );
}
