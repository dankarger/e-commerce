import React from "react";
import './ProductsDetail.css'
import {findProduct} from "../Api/Api";
import Button from "../Button/Button";

class ProductsDetail extends React.Component {
        state={product:[]}
    componentDidMount() {
        findProduct(this.props.id, this.props.type).then(
            res=>this.setState({product:res.data})
        )
    }


    render() {
            const{product}=this.state
        return(
            <div className='Product-detail'>
                <div className="ui card">
                    <div className="ui slide masked reveal image">
                        <img src={product.image} className="visible content" alt={product.product}/>
                            <img src={product.image} className="hidden content" alt={product.product}/>
                    </div>
                    <div className="content">
                        <div className="header">{product.product}</div>
                        <div className="meta">
                            <span className="date">{product.description}</span>
                           </div>
                    </div>
                    <div className="extra content">
                        <div>
                            <i className="users icon"></i>
                            {product.price}
                        </div>
                        <div>
                            <Button name='Add to Cart' callback={()=>this.props.callback(product)}/>
                        </div>
                    </div>
                </div>

                <div className="ui segment">
                    <img className={product.image} alt={product.product}/>
                        <p>Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia facete scriptorem,
                            est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix.
                            Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas
                            an. Mei ex natum rebum iisque.</p>
                        <img className="ui small right floated image" src={product.image} alt={product.product}/>
                            <p>Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot
                                wisi nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur
                                consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis
                                in.</p>
                            <p>Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei ut facer dolores
                                adolescens, no illum aperiri quo, usu odio brute at. Qui te porro electram, ea dico
                                facete utroque quo. Populo quodsi te eam, wisi everti eos ex, eum elitr altera utamur
                                at. Quodsi convenire mnesarchum eu per, quas minimum postulant per id.</p>
                </div>

                <div className="ui small images">
                    <img src={product.image} alt={product.product}/>
                        <img src={product.image} alt={product.product}/>
                            <img src={product.image} alt={product.product}/>
                                <img src={product.image} alt={product.product}/>
                </div>
            </div>
        )
    }
}

export default ProductsDetail