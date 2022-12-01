import React, { useContext, useEffect, useState } from 'react'
import { Badge, Button, Container } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import Store from '../Store/Store';
import Card from 'react-bootstrap/Card';
import { FaTrashAlt } from "react-icons/fa";
import Naav from '../Components/Naav';
import axios from 'axios';
import Swal from 'sweetalert2';

const Shopingcart = () => {

  const context = useContext(Store)
  let cart = context.storeCart
  
  const [userName, setUserName] = useState('')
  
  useEffect(()=>{
    axios({
      method: 'get',
      url: `http://localhost:9000/logIn`
    }).then((data)=>{
      setUserName(data.data.userName)
      setPay(data.data.userName)

    })
  },[])
 
  const [pay, setPay] = useState('')
  const navigate = useNavigate()

  const payment = ()=>{
    if (userName === '') {
      Swal.fire({
        title: 'You Have To Sign In!',
        text: "Go To Sign In First",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, Sign In'
      }).then((data)=>{
        if (data.isConfirmed) {
          navigate('/Sinein')
        }
      })
    }
  }
  return (
    <div >
        <Naav />
        <div className='mt-5 pt-2'>
        {context.storeCart.length > 0 ? (
       <Container>
          <div className='row d-flex justify-content-md-between justify-content-center'>

            {cart.map((product)=>(
                <div className='col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center mt-5' key={product.id}>
                    <Card style={{ width: '18rem' }} >
                        <Card.Img variant="top" src={product.image} height='300rem'/>
                        <Card.Body>
                          <Card.Title className='d-flex justify-content-md-between'>
                            <span>{product.name}</span>
                            <span style={{fontSize:'15px'}}>Code: <Badge>#{product.id}</Badge></span>
                            </Card.Title>
                          <Card.Text className='d-flex justify-content-between mt-1 align-items-center'>
                            <span>InStock <Badge bg={((product.QutAvl - product.QutBuy) > 0 ? 'warning' : 'danger')}>{(product.QutAvl - product.QutBuy)}</Badge> items more</span>
                            <span className='text-secondary fw-bold'>${product.price}</span>
                          </Card.Text>
                          <Card.Text className='d-flex justify-content-between align-items-center'>
                            <span className='text-success fw-bold'>{product.QutBuy} Item</span>
                            <span>
                              <Button className='me-1 fs-6 fw-bold' style={{width:'2.5rem'}} variant='outline-success' onClick={()=>context.storeAdd(product)}>+</Button>
                              <Button className='me-1 fs-6 fw-bold' style={{width:'2.5rem'}} variant='outline-warning' onClick={()=>context.storeDecreas(product)}>-</Button>
                              <Button className='me-1 fs-6 fw-bold' style={{width:'2.5rem'}} variant='outline-danger' onClick={()=>context.storeDel(product)}><FaTrashAlt /></Button>
                            </span>
                          </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            ))}

          </div>
       </Container>) 
       : (
       <div className='d-flex justify-content-center text-center mt-5'>
        <h1 className='bg-light py-2 border rounded-pill text-danger mb-4' style={{width:'26rem'}}>Your Cart Empty</h1>
       </div>
       )}
      <div className='text-center d-flex justify-content-center mt-3'>
          <div className='w-100'>
              <div className='row d-flex align-items-center justify-content-center' style={{margin:0}}>
              <div className='col-lg-4 col-md-12 bg-light py-2 px-5 border rounded-pill text-danger d-flex align-items-center justify-content-center mt-2' style={{width:"25rem"}}>
                        <Button variant='outline-danger' onClick={context.storeTotalPrice}>Get Total Price</Button>
                        <span className='text-dark ms-5'>Total Price: <span className='text-success fw-bold'>{context.storePrice}</span></span>
                    </div>
                    {context.storeCart.length > 0 && (
                        <div className='col-lg-4 col-md-12 ms-3 mt-2'>
                          <Link to={pay !== '' && '/Pay'}>
                            <Button className='py-2 px-5 border rounded-pill  fs-3' variant='outline-success' onClick={payment}>Proceed To Pay</Button>
                          </Link>
                        </div>
                    ) }

              </div>
                    <Link to='/Shop'>
                        <Button variant='outline-info fs-3 mt-4'>Continue Shopping</Button>
                    </Link>
              </div>
          </div>
        </div>
      </div>
  )
}

export default Shopingcart;
