import React from "react";
import './Products.css'
import {Link} from "react-router-dom";
import {getDataBase} from "../../componenets/Api/Api";
import Button from "../../componenets/Button/Button";

class Products extends React.Component {
    state={data:[]}


    componentDidMount() {
        console.log('dd')
        getDataBase('products')
            .then(res=>{this.setState({data:res.data})}).then(res=>()=>console.log(res))
        console.log(this.state.data)
    }

    injectProducts=()=>{
        return (
            this.state.data.map(product=>{
                return(
                    <div key={product.uuid}>
                        <Link to={`/products/${product.id}`}>
                        <div className="ui card card2">
                            <div className="image">
                                <img src={product.image} alt={"dsds"}/>
                            </div>
                            <div className="content">
                                <div className="header">{product.product}</div>
                                <div className="meta">
                                    <span className="date">{product.name}</span>
                                </div>
                                <div className="description">
                                    {product.description.substr(0,60)}
                                </div>
                            </div>
                            <div className="extra content">
                                <div>
                                    $
                                    {product.price}
                                </div>
                            </div>
                        </div>
                        </Link>
                        <div>
                            <Button name='Add to Cart' callback={this.props.callback}/>
                        </div>
                    </div>
                )
            })

        )
    }

    render(){
        return(
            <div className='product-content'>
                <h1>Products</h1>
                <div className="products-div">

                    {this.injectProducts()}
                </div>
            </div>
        )
    }
}
export default Products
