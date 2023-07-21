import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Provider } from 'react-redux';
import {store} from './redux/store'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './components/MainPage';
import ProductsDetail from './pages/ProductsDetail';
import ProductSearch from './components/ProductSearch';

ReactDOM.createRoot(document.getElementById('root')).render(
<Provider store={store}> 
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/search' element={<ProductSearch/>}/>
        <Route path='/products/:id' element={<ProductsDetail/>}/>
    </Routes>
    </BrowserRouter>

</Provider>

)
