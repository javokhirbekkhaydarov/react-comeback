import furniture from "../../data/mebels";
import { useReducer } from "react";
const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const existingProductIndex = state.findIndex(
        (item) => item.id === action.payload.id,
      );
      if (existingProductIndex >= 0) {
        const updatedCart = [...state];
        updatedCart[existingProductIndex].quantity += action.payload.quantity;
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

  return (
    <div>
      <section className=" py-8 antialiased dark:bg-gray-900 md:py-16">
        <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
          <h2 className="text-xl font-semibold text-gray-900 text-white sm:text-2xl">
            Products
          </h2>
          <div className="mb-4 grid gap-4 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-4">
            {furniture.slice(2).map((item) => {
              return (
                <div
                  key={item.id}
                  className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800"
                >
                  <div className="h-56 w-full">
                    <a href="#">
                      <img
                        className="mx-auto w-[254px] h-full object-cover rounded-lg"
                        src={item.image}
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="pt-6">
                    <div className="mb-4 flex items-center justify-between gap-4">
                      <span className="me-2 rounded bg-primary-100 px-2.5 py-0.5 text-xs font-medium text-primary-800 dark:bg-primary-900 dark:text-primary-300">
                        {" "}
                        {item.name}{" "}
                      </span>

                      <div className="flex items-center justify-end gap-1">
                        <button
                          type="button"
                          data-tooltip-target="tooltip-quick-look"
                          className="rounded-lg p-2 text-gray-500  hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                        >
                          <span className="sr-only"> Quick look </span>
                          <svg
                            className="h-5 w-5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <path
                              stroke="white"
                              strokeWidth="2"
                              d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z"
                            ></path>
                            <path
                              stroke="white"
                              strokeWidth="2"
                              d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                            ></path>
                          </svg>
                        </button>
                        <div
                          id="tooltip-quick-look"
                          role="tooltip"
                          className="tooltip absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white shadow-sm transition-opacity duration-300 dark:bg-gray-700 opacity-0 invisible"
                          data-popper-placement="top"
                        >
                          Quick look
                          <div
                            className="tooltip-arrow"
                            data-popper-arrow=""
                          ></div>
                        </div>

                        <button
                          type="button"
                          data-tooltip-target="tooltip-add-to-favorites"
                          className="rounded-lg p-2 text-gray-500  hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                        >
                          <span className="sr-only"> Add to Favorites </span>
                          <svg
                            className="h-5 w-5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <path
                              stroke="white"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M12 6C6.5 1 1 8 5.8 13l6.2 7 6.2-7C23 8 17.5 1 12 6Z"
                            ></path>
                          </svg>
                        </button>
                        <div
                          id="tooltip-add-to-favorites"
                          role="tooltip"
                          className="tooltip absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white shadow-sm transition-opacity duration-300 dark:bg-gray-700 opacity-0 invisible"
                          data-popper-placement="top"
                        >
                          Add to favorites
                          <div
                            className="tooltip-arrow"
                            data-popper-arrow=""
                          ></div>
                        </div>
                      </div>
                    </div>

                    <a
                      href="#"
                      className="text-lg font-semibold leading-tight text-gray-900 hover:underline dark:text-white"
                    >
                      {item.description.slice(0, 90)}
                    </a>

                    <div className="mt-2 flex items-center gap-2">
                      <div className="flex items-center">
                        <svg
                          className="h-4 w-4 text-yellow-400"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z"></path>
                        </svg>

                        <svg
                          className="h-4 w-4 text-yellow-400"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z"></path>
                        </svg>

                        <svg
                          className="h-4 w-4 text-yellow-400"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z"></path>
                        </svg>

                        <svg
                          className="h-4 w-4 text-yellow-400"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z"></path>
                        </svg>

                        <svg
                          className="h-4 w-4 text-yellow-400"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z"></path>
                        </svg>
                      </div>

                      <p className="text-sm font-medium text-gray-900 dark:text-white">
                        5.0
                      </p>
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        (455)
                      </p>
                    </div>

                    <ul className="mt-2 flex items-center gap-4">
                      <li className="flex items-center gap-2">
                        <svg
                          className="h-4 w-4 text-gray-500 dark:text-gray-400"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M13 7h6l2 4m-8-4v8m0-8V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v9h2m8 0H9m4 0h2m4 0h2v-4m0 0h-5m3.5 5.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm-10 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
                          ></path>
                        </svg>
                        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                          Fast Delivery
                        </p>
                      </li>

                      <li className="flex items-center gap-2">
                        <svg
                          className="h-4 w-4 text-gray-500 dark:text-gray-400"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeWidth="2"
                            d="M8 7V6c0-.6.4-1 1-1h11c.6 0 1 .4 1 1v7c0 .6-.4 1-1 1h-1M3 18v-7c0-.6.4-1 1-1h11c.6 0 1 .4 1 1v7c0 .6-.4 1-1 1H4a1 1 0 0 1-1-1Zm8-3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
                          ></path>
                        </svg>
                        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                          Best Price
                        </p>
                      </li>
                    </ul>

                    <div className="mt-4 flex items-center justify-between gap-4">
                      <p className="text-2xl font-extrabold leading-tight text-gray-900 dark:text-white">
                        $ {formatNumber(item.price)}
                      </p>

                      <button
                        type="button"
                        onClick={() => addToCart(item)}
                        className="inline-flex items-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4  focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                      >
                        <svg
                          className="-ms-2 me-2 h-5 w-5"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6"
                          ></path>
                        </svg>
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <h2 className="text-xl font-semibold text-gray-900 text-white sm:text-2xl">
            Shopping Cart
          </h2>
          {cart.map((item, index) => {
            return (
              <div
                key={index}
                className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8"
              >
                <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
                  <div className="space-y-6">
                    <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-6">
                      <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
                        <a href="#" className="shrink-0 md:order-1">
                          <img
                            className="h-20 w-20"
                            src={item.image}
                            alt="imac image"
                          />
                        </a>

                        <label htmlFor="counter-input" className="sr-only">
                          Choose quantity:
                        </label>
                        <div className="flex items-center justify-between md:order-3 md:justify-end">
                          <div className="flex items-center">
                            <button
                              onClick={() =>
                                updateQuantity(item.id, item.quantity - 1)
                              }
                              disabled={item.quantity <= 1}
                              type="button"
                              id="decrement-button"
                              data-input-counter-decrement="counter-input"
                              className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                            >
                              -
                            </button>
                            <input
                              type="text"
                              id="counter-input"
                              className="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 dark:text-white"
                              placeholder=""
                              value={item.quantity}
                              readOnly={true}
                            />
                            <button
                              type="button"
                              id="increment-button"
                              onClick={() =>
                                updateQuantity(item.id, item.quantity + 1)
                              }
                              data-input-counter-increment="counter-input"
                              className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                            >
                              +
                            </button>
                          </div>
                          <div className="text-end md:order-4 md:w-32">
                            <p className="text-base font-bold text-gray-900 dark:text-white">

                              {formatNumber(item.price * item.quantity)}$
                            </p>
                          </div>
                        </div>

                        <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
                          <h5 className="font-uppercase">{item.company}</h5>
                          <a
                            href="#"
                            className="text-base font-medium text-gray-900 hover:underline dark:text-white"
                          >
                            {item.description.slice(1, 100)}
                          </a>

                          <div className="flex items-center gap-4">
                            <button
                              type="button"
                              className="inline-flex items-center text-sm text-white font-medium text-gray-500  hover:underline dark:text-gray-400 dark:hover:text-white"
                            >
                              <svg
                                className="me-1.5 h-5 w-5"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="none"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"
                                />
                              </svg>
                              Add to Favorites
                            </button>

                            <button
                              type="button"
                              onClick={() => removeFromCart(item.id)}
                              className="inline-flex text-white items-center text-sm font-medium text-red-600 hover:underline dark:text-red-500"
                            >
                              <svg
                                className="me-1.5 h-5 w-5"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="none"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M6 18 17.94 6M18 18 6.06 6"
                                />
                              </svg>
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
export default ShoppingCart;
