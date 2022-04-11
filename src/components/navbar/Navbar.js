import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import './Navbar.style.css'


const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const close = () => setClick(false);
  return (
    <header>
        <div className={click ? "main-container" : ""}  onClick={()=>close()} />
        <nav className="navbar" onClick={e => e.stopPropagation()}>
            <div className="nav-container">
                <NavLink to="/" className="nav-logo">
                Payment processor
                <i className="fa fa-code"></i>
                </NavLink>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className="nav-item">
                        <NavLink
                        to="/"
                        className="nav-links"
                        onClick={click ? handleClick : null}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                        to="/invoice/form"
                        className="nav-links"
                        onClick={click ? handleClick : null}
                        >
                            Crear Factura
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                        to="/invoice/list"
                        className="nav-links"
                        onClick={click ? handleClick : null}
                        >
                            Consultar Facturas  
                        </NavLink>
                    </li>
                </ul>
                <div className="nav-icon" onClick={handleClick}>
                    <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
                </div>

            </div>

        </nav>
    </header>
  )
}

export default Navbar