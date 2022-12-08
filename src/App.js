import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./component/navbar";
import { AnimatePresence } from "framer-motion";
import Home from "./pags/home";
import First from "./pags/first";
import Second from "./pags/secund";
import Third from "./pags/third";
import About from "./pags/about";
import Contact from "./pags/contact";
import DrawerAppBar from "./component/nsvbarrr";

import './App.css';

function App() {
  const location = useLocation();
  return (
    <div id="welcom">
      
        <Navbar /> 
        <AnimatePresence exitBeforeEnter> 
          <Routes key={location.pathname} location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/first" element={<First />} />
            <Route path="/secund" element={<Second />} />
            <Route path="/third" element={<Third />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
   </AnimatePresence>
      
    </div>

  );
}

export default App;
