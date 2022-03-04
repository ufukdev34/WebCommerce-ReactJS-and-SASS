import React from 'react'
import {Routes as Switch,Route,Navigate} from 'react-router-dom'
import Category from './pages/category'
import Home from './pages/home'
import Product from './pages/product'
import Cart from './pages/cart'
export default function Routes() {
    return (
        <Switch>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/category/:categoryTitle" element={<Category/>}/>
            <Route exact path="/product/:productID" element={<Product/>}/>
            <Route exact path="/cart" element={<Cart/>}/>
            <Route exact path="*" element={<Navigate to="/"/>}/>
        </Switch>
    )
}