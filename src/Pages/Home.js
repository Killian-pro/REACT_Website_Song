import React from 'react';
import Menu from '../Menu';
import { IoMdCart, IoIosAdd } from "react-icons/io";

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.play = this.play.bind(this);
        this.play2 = this.play2.bind(this);
        this.audio2 = new Audio('./girl.mp3')
        this.audio1 = new Audio('./Waves.mp3');
    }
    play = () => {

        let controlPanelObj = document.getElementById('control-panel'),
            infoBarObj = document.getElementById('info')
        Array.from(controlPanelObj.classList).find(function (element) {
            return element !== "active" ? controlPanelObj.classList.add('active') : controlPanelObj.classList.remove('active');
        });

        Array.from(infoBarObj.classList).find(function (element) {
            return element !== "active" ? infoBarObj.classList.add('active') : infoBarObj.classList.remove('active');
        });
        Array.from(controlPanelObj.classList).find((element) => {
            return element !== "active" ?  this.audio1.pause() :  this.audio1.play(); 
        });
        this.move();
    }
    play2 = () => {

        let controlPanelObj = document.getElementById('control-panel2'),
            infoBarObj = document.getElementById('info2')
        Array.from(controlPanelObj.classList).find((element) => {
            return element !== "active" ? controlPanelObj.classList.add('active') : controlPanelObj.classList.remove('active');
        });
        Array.from(infoBarObj.classList).find((element) => {
            return element !== "active" ? infoBarObj.classList.add('active') : infoBarObj.classList.remove('active');
        });
        Array.from(controlPanelObj.classList).find((element) => {
            return element !== "active" ?  this.audio2.pause() :  this.audio2.play(); 
        });
        this.move2();
    }

    move() {
        var elem = document.getElementById("myBar");
        var width = 1;
        var id = setInterval(frame, 1000);
        function frame() {
            if (width >= 100) {
                clearInterval(id);
            }
            else {
                width++;
                elem.style.width = width + '%';
            }
        }
    }
    move2() {
        var elem = document.getElementById("myBar2");
        var width = 1;
        var id = setInterval(frame, 1000);
        function frame() {
            if (width >= 100) {
                clearInterval(id);
            }
            else {
                width++;
                elem.style.width = width + '%';
            }
        }
    }
    render() {
        return (
            <div className='container-home'>
                <Menu />
                <div className='first-div'>
                    <div className='rectangle'>
                        <div class="player">
                            <div id="info" class="info">
                                <span class="artist">Kip & Beats</span>
                                <span class="name">Hawaii Waves</span>
                                <div class="progress-bar">
                                    <div id="myBar" class="bar"></div>
                                </div>
                            </div>
                            <div id="control-panel" class="control-panel">
                                <div class="album-art"></div>
                                <div class="controls">
                                    {/* <div class="prev"></div> */}
                                    <div onClick={this.play} id="play" class="play"></div>
                                    {/* <div class="next"></div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='char' ><a href="/Panier"><IoMdCart size="40px" color="white" /></a></div>
                    <div className='add' ><a href="/Playlist"><IoIosAdd size="40px" color="white" /></a></div>
                </div>
                <div className='second-div'>
                    <div className='rectangle'>
                        <div class="player">
                            <div id="info2" class="info">
                                <span class="artist">Kip & Beats</span>
                                <span class="name">Girl in Space</span>
                                <div class="progress-bar">
                                    <div id="myBar2" class="bar"></div>
                                </div>
                            </div>
                            <div id="control-panel2" class="control-panel">
                                <div class="album-art"></div>
                                <div class="controls">
                                    {/* <div class="prev"></div> */}
                                    <div onClick={this.play2} id="play2" class="play"></div>
                                    {/* <div class="next"></div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='char' ><a href="/Panier"><IoMdCart size="40px" color="white" /></a></div>
                    <div className='add' ><a href="/Playlist"><IoIosAdd size="40px" color="white" /></a></div>
                </div>
            </div>
        );

    }
}

export default Home;


