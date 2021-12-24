import React from "react";
import './Loader.css'

export default function Loader() {

    return(
        <div className="ui segment">
            <div className="ui active inverted dimmer">
                <div className="ui text loader">Loading</div>
            </div>
            <p></p>
        </div>
    )
}