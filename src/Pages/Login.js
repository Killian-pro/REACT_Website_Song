import React from 'react';
import '../mycss.css';
import logo from '../Images/logo_TP_FINAL.png';
import Particles from 'react-particles-js';

class Login extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='container-login'>
                <div className='notemusique'>
                    <Particles
                        params={{
                            "particles": {
                                "number": {
                                    "value": 50,
                                    "density": {
                                        "enable": true,
                                        "value_area": 100
                                    }
                                },
                                "line_linked": {
                                    "enable": false
                                },
                                "move": {
                                    "random": false,
                                    "speed": 1,
                                    "direction": "right",
                                    "out_mode": "on"
                                },
                             
                                "shape": {
                                    "type": [
                                        "images"
                                    ],
                                    "images": [
                                        {
                                            "src": "./logo.png",
                                            "height": 25,
                                            "width": 33,
                                            // "style":"background:red"
                                            // "class":"notemusiques"
                                        },
                                        {
                                            "src": "./double.png",
                                            "height": 25,
                                            "width": 33,
                                            // "class":'notemusiques'
                                      
                                        },
                                        {
                                            "src": "./sol.png",
                                            "height": 35,
                                            "width": 33,
                                            // "class":'notemusiques'
                                            // "-webkit-transform:skew":"(40deg , 60deg)"
                                        }
                                    ]
                                },
                                "color": {
                                    "value": "#CCC"
                                },

                                "size": {
                                    "value": 20,
                                    "random": true,
                                    "anim": {
                                        "enable": true,
                                        "speed": 2,
                                        "size_min": 10,
                                        "sync": false
                                    }
                                }
                            },

                            "retina_detect": true
                        }
                        } />
                </div>
                <div className='maindiv'>

                    <img src={logo} alt="Logo" />
                    <input className='textdiv' type="text" placeholder="Pseudo" name="name" />
                    <input className='textdiv' type="text" placeholder="Mot de passe" name="name" />
                    <a href="/Home">
                        <input className='textdiv2' type="Submit" name="name" />
                    </a>
                    <div className='linkdiv'> <a href="/register">Inscription Gratuite</a></div>
                </div>
            </div>

        );
    }
}

export default Login;