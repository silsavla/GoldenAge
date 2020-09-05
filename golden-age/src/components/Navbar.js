import React from 'react';
import { Link } from 'react-router-dom'
 const Navbar = ()=>{
    return(
            <nav className="nav-wrapper">
                <div className="container">
                    <Link to="/PageOne" className="brand-logo" class = "left">Messenger</Link>

                    <ul className="right">
                        <li><Link to="/">startpg</Link></li>
                        <li><Link to="/PageTwo"><i className="material-icons">pg2</i></Link></li>
                    </ul>
                </div>
            </nav>


    )
}

export default Navbar;
