import React from 'react';
import { Link } from 'react-router-dom'
 const Navbar = ()=>{
    return(
            <nav className="nav-wrapper">
                <div className="container">
                    <Link to="/Messenger" className="brand-logo" class = "left"></Link>

                    <ul className="right">
                        <li><Link to="/"></Link></li>
                        <li><Link to="/PageTwo"><i className="material-icons"> </i></Link></li>
                    </ul>
                </div>
            </nav>


    )
}

export default Navbar;
