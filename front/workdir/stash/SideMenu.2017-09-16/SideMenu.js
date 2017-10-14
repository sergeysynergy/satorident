import React, { Component } from 'react'

import Menu from './Menu'
import './SideMenu.css';

// const mql = window.matchMedia(`(min-width: 1200px)`)

class SideMenu extends Component {
  /*
  constructor(props) {
    super(props);

    this.state = {
      mql: mql,
      docked: props.docked,
      open: props.open
    }

    this.mediaQueryChanged = this.mediaQueryChanged.bind(this);
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }
  componentWillMount() {
    mql.addListener(this.mediaQueryChanged);
    this.setState({mql: mql, sidebarDocked: mql.matches});
  }
  componentWillUnmount() {
    this.state.mql.removeListener(this.mediaQueryChanged);
  }

  onSetSidebarOpen(open) {
    this.setState({sidebarOpen: open});
  }
  mediaQueryChanged() {
    this.setState({sidebarDocked: this.state.mql.matches});
  }
  */


  render() {
    return (
      <div className='SideMenu'>
        <table>
          <tbody>
            <tr>
              <td className='Menu'>
                <Menu />
              </td>
              <td>{this.props.children}</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

          // <Menu menu={menu} activeMenu={'siliconstraits'} />

export default SideMenu
