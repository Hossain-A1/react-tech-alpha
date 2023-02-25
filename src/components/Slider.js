import { useState } from "react";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import Slide from "./Slide";
const slideData = [
  {
    id: 1,
    src: "https://images.pexels.com/photos/336232/pexels-photo-336232.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    headline: "Diving drone flying and swimming",
    description:
      "Drone most commonly refers to: Drone (bee), a male bee, from an unfertilized egg. Unmanned aerial vehicle or aerial drone. Unmanned       underwater vehicle or underwater drone..",
    cta: "BeeDrone",
    category: 'drone'
  },
  {
    id: 2,
    src: "https://images.pexels.com/photos/45889/camera-photo-camera-sony-alpha-7-sony-45889.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    headline: "digital single-lens reflex3",
    description:
      "DSLR is a term that’s become synonymous with digital cameras, but a digital single-lens reflex camera (notable for allowing interchangeable lenses on the same camera body) is just one type of digital camera...",
    cta: "Canon EOS 90D.",
    category: 'dslr'
  },
  {
    id: 3,
    src: "https://images.pexels.com/photos/577769/pexels-photo-577769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    headline: "The First Wireless Headphones",
    description:
      "Headphones are a pair of padded speakers which you wear over your ears in order to listen to a radio or recorded music, or for using a phone without other people hearing it.",
    cta: " headphones ",
    category: 'headphone'
  },
  {
    id: 4,
    src: "https://images.pexels.com/photos/249535/pexels-photo-249535.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    headline: "Apple macBook pro 14-inc",
    description:
      "A laptop is a personal computer that can be easily moved and used in a variety of locations. Most laptops are designed to have all of the functionality of a desktop computer, which means they can generally run the same software and open the same types of files.",
    cta: "MacBook Air",
    category: 'laptop'
  },
  {
    id: 5,
    src: "https://images.pexels.com/photos/5202925/pexels-photo-5202925.jpeg?auto=compress&cs=tinysrgb&w=6002",
    headline: "Smart TVs are very much like smartphones",
    description:
      "The most significant advantage of a smart TV is the endless hours of entertainment, courtesy of all those streaming apps.",
    cta: "smart tv",
    category: 'tv'
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
        {slideData.map((img) => [<Slide img={img} key={img.id} />])}
      </div>
      <div className="btns absolute z=[1] text-gray-500 w-screen flex  justify-between px-16 items-center bottom-1/2 ">
        <button
          onClick={prevSlide}
          className="prev-btn h-8 w-12 text-gray-50 bg-gray-900 border border-rose-500/70  backdrop-blur-xl text-xl flex justify-center items-center hover:bg-gray-50 hover:text-gray-900 hover:border-gray-900 duration-200"
        >
          <span>
            <BiLeftArrow />
          </span>
        </button>
        <button
          onClick={nextSlide}
          className="next-btn h-8 w-12 text-gray-50 bg-gray-900 border-rose-500/70 border backdrop-blur-xl text-xl flex justify-center items-center  hover:bg-gray-50 hover:text-gray-900 hover:border-gray-900 duration-200"
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
