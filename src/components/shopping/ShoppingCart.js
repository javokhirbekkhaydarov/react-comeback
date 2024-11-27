import furniture from "../../data/mebels";
import React, { useReducer } from "react";
import Product from "./Product";
import CartProduct from "./CartProduct";
import toast, { Toaster } from "react-hot-toast";

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const existingProductIndex = state.findIndex(
        (item) => item.id === action.payload.id,
      );
      if (existingProductIndex >= 0) {
        const updatedCart = [...state];
        const existingProduct = updatedCart[existingProductIndex];
        updatedCart[existingProductIndex] = {
          ...existingProduct,
          quantity: existingProduct.quantity + 1,

        };

        return updatedCart;
      }
      return [...state, { ...action.payload }];
    case "REMOVE_FROM_CART":
      return state.filter((item) => item.id !== action.payload.id);
    case "UPDATE_QUANTITY":
      return state.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: action.payload.quantity }
          : item,
      );
    default:
      return state;
  }
};
function ShoppingCart() {
  const [cart, dispatch] = useReducer(cartReducer, []);
  const addToCart = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: { ...product, quantity: 1 } });
    notify("success");
  };
  const removeFromCart = (productId) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: { id: productId } });
  };
  const updateQuantity = (productId, quantity) => {
    dispatch({ type: "UPDATE_QUANTITY", payload: { id: productId, quantity } });
  };
  const formatNumber = (number) => {
    return number?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  };
  function notify(status) {
    if (status === "success") {
      toast.success("Product added to your cart", {
        position: "bottom-center",
      });
    } else if (status === "error") {
      toast.error("Something went wrong", {
        position: "bottom-center",
      });
    }
  }

  return (
    <div>

      <section className=" py-8 antialiased dark:bg-gray-900 md:py-16">
        <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
          <h2 className="text-xl font-semibold text-gray-900 text-white sm:text-2xl">
            Products
          </h2>
          <div className="mb-4 grid gap-4 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-4">
            {furniture.slice(2).map((item) => {
              return <Product item={item} addToCart={addToCart} formatNumber={formatNumber} />;
            })}
          </div>
          <h2 className="text-xl font-semibold text-gray-900 text-white sm:text-2xl">
            Shopping Cart
          </h2>
          {cart.map((item, index) => {
            return <CartProduct item={item} index={index} updateQuantity={updateQuantity} formatNumber={formatNumber} removeFromCart={removeFromCart}/>;
          })}
        </div>
      </section>
      <Toaster />
    </div>
  );
}
export default ShoppingCart;
