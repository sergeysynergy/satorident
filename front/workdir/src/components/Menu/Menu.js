import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import SvgIcon from 'react-icons-kit'
import { angleRight } from 'react-icons-kit/fa/angleRight'
import { angleDown } from 'react-icons-kit/fa/angleDown'

import './Menu.css';

/* End of import section */

class Menu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      menuItems: this.props.menu,
    }
  }

  updateMenuParentItemIndex = (id, arr) => {
    return arr.map(el => {
      if (el.id === id) {
        let expanded = typeof(el.expanded) === 'undefined'? true : !el.expanded
        el.expanded = expanded
        // el.active = true
      } else if (el.children) {
        el = this.updateMenuParentItemIndex(id, el.children)
      } else {
        // el.active = false
      }
      return el
    })
  }
  handleMenuItemClick = (id) => {
    let menuItems = this.updateMenuParentItemIndex(id, this.state.menuItems)
    this.setState(menuItems: menuItems)
  }
  buildMenu(items, _setMenuItem, level) {
    if (typeof(items) !== 'undefined') {
      let padding = 12
      if (typeof(level) === 'undefined') {
        level = 0
      } else if(level === 0) {
        level = 1
      } else {
        level++;
        padding = level * padding
      }

      return items.map((item, key) => (
        <div className='Row' key={key}>
          <MenuLink
            item={item}
            padding={padding}
            _handleClick={this.handleMenuItemClick}
            active={item.active?'Active':''}
          >
            <SvgIcon size={20} icon={item.icon} className='Icon'/>
            {item.label}
          </MenuLink>
          {item.expanded && item.children?
            this.buildMenu(item.children, _setMenuItem, level)
          :
            ''
          }
        </div>
      ))
    }
  }

  render() {
    return (
      <div className='Menu'>
        {this.buildMenu(this.state.menuItems)}
      </div>
    )
  }
}

class MenuLink extends Component {
  handleClick = () => {
    this.props._handleClick(this.props.item.id)
  }

  render () {
    return (
      this.props.item.children?
        <div
          style={{paddingLeft: this.props.padding}}
          onClick={this.handleClick}
          className={'Item ' + this.props.active}
        >
          {this.props.children}
          {this.props.item.expanded?
            <SvgIcon size={20} icon={angleDown} className='More'/>
          :
            <SvgIcon size={20} icon={angleRight} className='More'/>
          }
        </div>
      :
        <Link
          to={`/${this.props.item.slug}`}
          style={{paddingLeft: this.props.padding}}
          className={'Item ' + this.props.active}
        >
          {this.props.children}
        </Link>
    )
  }
}


export default Menu
