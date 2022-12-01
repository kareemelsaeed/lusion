import React, { useContext } from 'react'
import Store from '../Store/Store'
import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap';

const Items = () => {
    const context = useContext(Store)

  return (
    <div className='pt-5'>

        <Container>
            <div className='row d-flex justify-content-md-between justify-content-center'>
                {context.storeItems.map((item)=>(
                    <div className='col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center mt-5' key={item.id}>
                        <Card style={{ width: '18rem' }} >
                            <Card.Img variant="top" src={item.photo} height='280rem'/>
                            <Card.Body>
                              <Card.Title>{item.name}</Card.Title>
                              <Card.Text>
                                <span>{item.item}</span>
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

export default Items
