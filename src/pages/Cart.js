import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart, clearCart, decreaseCart, getSubTotal, removeFromCart } from "../feature/products/CartSlice";



const Cart = () => {
  const {cartItems: data, cartTotalAmount: subTotal} =  useSelector(state => state.cart);
  const dispatch = useDispatch()

  const handleRemove = (product) =>{
    dispatch(removeFromCart(product))
  }

  const handleDecrease = (product) =>{
    dispatch(decreaseCart(product))
  }
  const hnadleIncrease = (product) =>{
    dispatch(addToCart(product))
  }

  useEffect(()=>{
    dispatch(getSubTotal())
  },[data, dispatch])

  return (
    <div className="cart-section container mx-auto py-5">
      <h2 className="section-title uppercase text-xl font-bold mb-10 text-center">
       {data.length > 0? ` you've added ${data.length}  product${data.length > 1 ? "s" : ''}` : "Cart is empty"}
      </h2>
      {data.length === 0 && <Link to='/products' className="text-center text-yellow-600 rounded py-2 px-4 cursor-pointer block">Start shopping now</Link>}
    {
      data.length > 0  &&     <>
      <div className="cart-container uppercase font-medium">
          <div className="product-lists grid grid-cols-5 gap-10">
            <div className="col-product col-span-2">Product</div>
            <div className="col-unit-price">unit Price</div>
            <div className="col-qty">Quantity</div>
            <div className="col-total text-right">Total</div>
          </div>
          <div className="products flex flex-col gap-5 py-1">
            {data?.map((product) => (
              <div key={product.id} className="product grid grid-cols-5 gap-10 border py-1">
                <div className="porduct-l flex items-center col-span-2 gap-5">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="h-24 w-24 object-cover"
                  />
                  <div className="details flex flex-col gap-3 items-start">
                    <span>{product.title}</span>
                    <button onClick={()=>handleRemove(product)} className="capitalize text-yellow-600 hover:text-rose-600 duration-300">
                      Remove
                    </button>
                  </div>
                </div>
                <div className="unit-price py-5">
                  <span className="text-gray-700 uppercase font-normal text-[0.6rem]">
                    sr
                  </span>
                  {product.price}
                </div>
                <div className="conter py-5 flex">
                  <button
                        onClick={()=>handleDecrease(product)}
                    className="bg-yellow-500 text-rose-600 h-8 w-8 border border-gray-500 active:bg-yellow-600"
                  >
                    -
                  </button>
  
                  <span className="bg-yellow-500 text-rose-600 h-8 w-8 flex justify-center items-center border border-gray-500 active:bg-yellow-600">
                  {product.cartQuantity}
                  </span>
  
                  <button
                 onClick={()=>hnadleIncrease(product)}
                    className="bg-yellow-500 text-rose-600 h-8 w-8 border border-gray-500 active:bg-yellow-600"
                  >
                    +
                  </button>
                </div>
                <div className="total-price py-5 text-right ">
                  <span className=" uppercase font-normal text-[0.6rem] text-rose-600">
                    sr
                  </span>
                  {product.price * product.cartQuantity}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="cart-down flex justify-between items-center py-5">
          <button onClick={()=>dispatch(clearCart())} className="clear-btn uppercase border border-gray-900 text-rose-600 py-2 px-4 hover:bg-gray-200 duration-300">
            clear cart
          </button>
          <div className="flex flex-col items-start gap-3">
            <div className="top flex justify-between w-full">
              <span className="font-bold text-yellow-600 capitalize">
                subtotal
              </span>
              <span className="text-rose-600 font-bold">
                {" "}
                <span className="text-rose-600 uppercase font-normal text-[0.6rem]">
                  sr
                </span>
                {subTotal}
              </span>
            </div>
            <p className="text-sm text-gray-500">
              Taxes and shipping coast are calculated at the checkOut
            </p>
            <Link className="checkOut uppercase text-rose-600 bg-yellow-500 py-2 px-6 rounded w-full text-center hover:bg-yellow-700 duration-300 hover:text-gray-50 font-medium">
              checkOut
            </Link>
            <Link to='/products' className="continue text-rose-700 uppercase text-sm font-medium">
              continue shipping
            </Link>
          </div>
        </div>
      </>
    }
    </div>
  );
};

export default Cart;
