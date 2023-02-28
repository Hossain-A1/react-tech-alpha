import { useState } from "react";

const productsData = [
  {
    id: 1,
    title: 'LG 65" Smart TV',
    description:
      "A smart TV is a digital television that is, essentially, an Internet-connected.",
    price: 5449,
    image:
      "https://www.jarir.com/cdn-cgi/image/fit=contain,width=700,height=auto,quality=100,metadata=none/https://ak-asset.jarir.com/akeneo-prod/asset/d/2/9/5/d2950e942c98be64c45905cd73aa32670ceb71a9_604185.jpg",
    reviews: 740,
    category: "TV",
  },
  {
    id: 2,
    title: "Android power bank",
    description:
      "A Power Bank is a portable charger designed to recharge your electronic devices when you're on the move.",
    price: 2449,
    image:
      "https://media.istockphoto.com/id/1164679045/photo/power-bank-with-cable-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=4DIQEpPISCej6B0s4LMC8Ws-ndd6FuWJ9V6UGLK5Kf0=",
    reviews: 940,
    category: "power bank",
  },
  {
    id: 3,
    title: "Smart Headphonse",
    description:
      "Headphones are a pair of small loudspeaker drivers worn on or around the head over a user",
    image:
      "https://media.istockphoto.com/id/1199428668/photo/wireless-headphones-isolated-on-white-background-side-view-of-silver-color-stereo-headset.jpg?s=612x612&w=0&k=20&c=XB58mTPLXS_kkK8qc4w3xPiBF8ewUULFtvx6DgxdDvc=",
    price: 549,
    reviews: 1740,
    category: "headphonse",
  },
];

const Cart = () => {
  const [count, setCount] = useState(1);
  const handelIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handelDecrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <div className="cart-section container mx-auto py-5">
      <h2 className="section-title uppercase text-xl font-bold mb-10 text-center">
        your cart is here
      </h2>
      <div className="cart-container uppercase font-medium">
        <div className="product-lists grid grid-cols-5 gap-10">
          <div className="col-product col-span-2">Product</div>
          <div className="col-unit-price">unit Price</div>
          <div className="col-qty">Quantity</div>
          <div className="col-total text-right">Total</div>
        </div>
        <div className="products flex flex-col gap-5 py-1">
          {productsData.map((product) => (
            <div className="product grid grid-cols-5 gap-10 border py-1">
              <div className="porduct-l flex items-center col-span-2 gap-5">
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-24 w-24 object-cover"
                />
                <div className="details flex flex-col gap-3 items-start">
                  <span>{product.title}</span>
                  <button className="capitalize text-yellow-600 hover:text-rose-600 duration-300">
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
                  onClick={handelDecrement}
                  className="bg-yellow-500 text-rose-600 h-8 w-8 border border-gray-500 active:bg-yellow-600"
                >
                  -
                </button>

                <span className="bg-yellow-500 text-rose-600 h-8 w-8 flex justify-center items-center border border-gray-500 active:bg-yellow-600">
                  {count}
                </span>

                <button
                  onClick={handelIncrement}
                  className="bg-yellow-500 text-rose-600 h-8 w-8 border border-gray-500 active:bg-yellow-600"
                >
                  +
                </button>
              </div>
              <div className="total-price py-5 text-right ">
                <span className=" uppercase font-normal text-[0.6rem] text-rose-600">
                  sr
                </span>
                {product.price}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="cart-down flex justify-between items-center py-5">
        <button className="clear-btn uppercase border border-gray-900 text-rose-600 py-2 px-4 hover:bg-gray-200 duration-300">
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
              500
            </span>
          </div>
          <p className="text-sm text-gray-500">
            Taxes and shipping coast are calculated at the checkOut
          </p>
          <button className="checkOut uppercase text-rose-600 bg-yellow-500 py-2 px-6 rounded w-full text-center hover:bg-yellow-700 duration-300 hover:text-gray-50 font-medium">
            checkOut
          </button>
          <button className="continue text-rose-700 uppercase text-sm font-medium">continue shipping</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
