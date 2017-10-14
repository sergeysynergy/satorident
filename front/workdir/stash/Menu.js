import React, { Component } from 'react';
import {
  // Popover, Tooltip, Button, Modal, OverlayTrigger,
} from 'react-bootstrap'

// import './Menu.css';


class Menu extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

export default Menu
