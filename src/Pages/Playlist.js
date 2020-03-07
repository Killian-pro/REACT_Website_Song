import React from 'react';
import Menu from '../Menu';
import { IoIosPlay, IoIosPause, IoIosCloseCircleOutline } from "react-icons/io";


class Playlist extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            play: false,
            pause: true,
            
        }
        this.audio = new Audio('./girl.mp3')
        this.audio2 = new Audio('./Waves.mp3');
    }

    invisibleplay = () => {
        var actu = 1;
        var element = document.getElementById("fake1");
        var element2 = document.getElementById("play1");
        var element3 = document.getElementById("pause1");
        if (actu == 1) {
            element.style.visibility = "visible";
            element2.style.visibility = "hidden";
            element3.style.visibility = "visible";
            this.setState({ play: true, pause: false })
            this.audio.play();

        }
    }

    invisiblepause = () => {
        var actu = 1;
        var element = document.getElementById("fake1");
        var element2 = document.getElementById("play1");
        var element3 = document.getElementById("pause1");
        if (actu == 1) {
            element.style.visibility = "hidden";
            element2.style.visibility = "visible";
            element3.style.visibility = "hidden";
            this.setState({ play: false, pause: true })
            this.audio.pause();

        }
    }

    invisibleplay2 = () => {
        var actu = 1;
        var element = document.getElementById("fake2");
        var element2 = document.getElementById("play2");
        var element3 = document.getElementById("pause2");
        if (actu == 1) {
            element.style.visibility = "visible";
            element2.style.visibility = "hidden";
            element3.style.visibility = "visible";
            this.setState({ play: true, pause: false })
            this.audio2.play();

        }
    }

    invisiblepause2 = () => {
        var actu = 1;
        var element = document.getElementById("fake2");
        var element2 = document.getElementById("play2");
        var element3 = document.getElementById("pause2");
        if (actu == 1) {
            element.style.visibility = "hidden";
            element2.style.visibility = "visible";
            element3.style.visibility = "hidden";
            this.setState({ play: false, pause: true })
            this.audio2.pause();
        }
    }
    componentDidMount() {
        var element3 = document.getElementById("pause1");
        element3.style.visibility = "hidden";
        var element6 = document.getElementById("pause2");
        element6.style.visibility = "hidden";

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
                    <div id="play1" className='play' ><a onClick={this.invisibleplay} ><IoIosPlay size="100px" color="white" /></a></div>
                    <div id="pause1" className='play' ><a onClick={this.invisiblepause} ><IoIosPause size="100px" color="white" /></a></div>
                    <div className='rectangle'>
                        <div id='fake1' class='fakebar'>
                            <div class='bar'></div>
                            <div class='bar'></div>
                            <div class='bar'></div>
                            <div class='bar'></div>
                            <div class='bar'></div>
                            <div class='bar'></div>
                            <div class='bar'></div>
                            <div class='bar'></div>
                            <div class='bar'></div>
                            <div class='bar'></div>
                            <div class='bar'></div>
                            <div class='bar'></div>
                            <div class='bar'></div>
                            <div class='bar'></div>
                            <div class='bar'></div>
                            <div class='bar'></div>
                            <div class='bar'></div>
                            <div class='bar'></div>
                            <div class='bar'></div>
                            <div class='bar'></div>
                        </div>

                    </div>
                    <div className='delete' ><a><IoIosCloseCircleOutline size="100px" color="red" /></a></div>
                </div>
                <div className='second-div'>
                    <img src="https://i1.sndcdn.com/artworks-000666398938-ob0ez0-t200x200.jpg" />
                    <div id="play2" className='play' ><a onClick={this.invisibleplay2} ><IoIosPlay size="100px" color="white" /></a></div>
                    <div id="pause2" className='play' ><a onClick={this.invisiblepause2} ><IoIosPause size="100px" color="white" /></a></div>
                    <div className='rectangle'>
                        <div id='fake2' class='fakebar'>
                            <div class='bar'></div>
                            <div class='bar'></div>
                            <div class='bar'></div>
                            <div class='bar'></div>
                            <div class='bar'></div>
                            <div class='bar'></div>
                            <div class='bar'></div>
                            <div class='bar'></div>
                            <div class='bar'></div>
                            <div class='bar'></div>
                            <div class='bar'></div>
                            <div class='bar'></div>
                            <div class='bar'></div>
                            <div class='bar'></div>
                            <div class='bar'></div>
                            <div class='bar'></div>
                            <div class='bar'></div>
                            <div class='bar'></div>
                            <div class='bar'></div>
                            <div class='bar'></div>
                        </div>
                    </div>
                    <div className='delete' ><a><IoIosCloseCircleOutline size="100px" color="red" /></a></div>
                </div>
            </div>
        );

    }
}

export default Playlist;
