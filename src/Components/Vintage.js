import React from 'react'
import { Container } from 'react-bootstrap'
import f1 from '../Photos/fifth1.jpg'
import f2 from '../Photos/fifth2.jpg'
import f3 from '../Photos/fifth3.jpg'
import f4 from '../Photos/fifth4.jpg'
import f5 from '../Photos/fifth5.jpg'
import f6 from '../Photos/fifth6.jpg'



const Vintage = () => {
  return (
    <div className='pt-5'>
        <Container>
            <div className='row'>
                <div className='col-lg-6 col-sm-12 mt-5'>

                  <div className='d-flex justify-content-evenly mt-4'>
                    <img src={f1} style={{width:"16rem", height:"11.4rem"}} alt=''/>
                    <img src={f2} style={{width:"16rem", height:"11.4rem"}} alt=''/>
                  </div>

                  <div className='d-flex justify-content-evenly mt-4'>
                    <img src={f3} style={{width:"16rem", height:"11.4rem"}} alt=''/>
                    <img src={f4} style={{width:"16rem", height:"11.4rem"}} alt=''/>
                  </div>

                  <div className='d-flex justify-content-evenly my-4'>
                    <img src={f5} style={{width:"16rem", height:"11.4rem"}} alt=''/>
                    <img src={f6} style={{width:"16rem", height:"11.4rem"}} alt=''/>
                  </div>

                </div>

                <div className='col-lg-1 col-sm-0'>

                </div>

                <div className='col-lg-5 col-sm-12 mt-5 pt-5'>
                  <div className='mt-5 pt-4 text-center text-light'>
                    <h3>Vintage Style</h3>
                    <p className='mt-5 pt-5 text-start'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, similique laudantium expedita ex animi impedit cupiditate omnis dolorem fugit adipisci ea error iure aspernatur. Iure.</p>
                    <h2 className='my-5 py-5'>#Lusiontheme</h2>
                  </div>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Vintage
