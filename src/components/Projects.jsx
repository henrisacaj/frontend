import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

const Projects = () => {
  const slides = [
    {
      url: '/assets/oberwaldschule2.jpg',
      caption: 'Oberwaldschule Grebenhain'
    },
    {
      url: '/assets/oberwaldschule3.jpg',
      caption: 'Oberwaldschule Grebenhain'
    },
    {
      url: '/assets/IMG-20230513-WA0005.jpg',
      caption: 'Siemens'
    },

    {
      url: '/assets/IMG-20230513-WA0007.jpg',
      caption: 'Siemens'
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className='max-w-[1400px] h-[1000px] w-full m-auto py-16 px-4 relative group mb-20'>
        <div id="projects" className="div text-center mb-10">
            <span className="bg-neutral-900 text-orange-500 rounded-full h-6 text-lg font-medium px-2 py-1 uppercase">
                Unsere Projekte
            </span>
        </div>
        
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className='w-full h-full rounded-2xl bg-center bg-cover duration-500 relative flex items-end justify-center'
      >
        <div className='absolute text-center bg-black/70 text-white p-2 rounded'>
          {slides[currentIndex].caption}
        </div>
      </div>
      {/* Left Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className='flex top-4 justify-center py-2'>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className='text-2xl cursor-pointer'
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;