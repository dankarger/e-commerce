import React from "react";
import './Cart.css'
import Button from "../Button/Button";



class Cart extends React.Component {

state={cart:[]}


    componentDidMount() {
    this.setState({cart:this.props.cart},()=>console.log('cartd',this.state.cart))
    }
    componentDidUpdate(prevProps, prevState, snapshot) {

    }
    injectCartItems=()=>{
    return this.state.cart.map((item,index)=>{
        return(
            <div>
                <div className=" cart" key={item.uuid+index}>
                    <img className="ui avatar image" src={item.image}/>
                    <div className="content cart">
                        <div className="header">{item.product}</div>
                        <div className="description">{item.description.substr(0,10)} <div><b>Arrested
                            Development</b></div> just now.
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
                        {/*<div className="item">*/}
                        {/*    <img className="ui avatar image" src="/images/avatar2/small/rachel.png"/>*/}
                        {/*        <div className="content">*/}
                        {/*            <div className="header">Rachel</div>*/}
                        {/*            <div className="description">Last seen watching <a><b>Arrested*/}
                        {/*                Development</b></a> just now.*/}
                        {/*            </div>*/}
                        {/*        </div>*/}
                        {/*</div>*/}
                    </div>

                </div>
            </div>
        )
    }
}
export default Cart