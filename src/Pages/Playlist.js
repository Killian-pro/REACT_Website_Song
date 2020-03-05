import React from 'react';
import Menu from '../Menu';
import { IoIosPlay, IoIosCloseCircleOutline } from "react-icons/io";
import Compo from '../Music/Component'

class Playlist extends React.Component {
    constructor(props) {
        super(props);    
    }

    render() {
        return (
            <div className='container-playlist'>
                <Menu />
                <div className='Title' >
                    Bonjour, $Pseudo voici votre playlist
                </div>
                <div className='first-div'>
                    <img src="https://i1.sndcdn.com/artworks-000658986685-115swi-t200x200.jpg" />
                    <div className='play' ><a><IoIosPlay size="100px" color="white" /></a></div>
                    <div className='rectangle'>
                    </div>
                    <div className='delete' ><a><IoIosCloseCircleOutline size="100px" color="red" /></a></div>
                </div>
                <div className='second-div'>
                    <img src="https://i1.sndcdn.com/artworks-000666398938-ob0ez0-t200x200.jpg" />
                    <div className='play' ><a><IoIosPlay size="100px" color="white" /></a></div>
                    <div className='rectangle'></div>
                    <div className='delete' ><a><IoIosCloseCircleOutline size="100px" color="red" /></a></div>
                </div>
            </div>
        );

    }
}

export default Playlist;

