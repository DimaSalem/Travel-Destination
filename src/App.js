import { Routes, Route } from 'react-router-dom';
import Header from './components/header/Header.js';
import Home from './components/home/Home.js';
import Footer from './components/footer/Footer.js';
import TourDetails from "./components/TourDetails/TourDetails.js";

import React from 'react';
import "./App.css";

function App() {
  return (<>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/city/:id" element={<TourDetails />} />
    </Routes>
    <Footer />
  </>);
}

export default App;
