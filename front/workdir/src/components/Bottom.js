import React from 'react'
import { Link } from 'react-router-dom'
import { Clearfix, Grid, Row, Col, } from 'react-bootstrap'

import './Bottom.css';


const Bottom = ()=> (<div className='Bottom'>
  <Grid>
    <Row className="show-grid">
      <Col xs={12} sm={6} className='One'>
        <div className='P'>
          <Link to='/'>Сеть стоматологических клиник «Cатори-дент»</Link>
          <div>г. Мытищи, ул. Веры Волошиной, д.&nbsp;46</div>
          <div>Тел.:+7&nbsp;(495)778-5717, e-mail: info@satorident.ru</div>
          <div>г. Мытищи, ул. Комарова, д.&nbsp;2, корп.&nbsp;3</div>
          <div>Тел.:+7&nbsp;(498)621-4000, e-mail: info@satorident.ru</div>
        </div>
      </Col>
      <Col xs={12} sm={6} className='Two'>
        <div className='P'>
          Metrika
        </div>
      </Col>
    </Row>
  </Grid>
  <Clearfix />
</div>)

        // <div>+7&nbsp;(495) 971-9997</div>
        // <div>+7&nbsp;(495) 979-21-58</div>

export default Bottom
