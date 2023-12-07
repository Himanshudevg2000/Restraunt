import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { clearCart, removeItem } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log("cartItems: ", cartItems);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleRemoveItem = (item) => {
    dispatch(removeItem(item))
  }

  return (
    <div className=" text-center mx-40 my-8 p-4 bg-gray-200 ">
      <h1 className="text-2xl font-bold">Cart</h1>
        <button
          className="mx-16 text-white bg-black px-2 rounded-xl hover:shadow-lg"
          onClick={handleClearCart}
        >
          ClearCart
        </button>
          {cartItems.length === 0 && <h1>Your cart is empty. Add Items to order!</h1> }
      <div className="px-4 py-2 m-2 text-left">
        {cartItems.map((itemList) => (
          <div
            key={itemList?.card?.info?.id}
            className="mx-2 my-2 py-3 border-gray-600 border-b-2 text-left flex justify-between"
          >
            <div className=" w-10/12">
              <span className="font-bold text-l">
                {itemList?.card?.info?.name}
              </span>
              <br />
              <span className="text-m">
                ₹
                {(itemList?.card?.info?.price ||
                  itemList?.card?.info?.defaultPrice) / 100}
              </span>
              <p className="text-xs">{itemList?.card?.info?.description}</p>
            </div>
            <div className="w-2/12">
              <div className="absolute">
                <button
                  className="mx-16 text-white bg-black px-2 rounded-xl hover:shadow-lg"
                  onClick={() => handleAddItem(itemList)}
                >
                  Add+
                </button>
                <button
                  className="mx-16 text-white bg-black px-2 rounded-xl hover:shadow-lg"
                  onClick={() => handleRemoveItem(itemList)}
                >
                  Remove-
                </button>
              </div>

              <img
                className=" rounded-lg w-32 h-fit"
                alt="logo"
                src={`${CDN_URL}${itemList?.card?.info?.imageId}`}
              ></img>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
