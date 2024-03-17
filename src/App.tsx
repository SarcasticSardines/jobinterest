import React, { useEffect } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePageComponent from './components/pages/HomePageComponent';
import NavbarComponent from './components/NavbarComponent'
import PageOneComponent from './components/pages/PageOneComponent';
import PageTwoComponent from './components/pages/PageTwoComponent';
import PageThreeComponent from './components/pages/PageThreeComponent';
import PageFourComponent from './components/pages/PageFourComponent';
import PageFiveComponent from './components/pages/PageFiveComponent';

function App() {
  return (
    <BrowserRouter>
    <NavbarComponent />
    <Routes>
      <Route path='/' element={<HomePageComponent />}/>
      <Route path='/one' element={<PageOneComponent />}/>
      <Route path='/two' element={<PageTwoComponent />}/>
      <Route path='/three' element={<PageThreeComponent />}/>
      <Route path='/four' element={<PageFourComponent />}/>
      <Route path='/five' element={<PageFiveComponent />}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
