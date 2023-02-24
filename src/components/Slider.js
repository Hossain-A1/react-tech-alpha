import { useState } from "react";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
const slideData = [
  
  {
    id: 1,
    src: "https://images.pexels.com/photos/336232/pexels-photo-336232.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Drone ttr",
  },
  {
    id: 2,
    src: "https://images.pexels.com/photos/45889/camera-photo-camera-sony-alpha-7-sony-45889.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Dslr camera (CC0) ",
  },
  {
    id: 3,
    src: "https://images.pexels.com/photos/577769/pexels-photo-577769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "wearless HeadPhonse",
  },
  {
    id: 4,
    src: "https://images.pexels.com/photos/249535/pexels-photo-249535.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Apple laptop",
  },
  {
    id: 5,
    src: "https://images.pexels.com/photos/5202925/pexels-photo-5202925.jpeg?auto=compress&cs=tinysrgb&w=6002",
    alt: "Smart TV",
  },

];
const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide(
      currentSlide === 0 ? slideData.length - 1 : (prevSlide) => prevSlide - 1
    );
  };
  const nextSlide = () => {
    setCurrentSlide(
      currentSlide === slideData.length - 1 ? 0 : (prevSlide) => prevSlide + 1
    );
  };
  return (
    <div className="frame relative">
      <div
      className="slider"
      style={{ transform: `translateX(-${100 * currentSlide}vw)` }}
    >
      {slideData.map((img) => [
        <div
          className="slide"
          style={{ backgroundImage: `url(${img.src})` }}
          key={img.id}
        ></div>,
      ])}

    </div>
    <div className="btns absolute z=[1] text-gray-500 w-screen flex  justify-between px-16 items-center bottom-1/2 ">
        <button
          onClick={prevSlide}
          className="prev-btn h-9 w-11 bg-gray-50/60 backdrop-blur-xl text-2xl flex justify-center items-center hover:bg-gray-700 hover:text-gray-50 duration-100"
        >
          <span>
            <BiLeftArrow />
          </span>
        </button>
        <button
          onClick={nextSlide}
          className="next-btn h-9 w-11 bg-gray-50/60 backdrop-blur-xl text-2xl flex justify-center items-center  hover:bg-gray-700 hover:text-gray-50 duration-100"
        >
          <span>
            <BiRightArrow />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Slider;
