import MyApp from "./todos/TodosComponent";
import ChatComponent from "./components/chat/ChatComponent";
import "./styles/index.css";
import Home from "./views/Home";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BookList from "./components/books/BookList";
import Capital from "./components/capital/theCapital";
import SpotifyHome from "./views/SpotifyHome";
import './styles/app.scss'
function App() {
  return (
    <Router>
     <SpotifyHome />
      <Routes>
        <>
          {/*<Route path="/" element={<Home />} />*/}
          <Route path="/todos" element={<MyApp />} />
          <Route path="/chat" element={<ChatComponent />} />
          <Route path="/book" element={<BookList />} />
            <Route path="/capital" element={<Capital />} />

        </>
      </Routes>
    </Router>
  );
}

export default App;
