import React from "react";
import './NavBar.css'
import {Link} from "react-router-dom";

class NavBar extends React.Component {


    render() {
        return(
            <div>
                <div className="ui top fixed menu">
                    <div className="item">
                        {/*<img src={} alt={'ff'}/>*/}
                        <i className="fas fa-shipping-fast"></i>
                    </div>
                    <Link to='/' className="item">Home</Link>
                    <Link to='/products' className="item">Products</Link>
                    {/*<Link to='/vehicles' className="item">Vehicles</Link>*/}
                </div>
                <div className="ui bottom fixed menu">
                    <div className="item">
                        {/*<img src="/images/logo.png"/>*/}
                    </div>
                    {/*<a className="item">Features</a>*/}
                    {/*<a className="item">Testimonials</a>*/}
                    {/*<a className="item">Sign-in</a>*/}
                </div>
                <p></p>
                <p></p>
            </div>
        )
    }
}
export default NavBar