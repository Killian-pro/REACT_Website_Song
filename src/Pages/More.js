import React from 'react';
import Compo from '../Music/Container'


class More extends React.Component {
    constructor(props) {
        super(props);    
    }

    render() {
        return (
            <div className='container-playlist'>
               <Compo></Compo>
            
            </div>
        );

    }
}

export default More;

