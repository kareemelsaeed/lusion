import React, { useContext } from 'react'
import Card from 'react-bootstrap/Card';
import { Button, Container } from 'react-bootstrap';
import Store from '../Store/Store';
import { Link } from 'react-router-dom';

const BestSall = () => {
    const context = useContext(Store)

  return (
    <div className='pt-5'>

        <Container>
            <div className='row d-flex justify-content-md-between justify-content-center'>
            <h1 className='text-danger mt-5'>Best Selling</h1>
                {context.storeBestSell.map((sell)=>(
                    <div className='col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center mt-5' key={sell.id}>
                        <Card style={{ width: '18rem' }} >
                            <Card.Img variant="top" src={sell.photo} height='280rem'/>
                            <Card.Body>
                              <Card.Title>{sell.name}</Card.Title>
                              <Card.Text className='d-flex justify-content-between align-items-center mt-3'>
                                <span className='fw-bold'>{sell.price}.00$</span>
                                <Link to='/Shop'>
                                  <Button variant='outline-danger'>Shop Now</Button>
                                </Link>
                              </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                ))}
            </div>
        </Container>

    </div>
  )
}

export default BestSall
