import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'

import Menu from '../containers/MapMenu'
import Header from './Header/Header'
import HeaderLinks from './Header/HeaderLinks'
import Home from './Home/Home';
// import Bottom from './Bottom';
import Price from './Price';
import Service from '../containers/MapService'
import './App.css';
// import maket from './maket.png';

// menu (≥1280px)
// lg (≥1200px)
// md (≥992px)
// sm (768px ≤ width < 992px)
// xs (<768px)
class App extends Component {
  render() {
    return (
      <div className='App'>
        <table>
          <tbody>
            <tr>
              <td className='MenuTd'>
                <Menu />
              </td>
              <td>
                <Header />
                {/*
                <HeaderLinks />
                */}
                <HeaderLinks />
                <Switch>
                  <Route exact path="/" component={Home}/>
                  <Route exact path="/home" component={Home}/>
                  <Route exact path="/ceni" component={Price}/>
                  <Route path="/" component={Service}/>
                </Switch>
                {/*}<Bottom />*/}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default App
