import React from "react";
import './NavBar.css'
import {Link} from "react-router-dom";
import Cart from "../Cart/Cart";
import Button from "../Button/Button";

class NavBar extends React.Component {


    render() {
        return(
            <div>
                <div id="navBar" className="ui top fixed menu ">
                    <div className="item">
                        {/*<img src={} alt={'ff'}/>*/}
                        <i className="fas fa-shipping-fast"></i>
                    </div>
                    <Link to='/' className="item">Home</Link>
                    <Link to='/products' className="item">Products</Link>
                    <Link to='/clothes' className="item">Clothes</Link>
                    {/*<Link to='/vehicles' className="item">Vehicles</Link>*/}
                    {/*<div> <Cart cart={this.props.cart}/>{this.props.cartNumber}</div>*/}
                    <div className="filler-div"> </div>
                    <Button callback={this.props.callback} name='Cart' className=' ds'/>
                    {/*<button  className='item' >cart</button>*/}
                    {/*<Link to='/cart' className="item">Cart</Link>*/}


                </div>
                {/*<div> <Cart /></div>*/}
                <div className="ui bottom fixed menu">
                    <div>Footer</div>
                    <div className="item">
                        {/*<img src="/images/logo.png"/>*/}
                    </div>
                  {/*<div> <Cart /></div>*/}
                </div>
                <p></p>
                <p></p>
            </div>
        )
    }
}
export default NavBar