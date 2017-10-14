import fetch from 'isomorphic-fetch'
import { push } from 'react-router-redux'
import { single } from 'react-icons-kit/entypo/single'
import { home } from 'react-icons-kit/icomoon'
import { database } from 'react-icons-kit/icomoon/database'
import { aidKit } from 'react-icons-kit/icomoon/aidKit'
import { users } from 'react-icons-kit/icomoon/users'
import { happy } from 'react-icons-kit/icomoon/happy'
import { tab } from 'react-icons-kit/icomoon/tab'
import { location2 } from 'react-icons-kit/icomoon/location2'
import { phone } from 'react-icons-kit/icomoon/phone'

import { store } from '../index'
import settings from '../settings'
import * as services from './services'

import {
  MAKE_MENU,
} from '../actions'

/* end of import section */
/* other constants */

export const menuItems = [
	{id: 99901, label: 'Главная', slug: '', icon: home},
	{id: 99902, label: 'Цены', slug: 'ceni', icon: database},
	{id: 99903, label: 'Услуги', slug: 'uslugi',
    icon: aidKit, expanded: true},
	{id: 99904, label: 'Сотрудники', slug: 'specialisty', icon: users},
	{id: 99905, label: 'Наши работы', slug: 'portfolio', icon: happy},
	{id: 99906, label: 'Отзывы', slug: 'otzyvy', icon: tab},
	{
    label: 'Контакты',
    slug: 'adresa-stomatologicheskih-klinik-satori-dent',
    icon: location2,
  },
	{id: 99907, label: 'Заказать звонок', slug: 'orderCall', icon: phone},
]

/* action creators */

export function doMakeMenu(items) {
  return { type: MAKE_MENU, items }
}

/* other functions */

function buildChildrenData(data=[]) {
  function addMenuItem(items, newItem, parentId) {
    items = items.map(item => {
      if (item.id === parentId) {
        let children = item.children?item.children:[]
        item.children = [...children, newItem]
      } else if (typeof(item.children) !== 'undefined') {
        item.children = addMenuItem(item.children, newItem, parentId)
      }
      return item
    })
    return items
  }

  let items = []
  let newItem = {}

  data.forEach((el, key) => {
    newItem = {
      id: el.pk,
      label: el.menuTitle === ''? el.title: el.menuTitle,
      slug: el.slug,
      icon: single,
    }
    if (el.parentId) {
      items = addMenuItem(items, newItem, el.parentId)
    } else {
      items = [...items, newItem]
    }
  })
  return items
}

function buildMenuStructure(json, items) {
  let key = items.findIndex(el => el.id === 99903)
  items[key] = {...items[key], children: buildChildrenData(json)}
  return items
}

export function fetchMenu(items) {
  store.dispatch(doMakeMenu(items))
  return function(dispatch) {
    return fetch(settings.BACK + '/satori/services/')
      .then(
        response => response.json(),
        error => console.log('An error occured.', error)
      )
      .then(json => {
          store.dispatch(services.doAddServices(json))
          return buildMenuStructure(json, items)
        }
      )
      .then(items => dispatch(doMakeMenu(items)))
      .then(items =>
        store.dispatch(push(store.getState().router.location.pathname))
      )
  }
}
