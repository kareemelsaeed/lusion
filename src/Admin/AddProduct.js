import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Controlnav from './Controlnav'
import SideBar from './SideBar'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

const AddProduct = () => {

    const navigate = useNavigate()
    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [image, setimage] = useState('https://emgf-wordpress-media.s3.eu-west-2.amazonaws.com/wp-content/uploads/2021/08/24133928/empty.jpg')
    const [QutAvl, setQutAvl] = useState(0)

    const FormSubmit = (e)=>{
        e.preventDefault()
            if (name !== '') {
                axios({
                    method:"post",
                    url:`http://localhost:9000/products`,
                    data:{
                        name,
                        price,
                        image,
                        QutAvl,
                        QutBuy: 0,
                    }
                }).then((data)=>{
                    navigate('/ControlPanal/Products')
                })   
            }
    }
    

  return (
    <div>
      <Controlnav />

      <div className='row mt-5 pt-2' style={{margin:0}}>

        <div className='col-lg-2' style={{backgroundColor: 'black'}}>
           <SideBar />
        </div>

        <div className='col-lg-10'>
            <div className='d-flex justify-content-center align-items-center mt-2' style={{height:'91vh'}}>

                <div className='py-4 px-4 border rounded shadow-lg p-3 mb-5 bg-body rounded'>
                    <Form onSubmit={FormSubmit} style={{width:'30rem'}}>
                        <Form.Group className="mb-3" controlId="formBasicEmail" >
                          <div className='text-center mb-5 mt-3 text-danger'>
                            <h3>Add New Product<span></span></h3>
                          </div>  
                          <Form.Label className='text-info fw-bold'>Name</Form.Label>
                          <Form.Control type="text" placeholder="Enter Name" value={name}
                          onChange={(e)=> setName(e.currentTarget.value)}/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                          <Form.Label className='text-info fw-bold'>Price</Form.Label>
                          <Form.Control type="text" placeholder="Price" value={price}
                          onChange={(e)=> setPrice(e.currentTarget.value)}/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                          <Form.Label className='text-info fw-bold'>Photo</Form.Label>
                          <Form.Control type="text" placeholder="Enter URL" value={image}
                          onChange={(e)=> setimage(e.currentTarget.value)}/>
                          <Form.Text className="text-muted">
                            EX: http://ubbco/Go6DZtR/default-user-image.png
                          </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                          <Form.Label className='text-info fw-bold'>Avaliable Items</Form.Label>
                          <Form.Control type="text" placeholder="QutAvl" value={QutAvl}
                          onChange={(e)=> setQutAvl(e.currentTarget.value)}/>
                        </Form.Group>

                        <div className='text-center mt-5'>
                            <Button variant="success" type="submit">
                              Submit
                            </Button>
                        </div>
                    </Form>
                </div>

            </div>
        </div>

      </div>

    </div>
  )
}

export default AddProduct;
