import React from 'react';
import { Link } from 'react-router-dom';
import logo from './Images/logo_kip_white.png';
import { IoMdCart } from "react-icons/io";

class Menu extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className='container-menu'>
                <div className="navbar">
                <img src={logo} alt="Logo" />
                    <Link to="/Home" id="Home">Home</Link>
                    <Link to="/Uploader" id="Uploader">Uploader</Link>
                    <Link to="/More" id=".">...</Link>
                    <input placeholder = "Recherchez des artistes , des groupes , des musiques"></input>
                    <div className='panier'>
                    <a href="/Panier"><IoMdCart size="40px"/></a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Menu;
