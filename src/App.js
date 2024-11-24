import MyApp from "./todos/TodosComponent";
import ChatComponent from "./components/chat/ChatComponent";
import "./styles/index.css";
import Home from "./views/Home";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BookList from "./components/books/BookList";
function App() {
  return (
    <Router>
      <Home />
      <Routes>
        <>
          {/*<Route path="/" element={<Home />} />*/}
          <Route path="/todos" element={<MyApp />} />
          <Route path="/chat" element={<ChatComponent />} />
          <Route path="/book" element={<BookList />} />
        </>
      </Routes>
    </Router>
  );
}

export default App;
