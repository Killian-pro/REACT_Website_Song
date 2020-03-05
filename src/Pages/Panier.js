import React from 'react';
import Menu from '../Menu';


class Panier extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className='container-panier'>
                <Menu />
                <div className='Title' >
                    Panier,
                </div>
                <div className='maindiv'>
                    <div className='first-div'>
                        <img src="https://i1.sndcdn.com/artworks-000658986685-115swi-t200x200.jpg" />
                        <div className='quantity'>X1</div>
                        <hr />
                        <div className='price'>9,99€</div>
                    </div>
                    <div className='second-div'>
                        <img src="https://i1.sndcdn.com/artworks-000666398938-ob0ez0-t200x200.jpg" />
                        <div className='quantity'>X1</div>
                        <hr />
                        <div className='price'>9,99€</div>
                    </div>
                    <div className='end-div'>
                        <input id="promo" placeholder='CODE PROMO'></input>
                        <input id="valider" type='submit' value="PAIEMENT" onClick={handleScrollToStats} />
                        <div className='totalprice'>Prix Total : 19,98€</div>
                    </div>
                    <div className="separate">
                        {/* <hr /> */}
                    </div>
                    <div className='Paiement'>
                        <input id="username" placeholder='NOM'></input>
                        <input id="usersurname" placeholder='PRENOM'></input>
                    </div>
                    <div className='card'>
                        <input id="carten" placeholder='NUMERO DE CARTE'></input>
                        <input id="carted" placeholder='DATE'></input>
                        <input id="cartev" placeholder='CVV'></input>
                        <a href='Checkout' >
                        <input id="valid" type='submit' value="Validation"/>
                        </a>
                    </div>
                </div>
            </div>
        );

    }
}

export default Panier;

function handleScrollToStats() {
    var elem = document.getElementById('valid');
    window.scrollTo({
        elem
    }, 5000);
}