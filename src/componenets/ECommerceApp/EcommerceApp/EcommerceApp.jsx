import React from "react";
import './EcommercApp.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import NavBar from "../../NavBar/NavBar";
import HomePage from "../../../pages/homePage/HomePage";
import Products from "../../../pages/products/Products";

import ProductDetailWrapper from "../../ProductsDetail/ProductsDetailWrapper";
import ClothesPage from "../../../pages/ClothesPage/ClothesPage";


class EcommerceApp extends React.Component {

    addCart=()=>{
        console.log('cart')
    }


    render() {
        return(
            <div>
                <BrowserRouter >
                    <NavBar />
                    <Routes>
                        <Route path='/' exact element={<HomePage />} />
                        <Route path='/products' exact element={<Products />} />
                        <Route path='/products/:id' exact element={<ProductDetailWrapper callback={this.addCart} type='products'/>} />
                        <Route path='/clothes' exact element={<ClothesPage />} />
                        <Route path='/clothes/:id' exact element={<ProductDetailWrapper callback={this.addCart}  type='clothes'/>} />
                        {/*<Route path='/edit/:id' element={<EditPageWrapper />} />*/}
                        {/*<Route path='/create/:id' element={<EditPageWrapper />} />*/}
                    </Routes>
                </BrowserRouter>

            </div>
        )
    }
}
export default EcommerceApp