import { useNavigate } from "react-router-dom";

const Card = ({ product }) => {

  const navigate = useNavigate()
  const addToCartHandaler = (id)=>{
    navigate('/cart')
  }
  return (
    <div className="products flex flex-col gap-2 shadow-lg border bg-white rounded-md overflow-hidden hover:shadow-2xl duration-300 ">
      <div className="img">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="texts flex flex-col gap-2 px-3 pb-5">
        <span className="category-tag text-rose-500 text-xs uppercase">
          {product.category}
        </span>
        <h3 className="title text-gray-900 font-[600] text-lg tracking-wider capitalize font-sans h-[3.4rem]">
          {product.title}
        </h3>
        <p className="details text-sm text-gray-500 h-[6rem]">
          {product.description}
        </p>
        <div className="flex justify-between items-center">
          <span className="price text-red-500 text-xl font-bold">
            <span className="text-gray-700 uppercase font-normal text-sm">
              sr
            </span>
           {product.price}
          </span>
          <button onClick={()=> addToCartHandaler(product.id)} className="text-rose-900 bg-yellow-500 uppercase font-medium py-2 px-4 text-center rounded-md text-sm w-[65%] hover:bg-rose-500 hover:text-gray-900 duration-300">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
