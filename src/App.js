import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.scss";
import Home from "./components/Home/Home";
import Footer from "./components/footer/Footer";
import Header from "./components/Header/Header";
import MovieDetail from "./components/MovieDetail/MovieDetail";
import PageNotFound from "./components/PageNotFound/PageNotFound";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/movie/:imbdID" element={<MovieDetail />} />
            <Route element={<PageNotFound />}> </Route>
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
