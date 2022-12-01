import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Controlnav from './Controlnav'
import SideBar from './SideBar'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import Swal from 'sweetalert2';

const EditProduct = () => {

    const navigate = useNavigate()
    const {editID} = useParams()
    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [image, setimage] = useState('')
    const [QutAvl, setQutAvl] = useState(0)
    const [id, setId] = useState(0)


    let showProduct = ()=>{
        axios({
            method: 'get',
            url: `http://localhost:9000/products/${editID}`
        }).then((data)=>{
            setName(data.data.name)
            setPrice(data.data.price)
            setimage(data.data.image)
            setQutAvl(data.data.QutAvl)
            setId(data.data.id)
        })
    }

    useEffect(()=>{
        showProduct()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    const FormSubmit = (e)=>{
        e.preventDefault()
            
              Swal.fire({
                title: 'Do you want to save the changes?',
                showDenyButton: true,
                showCancelButton: true,
                confirmButtonText: 'Save',
                denyButtonText: `Don't save`,
              }).then((data)=>{
                if (data.isConfirmed) {
                  if (name !== '') {
                  Swal.fire('Saved!', '', 'success')
                  axios({
                    method:"put",
                    url:`http://localhost:9000/products/${editID}`,
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
                }else if (data.isDenied) {
                  Swal.fire('Changes are not saved', '', 'info')
                  navigate('/ControlPanal/Products')
                }
              })
    
           
      }
    


  return (
    <div>
      <Controlnav />

      <div>
      <div className='row mt-5 pt-2' style={{margin:0}}>

        <div className='col-lg-2' style={{backgroundColor: 'black'}}>
           <SideBar />
        </div>

        <div className='col-lg-10'>
            <div className='d-flex justify-content-center align-items-center' style={{height:'92.2vh'}}>

                <div className='py-4 px-4 border rounded shadow-lg p-3 my-5 bg-body rounded'>
                    <Form onSubmit={FormSubmit} style={{width:'25rem'}}>
                        <Form.Group className="mb-3" controlId="formBasicEmail" >
                          <div className='text-center mb-5 mt-3 text-danger'>
                            <h3>Edit Product No <span className='text-info'>{id}</span></h3>
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
                          <Form.Control type="text" placeholder="Price" value={image}
                          onChange={(e)=> setimage(e.currentTarget.value)}/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                          <Form.Label className='text-info fw-bold'>Avaliable Items</Form.Label>
                          <Form.Control type="text" placeholder="Enter URL" value={QutAvl}
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
    </div>
  )
}

export default EditProduct
