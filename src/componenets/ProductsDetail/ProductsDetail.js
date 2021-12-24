import React from "react";
import './ProductsDetail.css'


class ProductsDetail extends React.Component {

    render() {
        return(
            <div className='Product-detail'>
                profuc {this.props.id}
            </div>
        )
    }
}

export default ProductsDetail