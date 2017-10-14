import React, { Component } from 'react';
import {
  Button, Nav, NavItem,
} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

import settings from '../../settings'
import { XHRGet } from '../includes/Cement'
import './Menu.css';


class SidebarMenu extends Component {
  render() {
    return (<div>
      {this.props.children}
    </div>)
  }
}


class SidebarContent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      services: [],
    }
  }
  componentDidMount(){
    // Asynchronous loading default region data from backend
    XHRGet(
      settings.BACK + '/satori/services/',
      function(data) {
        this.setState({ services: data, })
      }.bind(this)
    )
  }
  handleSelect(selectedKey) {
    // alert('selected ' + selectedKey);
  }

  render() {
    const links = [
      {title: 'Главная', link: '/',},
      {title: 'Цены', link: '/',},
      {title: 'Сотрудники', link: '/',},
      {title: 'Наши работы', link: '/',},
      {title: 'Отзывы', link: '/',},
      {title: 'Контакты', link: '/',},
    ]


    return (<div className='Menu'>
      <LinkContainer to='/'>
        <Button bsStyle='warning'>Заказать звонок</Button>
      </LinkContainer>
      <br />
      <br />
      <Nav bsStyle="pills" stacked activeKey={0} onSelect={this.handleSelect}>
      {
        links.map((el, key) =>(
          <NavItem eventKey={key} href={el.link} key={key}>{el.title}</NavItem>
        ))
      }
      </Nav>
      <h3>Услуги</h3>
      <Nav bsStyle="pills" stacked onSelect={this.handleSelect}>
      {this.state.services.map((el, key) =>
          <NavItem eventKey={key} href={el.link} key={key}>{el.title}</NavItem>
      )}
      </Nav>
    </div>)
  }
}
          // <Link to={el.slug}>{el.title}</Link>


export default SidebarMenu
