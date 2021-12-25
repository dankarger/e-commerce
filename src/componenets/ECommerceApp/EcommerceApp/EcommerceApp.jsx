import React from "react";
import './EcommercApp.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import NavBar from "../../NavBar/NavBar";
import HomePage from "../../../pages/homePage/HomePage";
import Products from "../../../pages/products/Products";
import Cart from "../../Cart/Cart";
import ProductDetailWrapper from "../../ProductsDetail/ProductsDetailWrapper";
import ClothesPage from "../../../pages/ClothesPage/ClothesPage";


class EcommerceApp extends React.Component {
        state={cart:[],isCartWindow:false}
    addCart=(product)=>{
        console.log('cart')
        let cartItems = this.state.cart;
        cartItems.push(product)
        this.setState({cart:cartItems},()=>console.log(cartItems));
        this.updateLocalStorage()
    }
    removeCartItem=(id)=>{

        let newCart = this.state.cart.filter(item=>{
            return item.id!==id
        })
        this.setState({cart:newCart},()=>console.log(newCart))
        this.updateLocalStorage()
    }
    toggleCartWindow=()=>{
            this.setState((prev)=>{return {isCartWindow:!this.state.isCartWindow}},()=>console.log(this.state.isCartWindow))
    }
    componentDidMount() {
        const localCart =  localStorage.getItem('Cart') ;
        console.log(JSON.parse(localCart))

        if(localCart.length>0) {
            this.setState({cart: JSON.parse(localCart)})
        }
    }
    updateLocalStorage=()=>{
        localStorage.setItem('Cart', JSON.stringify(this.state.cart));
        console.log(localStorage)
    }
    render() {
        return(
            <div>
                <BrowserRouter >
                    <NavBar cart={this.state.cart}  callback={this.toggleCartWindow}/>
                    {this.state.isCartWindow &&  <Cart callback={this.removeCartItem} cart={this.state.cart} />}
                    <Routes>
                        <Route path='/' exact element={<HomePage />} />
                        <Route path='/products' exact element={<Products callback={this.addCart}/>} />
                        <Route path='/products/:id' exact element={<ProductDetailWrapper callback={this.addCart} type='products'/>} />
                        <Route path='/clothes' exact element={<ClothesPage callback={this.addCart} />} />
                        <Route path='/clothes/:id' exact element={<ProductDetailWrapper callback={this.addCart}  type='clothes'/>} />
                        <Route path='/cart' exact element={<Cart cart={this.state.cart}/>} />
                        {/*<Route path='/create/:id' element={<EditPageWrapper />} />*/}
                    </Routes>
                </BrowserRouter>

            </div>
        )
    }
}
export default EcommerceApp