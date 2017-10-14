import React from 'react'
import {
  Carousel,
} from 'react-bootstrap'


import carousel01 from './carousel01.png'
import carousel02 from './carousel02.png'
import carousel03 from './carousel03.jpg'

const Carcar = () => (
  <Carousel className='Border'>
    <Carousel.Item>
      <img width={900} height={500} alt="900x500" src={carousel01} />
    </Carousel.Item>
    <Carousel.Item>
      <img width={900} height={500} alt="900x500" src={carousel02} />
    </Carousel.Item>
    <Carousel.Item>
      <img width={900} height={500} alt="900x500" src={carousel03} />
    </Carousel.Item>
  </Carousel>
)


export default Carcar
