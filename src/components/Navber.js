import { Link } from "react-router-dom";
import { BsCart } from "react-icons/bs";
import { GiWorriedEyes } from "react-icons/gi";

const Navber = () => {
  return (
    <nav className="navber bg-gray-900 text-gray-50 h-20 border-b-2 border-yellow-500 px-5 flex justify-between items-center">
      <div className="left flex ">
        <span className="logo text-3xl font-bold text-yellow-500">
          go
          <span className="text-rose-500 text-4xl">B</span>uy{" "}
        </span>
        <span className="text-center text-yellow-600 text-5xl ml-5 mt-1">
          <GiWorriedEyes />
        </span>
      </div>
      <div className="right flex gap-5 items-center mr-5">
        <Link to="/" className="bottom-border hover:text-yellow-500 duration-300">Home</Link>
        <Link to="/products"  className="bottom-border hover:text-yellow-500 
         duration-300">Products</Link>
        <Link to="/cart">
          
          <span className="cart-counter relative"></span>
            <BsCart />
          <span className="cart-icon absolute z-[1] top-3 right-7 text-rose-500 bg-yellow-300 h-5 w-5 text-center rounded-full text-sm font-bold">13</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navber;
