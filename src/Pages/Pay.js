import React, { useContext, useState } from 'react'
import Naav from '../Components/Naav'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Store from '../Store/Store';
import { Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Pay = () => {

  const context = useContext(Store)
  const [methodPay, setMethodPay] = useState('')


  return (
    <div>
        <Naav />


      <div className='mt-5 pt-2 d-flex align-items-center justify-content-center'>
      <div className='py-4 mt-4 px-4 border rounded shadow-lg p-3 mb-5 bg-body rounded'>
      <Form style={{width:'20rem'}}>
        <Form.Group className="mb-1 fs-3 fw-bold text-light" controlId="formBasicPassword">
          {context.storeCart.map((e)=>(  
            <div key={e.id} className='d-flex justify-content-between mt-1 bg-success px-2 rounded-3'>
              <span>{e.name}</span>
              <span className='d-flex justify-content-between' style={{width:'8rem'}}><Badge bg='warning'>{e.QutBuy}</Badge> ${e.price * e.QutBuy}</span>
            </div>
          ))}
          
        </Form.Group>
        <hr />
        <Form.Group className="mb-1 fs-3 fw-bold d-flex justify-content-between" controlId="formBasicPassword">
          <span>Total Price :</span>
          <span className='text-danger'>{context.storeCart.length > 0 && context.storeCart.map((e)=> e.QutBuy * e.price).reduce((a,c)=> a+c)}</span>
        </Form.Group>
        <hr />
        <Form.Group className="mb-3 text-primary fw-bold" controlId="formBasicEmail">
          <Form.Label >Enter Your Name</Form.Label>
          <Form.Control className='text-danger' type="email" placeholder="Enter Your Name" style={{backgroundColor:'black'}} 
          />
        </Form.Group>

        <Form.Group className="mb-3 position-relative text-primary fw-bold" controlId="formBasicPassword">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control className='text-danger' type='text' placeholder="Enter You phone" style={{backgroundColor:'black'}} 
          />
        </Form.Group>

        <Form.Group className="mb-3 position-relative text-primary fw-bold" controlId="formBasicPassword">
          <Form.Label>Address</Form.Label>
          <Form.Control className='text-danger' type='text' placeholder="Enter You Address" style={{backgroundColor:'black'}} 
          />
        </Form.Group>
        
        <Form.Group className="mb-3 text-primary fw-bold" controlId="formBasicGender">
                    <Form.Label>Payment</Form.Label>
                    <Form.Select aria-label="Default select example" value={methodPay}
                    onChange={(e)=>setMethodPay(e.currentTarget.value) }>
                        <option>Choose Way To Pay</option>                        
                        <option value="CASH">CASH</option>
                        <option value="VISA">VISA</option>
                    </Form.Select>
                    {methodPay === 'CASH' && (
                      <div className='mt-3 fw-bold d-flex justify-content-between'>
                        <span className='fs-4'>Pay By Cash</span>
                        <span className='fs-4 bg-danger text-light py-1 px-3 border rounded-pill'>{context.storeCart.length > 0 && context.storeCart.map((e)=> e.QutBuy * e.price).reduce((a,c)=> a+c)}</span>
                      </div>
                    )  }
                    {methodPay === 'VISA' && (
                      <div>
                      <div className='bg-light mt-3 d-flex justify-content-center border rounded' style={{width:'20rem', height:'16rem'}}>
                        <div className='mt-3' style={{width:'16rem', height:'8rem'}}>
                          <Form.Group className=" text-dark fw-bold" controlId="formBasicEmail">
                          <Form.Label >Enter Card Name</Form.Label>
                          <Form.Control className='text-danger' type="email" placeholder="Enter Your Name"/>
                          </Form.Group>

                          <Form.Group className="mt-2 text-dark fw-bold" controlId="formBasicEmail">
                          <Form.Label >Card Number</Form.Label>
                          <Form.Control className='text-danger' type="email" placeholder="4242 4242 4242 4242" />
                          </Form.Group>
                          <div className='d-flex justify-content-between'>
                            <Form.Group className="mt-2 text-dark fw-bold" controlId="formBasicEmail" style={{width:'5rem'}}>
                            <Form.Label >Expires</Form.Label>
                            <Form.Control className='text-danger' type="email" placeholder="MM/YY" />
                            </Form.Group>
                            <Form.Group className="mt-2 text-dark fw-bold" controlId="formBasicEmail" style={{width:'5rem'}}>
                            <Form.Label >CVC</Form.Label>
                            <Form.Control className='text-danger' type="email" placeholder="123" />
                            </Form.Group>
                            <Form.Group className="mt-2 text-dark fw-bold" controlId="formBasicEmail" style={{width:'5rem'}}>
                            <Form.Label >Post/Zip</Form.Label>
                            <Form.Control className='text-danger' type="email" placeholder="94107" />
                            </Form.Group>
                          </div>
                        </div>
                      </div>
                        <div className='mt-3 fw-bold d-flex justify-content-between'>
                          <span className='fs-4'>Pay By VISA</span>
                          <span className='fs-4 bg-danger text-light py-1 px-3 border rounded-pill'>{context.storeCart.length > 0 && context.storeCart.map((e)=> e.QutBuy * e.price).reduce((a,c)=> a+c)}</span>
                        </div>
                      </div>
                    )  }

        </Form.Group>

        <Button variant="success w-100 mt-2" type="submit">
          Pay
        </Button>

        <div className='text-center mt-3 fw-bold'>
          <Link to='/Shopingcart'>Back to Cart</Link>
        </div>
       </Form>
      </div>
    </div>
    </div>
  )
}

export default Pay



