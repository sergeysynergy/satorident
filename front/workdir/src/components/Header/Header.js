import React from 'react'
import { Link } from 'react-router-dom'
import { Clearfix, Grid, Row, Col, } from 'react-bootstrap'

import './Header.css';
import logo from './logo.png';


// lg (≥1200px)
// md (≥992px)
// sm (768px ≤ width < 992px)
// xs (<768px)
  // <Button bsStyle='success'>≡</Button>
const Header = ()=> (<div className='Header'>
  <Grid>
    <Row className="show-grid">
      <Col md={2} className='One'>
          <Link to='/'><img src={logo} className="Logo" alt="logo" /></Link>
      </Col>
      <Col sm={4} className='Two'>
        <div className='P'>
        <div className='Brand'><Link to='/'>Сатори-Дент</Link></div>
        <div>Сеть стоматологических клиник</div>
        <div>Без выходных с&nbsp;9:00&nbsp;до&nbsp;21:00</div>
        </div>
      </Col>
      <Col sm={3} className='Three'>
        <div className='P'>
          <div><strong>+7&nbsp;(495) 150-3902</strong></div>
          <div>+7&nbsp;(498) 621-4000</div>
          <div>+7&nbsp;(901) 461-9997</div>
          <div>г. Мытищи, ул.Комарова, д.&nbsp;2, корп.&nbsp;3</div>
        </div>
      </Col>
      <Col sm={3} className='Four'>
        <div className='P'>
          <div><strong>+7&nbsp;(495) 150-3901</strong></div>
          <div>+7&nbsp;(901) 578-5717</div>
          <div>+7&nbsp;(901) 578-57-17</div>
          <div>г. Мытищи, ул. Веры Волошиной, д.&nbsp;46, помещение&nbsp;6</div>
        </div>
      </Col>
    </Row>
  </Grid>
  <Clearfix />
</div>)

        // <div>+7&nbsp;(495) 971-9997</div>
        // <div>+7&nbsp;(495) 979-21-58</div>

export default Header
