import React from 'react'
import { Button, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../Style/Purchase.css'

const Purchase = () => {
  return (
    <div className='pt-5'>
      <Container>
        <div className='row'>
            <div className='col-lg-8 col-sm-12 purchase1 text-center position-relative mt-5'>
                <div className='position-absolute top-50 start-0 mt-5 w-100 pt-3'>
                    <h4>MERRY</h4>
                    <h3>Christmass 40% off</h3>
                    <Link to='/Shop'>
                      <Button variant='outline-danger mt-3'>Shop Now</Button>
                    </Link>
                </div>
            </div>

            <div className='col-lg-1'>

            </div>

            <div className='col-lg-3 col-sm-12 purchase2 mt-5'>
                <div className='bg-light mt-5'>
                  <h6 style={{fontSize:'80px', fontWeight:'100'}}>Your Next</h6>
                  <h1 style={{fontSize:'45px', fontWeight:'900'}} className='mt-5'>Purchase 10% 0ff</h1>
                  <Link to='/Shop'>
                      <Button variant='outline-danger mt-5'>Shop Now</Button>
                  </Link>
                  
                </div>
            </div>
        </div>
      </Container>
    </div>
  )
}

export default Purchase
