import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Services from './components/Services';
import Clints from './components/Clints';
import Projects from './components/Projects';
import Skills from './components/Skills';
// import { useState } from 'react';

function App() {

  return (
    <>
    <BrowserRouter>
    <Navbar brand='Anwar'/>
    <Routes>
    <Route element={<Home/>} path='/' />
    <Route element={<Services/>} path='/services'/>
    <Route element={<Clints/>} path='/clints'/>
    <Route element={<About/>} path='/about'/>
    <Route element={<Contact/>} path='/contact'/>
    <Route element={<Projects/>} path='/projects'/>
    <Route element={<Skills/>} path='/skills'/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
