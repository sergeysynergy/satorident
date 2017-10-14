import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'

import SideMenu from './SideMenu/SideMenu';
import Header from './Header/Header'
import HeaderLinks from './Header/HeaderLinks'
import Home from './Home/Home';
import Bottom from './Bottom';
import Ceni from './Ceni';
import './App.css';
// import maket from './maket.png';


// lg (≥1200px)
// md (≥992px)
// sm (768px ≤ width < 992px)
// xs (<768px)
class App extends Component {
  render() {
    return (<div className='App'>
      <SideMenu
      >
        <Header />
        <HeaderLinks />
        <Bottom />
      </SideMenu>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/ceni" component={Ceni}/>
      </Switch>
    </div>)
  }
}

export default App
      // <img src={maket} className="Logo" alt="logo" />
