import React from 'react';
import Menu from '../Menu';
import { IoMdDownload } from "react-icons/io";
import Files from 'react-files'

class Uploader extends React.Component {
    constructor(props) {
        super(props);


    }
    onFilesChange = function (files) {
        check()
    }

    onFilesError = function (error, file) {
        console.log('error code ' + error.code + ': ' + error.message)
    }

    render() {

        return (
            <div className='container-uploader'>
                <Menu />
                <div className='logo'>
                    <Files
                        accepts={['audio/*']}
                        multiple
                        maxFiles={3}
                        maxFileSize={10000000}
                        minFileSize={0}
                        clickable
                        onChange={this.onFilesChange}
                    >
                        <IoMdDownload size="100px" color="white" />
                    </Files>
                </div>
                <div id='charge'>
                    <img src="https://media.giphy.com/media/azrUC2S0ndgSA/giphy.gif" />
                </div>
                <div className='done' id='done'>
                    <h1>Le fichier a été téléchargé</h1>
                </div>

            </div>
        );

    }
}

export default Uploader;


function check() {
    var elem = document.getElementById('charge');
    window.scrollTo({
        elem
    }, 1000);
    console.log('ok')
    setTimeout(() => {
        done();
    }, 4000);
}

function done() {
    var elem2 = document.getElementById('done');
    window.scrollTo({
        elem2
    }, 5000);
   setTimeout(() => {
     window.location.href ="/Home";
}, 2000)
}