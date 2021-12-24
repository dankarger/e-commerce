import React from "react";
import {useParams} from "react-router-dom";
import ProductsDetail from "./ProductsDetail";

export default function ProductDetailWrapper(){
    const{id}=useParams();

    return (
        <div>

            <ProductsDetail id={id} />
        </div>
    )
}