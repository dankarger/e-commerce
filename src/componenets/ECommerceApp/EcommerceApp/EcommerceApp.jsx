import React from "react";
import './EcommercApp.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import NavBar from "../../NavBar/NavBar";
import HomePage from "../../../pages/homePage/HomePage";
import Products from "../../../pages/products/Products";

import ProductDetailWrapper from "../../ProductsDetail/ProductsDetailWrapper";


class EcommerceApp extends React.Component {

    render() {
        return(
            <div>
                <BrowserRouter >
                    <NavBar />
                    <Routes>
                        <Route path='/' exact element={<HomePage />} />
                        <Route path='/products' exact element={<Products />} />
                        <Route path='/products/:id' exact element={<ProductDetailWrapper/>} />
                        {/*<Route path='/edit/:id' element={<EditPageWrapper />} />*/}
                        {/*<Route path='/create/:id' element={<EditPageWrapper />} />*/}
                    </Routes>
                </BrowserRouter>

            </div>
        )
    }
}
export default EcommerceApp