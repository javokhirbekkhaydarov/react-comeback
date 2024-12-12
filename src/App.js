import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import MyApp from "./todos/TodosComponent";
import ChatComponent from "./components/chat/ChatComponent";
import "./styles/index.css";
import BookList from "./components/books/BookList";
import Capital from "./components/capital/theCapital";
import "./styles/app.scss";
import ProductDetails from "./components/shopping/ProductDetails";
import ShoppingCart from "./components/shopping/ShoppingCart";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
      <Router>
        <Routes>
          <Route
              path="/"
              element={isLoggedIn ? <ShoppingCart /> : <Navigate to="/auth/login" />}
          />
          <Route path="/auth/login"  element={<Login setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/auth/register" element={<Register />} />
          <Route
              path="/product/:id"
              element={isLoggedIn ? <ProductDetails /> : <Navigate to="/auth/login" />}
          />
          <Route
              path="/todos"
              element={isLoggedIn ? <MyApp /> : <Navigate to="/auth/login" />}
          />
          <Route
              path="/chat"
              element={isLoggedIn ? <ChatComponent /> : <Navigate to="/auth/login" />}
          />
          <Route
              path="/book"
              element={isLoggedIn ? <BookList /> : <Navigate to="/auth/login" />}
          />
          <Route
              path="/capital"
              element={isLoggedIn ? <Capital /> : <Navigate to="/auth/login" />}
          />
        </Routes>
      </Router>
  );
}

export default App;
