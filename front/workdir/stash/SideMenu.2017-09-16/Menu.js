import React, { Component } from 'react';
import { Link } from 'react-router-dom'

// import SideNav, { Nav, NavIcon, NavText } from 'react-sidenav';
import { withRR4, Nav, NavIcon, NavText } from 'react-sidenav';
import SvgIcon from 'react-icons-kit';
import { ic_aspect_ratio } from 'react-icons-kit/md/ic_aspect_ratio';
import { ic_business } from 'react-icons-kit/md/ic_business';

import {
  Button, NavItem,
} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

import settings from '../../settings'
import { XHRGet } from '../includes/Cement'
import './Menu.css';

const SideNav = withRR4();

const menuItems = [
  { id: 1,
    label: 'Item 1',
    icon: 'fa-battery-half',
    items: [
      { id: 11,
        label: 'Item 1.1',
        icon: 'fa-car',
        link: '/item11',
      },
      { id: 12,
        label: 'Item 1.2',
        icon: 'fa-bullhorn',
        link: '/item12',
      },
    ],
  },
]


class Menu extends Component {
  render() {
    return (<div className='Menu'>
      <SideNav
        highlightColor='#fff'
        highlightBgColor='#0B7F0B'
        defaultSelected='ceni'
      >
        <Nav id='cenii'>
          <NavLink to='ceni' label='Ceniii' />
        </Nav>
        <Nav id='ceni'>
          <NavIcon>
            <SvgIcon size={20} icon={ic_aspect_ratio}/>
          </NavIcon>
          <NavText><a href=''> Цены </a></NavText>
        </Nav>
        <Nav id='dashboard'>
          <NavIcon>
            <SvgIcon size={20} icon={ic_aspect_ratio}/>
          </NavIcon>
          <NavText> Dashboard </NavText>
        </Nav>
        <Nav id='dashboard'>
          <NavText> Left </NavText>
            <Nav id='dashboard'>
              <NavText> Left </NavText>
              <NavLink to='ceni' icon={ic_aspect_ratio} label='Цены'> Цены </NavLink>
            </Nav>
        </Nav>
        <Nav id='sales'>
          <NavIcon><SvgIcon size={20} icon={ic_business}/></NavIcon>
          <NavText> Sales </NavText>
        </Nav>
      </SideNav>
    </div>)
  }
}

const NavLink = props => (
  <Link to={props.to} {...props}>
    <i className={`fa ${props.icon}`} />{props.label}
  </Link>
)


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


export default Menu
