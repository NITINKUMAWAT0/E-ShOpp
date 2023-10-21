import {BrowserRouter,Routes,Route} from "react-router-dom";
import React from 'react';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import NewsLetter from './components/Footer/Newsletter/Newsletter';
import Category from './components/Category/Category';
import Home from './components/Home/Home';
import SingleProduct from './components/SingleProduct/SingleProduct';
import Newsletter from "./components/Footer/Newsletter/Newsletter";
import Context from './utils/context';
import AppContext from "./utils/context";

const App = () => {
  return (
    <BrowserRouter>
    <AppContext>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/category" element={<Category/>}/>
      <Route path="/product" element={<SingleProduct/>}/>
    </Routes>
    <Newsletter/>
    <Footer/>
    </AppContext>
    </BrowserRouter>
  )
}

export default App