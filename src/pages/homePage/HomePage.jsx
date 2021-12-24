import React from "react";
import './HomePage.css'
import {Link} from "react-router-dom";

class HomePage extends React.Component {

render(){
    return(
        <div>
         <div className="category-div">
             homePage
             <div>
                 <Link to='/products'>
                     <div>Products</div>
                 </Link>
             </div>

             <div>
                 <Link to='/clothes'>
                     <div>Clothes</div>
                 </Link>
             </div>
         </div>
        </div>
    )
}
}
export default HomePage
