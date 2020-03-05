import React from 'react';
import { Redirect } from 'react-router-dom';

class Chekout extends React.Component {
    constructor(props) {
        super(props);


    }
    render() {

        return (
            <div className='checkout'>
                <img src="https://media.giphy.com/media/26gsvAm8UPaczzXz2/giphy.gif" />
               { setTimeout(() => {
                    redirect()
            }, 2000)}
            </div>
        );

    }
}

export default Chekout;

function redirect()
{
    window.location.href ="/Home";
}
