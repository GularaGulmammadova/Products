// eslint-disable-next-line no-unused-vars
import React from 'react'
import Footer from './Components/Layout/Footer/Footer';
import Navbar from './Components/Layout/Navbar/Navbar';
import { Route, Routes } from 'react-router';
import Home from './Components/pages/Home/Home';
import Reviews from './Components/pages/Reviews/Reviews';
import Sort from './Components/pages/Sort/Sort';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/reviews" element={<Reviews/>}/>
        <Route path="/sort" element={<Sort/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App;