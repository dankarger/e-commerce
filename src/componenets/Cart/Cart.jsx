import React from "react";
import './Cart.css'



class Cart extends React.Component {

state={cart:[]}


    componentDidMount() {
    this.setState({cart:this.props.cart},()=>console.log('cartd',this.state.cart))
    }
    componentDidUpdate(prevProps, prevState, snapshot) {

    }


    render() {
        return(
            <div>

                <i className="fas fa-shopping-cart"></i>
                cart {this.state.cart}
            </div>
        )
    }
}
export default Cart