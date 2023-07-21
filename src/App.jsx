import React from "react";
import MainPage from "./components/MainPage";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductsDetail from './pages/ProductsDetail';
import ProductSearch from './components/ProductSearch';
import ErrorPage from "./pages/ErrorPage";

function App() {

  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/search' element={<ProductSearch/>}/>
        <Route path='/products/:id' element={<ProductsDetail/>}/>
        <Route path='*' element={<ErrorPage/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
