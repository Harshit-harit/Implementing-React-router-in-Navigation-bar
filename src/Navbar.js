import React from "react"
import {Link} from "react-router-dom"

import './Navbar.css'; 
const Navbar=()=>
{
    return(
        <>
        <p>using Router</p>
        <ul>
        <li><Link to="/">About us</Link> </li>
        <li><Link to="/contact">Contact us</Link></li>
        <li><Link to="/No">No Page</Link> </li>

        </ul>
        
        <hr/>
         <p>Using HREF</p>
        <ul>
        <li><a href="/">About</a> </li>
        <li>
        <a href="/contact">Contact</a>
        </li>
        <li><a href="/no">Nothing</a> </li>

        </ul>
        ``
        
        </>
    )


}

export default Navbar