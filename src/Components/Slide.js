import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import LogoOne from '../Photos/logoOne.png'
import LogoTwo from '../Photos/logoTwo.png'
import '../Style/Slide.css'


const Slide = () => {
  return (
    <div>
        <Carousel className='main'>
            <Carousel.Item>
              <img
                style={{height:'92.1vh'}}
                className="d-block w-100"
                src={LogoOne}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                style={{height:'92.1vh'}}
                className="d-block w-100"
                src={LogoTwo}
                alt="Second slide"
              />
            </Carousel.Item>
        </Carousel>
    </div>
  )
}

export default Slide
