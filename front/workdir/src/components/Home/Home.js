import React from 'react'
import { Clearfix,
  Grid, Row, Col,
} from 'react-bootstrap'


// import Map from "//api-maps.yandex.ru/services/constructor/1.0/js/?sid=qpu4BdYPiEgpTvdXKRf74C7B2LbR-0eh&width=250&height=352"
import Carcar from './Carcar'
import Map from './Map'
import Jumb01 from './Jumb01'
import Jumb02 from './Jumb02'
import './Home.css';

export class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (<div className='Home'>
      <Grid className='Slides'>
        <Row className="show-grid">
          <Col xs={12} sm={12} md={8} lg={8} className='One'>
            <div className='P'>
              <Carcar/>
            </div>
          </Col>
          <Col xs={12} sm={12} md={4} lg={4} className='Two'>
            <div className='P'>
              <Map />
            </div>
          </Col>
          <Col xsHidden smHidden mdHidden lgHidden></Col>
        </Row>
      </Grid>
      <Clearfix />
      <Grid className='Text'>
        <Row className="show-grid">
          <Col sm={12} md={12} lg={12} className='One'>
            <Jumb02 />
            <Jumb01 />
          </Col>
        </Row>
      </Grid>
      <Clearfix />
    </div>)
  }
}


export default Home
