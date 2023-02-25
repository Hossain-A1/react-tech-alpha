import { Link } from "react-router-dom";

const Slide = ({img}) => {
  return (
    <div
    className="slide flex flex-col gap-5 justify-center items-center"
    style={{ backgroundImage: `url(${img.src})` }}
   
  > 
    <h1 className="text-6xl text-yellow-700 uppercase mt-10 text-center w-[80vw]">{img.headline} </h1>
    <p className="text-yellow-400 mb-10 w-[50vw]"> {img.description} </p>
    <Link to={`/products/${img.category}`} className="  slide-btn bg-rose-600 text-yellow-500 my-5 py-1 px-4 rounded font-medium uppercase border border-yellow-600 hover:bg-rose-600 hover:text-gray-50 duration-300 h-8 w-36"><span className=" absolute z-[2] top-[50%] left-[50%] text-center -translate-x-1/2 -translate-y-1/2 w-full">{img.cta}</span></Link>
  </div>
  )
}

export default Slide