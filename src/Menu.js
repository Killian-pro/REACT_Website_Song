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
                    <div class="artboard">
                        <div class="button">
                            <div class="links"><a class="fab" target="_blank" href="https://github.com/Killian-pro"></a><a class="fab" target="_blank" href="https://www.youtube.com/channel/UCRonSbl3Xb5awEZ4QU5y1HQ/?sub_confirmation=1%22"></a><a class="fab fa-2x" target="_blank" href="https://soundcloud.com/kip-100128735"></a></div>
                            <div class="overlay"><a >...</a></div>
                        </div>
                    </div>
                    <input placeholder="Recherchez des artistes , des groupes , des musiques"></input>
                    <div className='panier'>
                        <a href="/Panier"><IoMdCart size="40px" /></a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Menu;