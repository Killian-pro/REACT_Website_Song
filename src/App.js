import React from 'react';
import './App.css';
import Home from './Pages/Home'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Playlist from './Pages/Playlist'
import Panier from './Pages/Panier'
import Uploader from './Pages/Uploader'
import Checkout from'./Pages/Checkout'
import More from'./Pages/More'



import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

//#region MAIN
class App extends React.Component {

  constructor(props) {
    super(props);
  }
  render() {


    return (
      <Router>
        <Switch>
          <Route exact path='/Home' component={() => <Home/>} />
          <Route exact path='/Register' component={() => <Register/> } />
          <Route exact path='/' component={() => <Login/>} />
          <Route exact path='/Playlist' component={() => <Playlist/>} />
          <Route exact path='/Panier' component={() => <Panier/>} />
          <Route exact path='/Uploader' component={() => <Uploader/>} />          
          <Route exact path='/Checkout' component={() => <Checkout/>} />   
          <Route exact path='/More' component={() => <More/>} />   
        </Switch>
      </Router>
    )
  }

}
//#endregion
export default App;
