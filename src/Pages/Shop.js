import React, { useContext } from 'react'
import { Badge, Button, Container } from 'react-bootstrap';
import '../Style/Shop.css'
import Card from 'react-bootstrap/Card';
import { FaShoppingBasket } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Store from '../Store/Store';
import Naav from '../Components/Naav';


const Shop = () => {

    const context = useContext(Store)
    let products = context.storeProduct


    return (
    <div  style={{backgroundColor: 'black'}}>
        <Naav />
        <div className='mt-5'>
        <div className='Shop position-relative'>
            <div className='position-absolute top-50 start-0 text-center w-100 mt-5'>
                  <h1>Shop</h1>
                  <h3><span className='text-light'>Home</span>/Shop</h3>
            </div>
        </div>

        <div className='mt-5'>
            <Container>
                <div className='row d-flex justify-content-md-between justify-content-center'>

                    {products.map((product)=>(
                        <div className='col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center mt-5' key={product.id}>
                            <Card style={{ width: '18rem' }} >
                                <Card.Img variant="top" src={product.image} height='300rem'/>
                                <Card.Body>
                                  <Card.Title className='d-flex justify-content-md-between'>
                                    <span>{product.name}</span>
                                    <span style={{fontSize:'15px'}}>Avaliable: <Badge>{(product.QutAvl - product.QutBuy)}</Badge></span>
                                    </Card.Title>
                                  <Card.Text className='d-flex justify-content-between mt-3 align-items-center'>
                                    <span className='text-success fw-bold'>${product.price}</span>
                                    <Button className='border rounded-circle' variant='outline-secondary' onClick={()=>context.storeAdd(product)}>
                                        <FaShoppingBasket className='text-success'/>
                                    </Button>
                                  </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    ))}

                </div>

                <div className='text-center mt-3'>
                    <Link to='/'>
                      <Button variant='outline-danger my-5'>Back To Home</Button>
                    </Link>
                </div>
            </Container>
        </div>
        </div>
    </div>
  )
}

export default Shop;
