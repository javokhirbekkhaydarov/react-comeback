import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createStore } from "redux";
import allReducers from "./redux/reducers/index";
import { Provider } from "react-redux";
import { ThemeProvider } from "@material-tailwind/react";
const store = createStore(allReducers);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
     <Provider store={store}>
      <ThemeProvider >
      <App />
      </ThemeProvider>
     </Provider>
  </React.StrictMode>,
);
reportWebVitals();
