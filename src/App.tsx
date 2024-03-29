import React from "react";
import Home from "./components/Home";
import Movie from "./components/Movie";
import Header from "./components/Header";
import { GlobalStyle } from "./GlobalStyle";
import NotFound from "./components/NotFound";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App: React.FC = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:movieId" element={<Movie />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>

    <GlobalStyle />
  </Router>
);

export default App;
