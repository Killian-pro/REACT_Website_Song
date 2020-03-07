import React from 'react';
import '../mycss.css';
import logo from '../Images/logo_kip_white.png';
import logog from '../Images/glogo.JPG'
import logof from '../Images/flogo.JPG'

class Register extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className='container-register'>
                <img src={logo} alt="Logo" />

                <div className='maindiv'>
                    <a href="https://myaccount.google.com/?utm_source=sign_in_no_continue">
                        <img src={logog} alt="https://myaccount.google.com/?utm_source=sign_in_no_continue" />
                    </a>
                    <a href="https://fr-fr.facebook.com/">
                        <img src={logof} alt="https://fr-fr.facebook.com/" />
                    </a>
                </div>
                <hr />
                <div className='formulaire'>
                    <input className='text' placeholder="Pseudo" type="text" alt="Login" />
                    <input className='text' placeholder="Adresse mail" type="mail" alt="Login" />
                    <input className='text' placeholder="Mot de passe" type="Password" alt="Login" />
                    <input className='text'  placeholder="Mot de passe Confirmation" type="Password" alt="Login" />
                    <a href="/Home">
                        <input className='text2' type="submit" alt="Login" />
                    </a>
                </div>
            </div>
        );
    }
}

export default Register;
