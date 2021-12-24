import React from "react";
import {useParams} from "react-router-dom";
import ProductsDetail from "./ProductsDetail";

export default function ProductDetailWrapper({callback,type}){
    const{id}=useParams();

    return (
        <div>

            <ProductsDetail id={id} callback={callback} type={type}/>
        </div>
    )
}