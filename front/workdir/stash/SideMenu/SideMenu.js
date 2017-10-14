import React, { Component } from 'react'
import Sidebar from 'react-sliding-sidemenu'
// import Sidebar from 'react-sidebar'

// import SideMenuContent from './SideMenuContent'
import './SideMenu.css';
// import Menu from './Menu'


const mql = window.matchMedia(`(min-width: 1200px)`)


class SideMenu extends Component {
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


  render() {
    return (<div className='SideMenu'>
      {/*
      <Sidebar
        sidebar={<SideMenuContent />}
        open={this.state.sidebarOpen}
        docked={this.state.sidebarDocked}
        onSetOpen={this.onSetSidebarOpen}
      >*/}
      <table><tbody><tr>
        <td><Menu /></td>
        <td>{this.props.children}</td>
      </tr></tbody></table>
      {/*</Sidebar>*/}
    </div>)
  }
}

const Menu = () => {
  return (<div>
    Menu menus
</div>)}


export default SideMenu
