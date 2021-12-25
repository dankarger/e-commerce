import React from "react";
import './Cart.css'
import Button from "../Button/Button";



class Cart extends React.Component {

state={cart:[],cartTotal:11}


    componentDidMount() {
    this.setState({cart:this.props.cart},()=>console.log('cartd',this.state.cart))
        this.updateCartTotal()
    }

    updateCartTotal=()=>{
        let sum=0
        this.state.cart.forEach(item=>{
            sum+=1
        })
        this.setState({cartTotal:sum})
    }


    injectCartItems=()=>{

    return this.state.cart.map((item,index)=>{
        // sum+=item.price
        return (
            <div>

                <div className=" cart" key={item.uuid+index}>
                    <img className="ui avatar image" src={item.image} alt={item.product}/>
                    <div className="content cart">
                        <div className="header">{item.product}</div>
                        <div className="description">{item.description.substr(0,10)} <div><b>
                           $ {item.price}</b></div> just now.
                        </div>
                    </div>
                </div>
                <div>
                    <Button callback={()=>this.props.callback(item.id)} name='Remove'/>
                </div>
            <hr/>
            </div>
        )
    })
    }

    render() {
        return(
            <div className='Cart'>
                <h3 ><span> <i className="fas fa-shopping-cart"></i> </span> Cart</h3>

                <div className="Cart-items-div">
                    <div className="ui list">
                        {this.injectCartItems()}
                        <hr/>
                        <div>Total: $ {this.state.cartTotal}</div>
                    </div>

                </div>
            </div>
        )
    }
}
export default Cart