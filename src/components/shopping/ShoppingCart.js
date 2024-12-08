import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart, updateQuantity } from "../../redux/cartSlice";
import furniture from "../../data/mebels";
import Product from "./Product";
import CartProduct from "./CartProduct";
import toast, { Toaster } from "react-hot-toast";

function ShoppingCart() {
  const cart = useSelector((state) => state.cart); // Get cart state from Redux
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    notify("success");
  };

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart({ id: productId }));
  };

  const handleUpdateQuantity = (productId, quantity) => {
    dispatch(updateQuantity({ id: productId, quantity }));
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
        <section className="py-8 antialiased dark:bg-gray-900 md:py-16">
          <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
            <h2 className="text-xl font-semibold text-gray-900 text-white sm:text-2xl">
              Products
            </h2>
            <div className="mb-4 grid gap-4 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-4">
              {furniture.slice(2).map((item) => (
                  <Product
                      item={item}
                      key={item.id}
                      addToCart={handleAddToCart}
                      formatNumber={formatNumber}
                  />
              ))}
            </div>
            <h2 className="text-xl font-semibold text-gray-900 text-white sm:text-2xl">
              Shopping Cart
            </h2>
            {cart.map((item, index) => (
                <CartProduct
                    key={index}
                    item={item}
                    index={index}
                    updateQuantity={handleUpdateQuantity}
                    formatNumber={formatNumber}
                    removeFromCart={handleRemoveFromCart}
                />
            ))}
          </div>
        </section>
        <Toaster />
      </div>
  );
}

export default ShoppingCart;
