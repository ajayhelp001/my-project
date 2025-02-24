import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Blogs from './Pages/Blogs';
import SinglePost from './Pages/SinglePost';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/blogs" element={<Blogs/>} />
        <Route path="/blogs/:slug" element={<SinglePost/>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
