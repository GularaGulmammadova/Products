// eslint-disable-next-line no-unused-vars
import React from 'react'
import Footer from './Components/Layout/Footer/Footer';
import Navbar from './Components/Layout/Navbar/Navbar';
import { Route, Routes } from 'react-router';
import Home from './Components/pages/Home/Home';
import Discount from './Components/pages/Sort/Sort';
import Reviews from './Components/pages/Reviews/Reviews';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/reviews" element={<Reviews/>}/>
        <Route path="/discount" element={<Discount/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App;