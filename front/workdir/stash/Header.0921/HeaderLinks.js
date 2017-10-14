import React from 'react'
import { Clearfix,
  ButtonGroup, Button,
  Grid, Row, Col,
} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

import './HeaderLinks.css';


const linksData = [
  {link: '/ceni', title: 'Цены', type: 'success',},
  {link: '/uslugi', title: 'Услуги', type: 'success'},
  {link: '/specialisty', title: 'Сотрудники', type: 'success'},
  {link: '/portfolio', title: 'Наши работы', type: 'success',},
  {link: '/otzyvy', title: 'Отзывы', type: 'success',},
  {
    link: '/adresa-stomatologicheskih-klinik-satori-dent',
    title: 'Контакты',
    type: 'success',
  },
  {link: '/modal/zakazatzvonok', title: 'Заказать звонок', type: 'warning',},
]

const HeaderLinks = ()=> (<div className='HeaderLinks'>
  <Grid>
    <Row className="show-grid">
      <Col sm={12} className='One'>
        <Links data={linksData} />
      </Col>
    </Row>
  </Grid>
  <Clearfix />
</div>)


const Links = ({data})=> (<div>
  <ButtonGroup>
    {data.map((element, key) =>
      <LinkContainer to={element.link} key={key}>
        <Button bsStyle={element.type}>{element.title}</Button>
      </LinkContainer>
    )}
  </ButtonGroup>
</div>)


export default HeaderLinks
