import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Controlnav from './Controlnav';
import SideBar from './SideBar';
import Card from 'react-bootstrap/Card';
import { Badge, Button } from 'react-bootstrap';

const ViewProduct = () => {
    const {productID} = useParams()
    const [product, setProduct] = useState({})

    let showProduct = ()=>{
        axios({
            method: 'get',
            url: `http://localhost:9000/products/${productID}`
        }).then((data)=>{
            setProduct(data.data)
        })
    }


    useEffect(()=>{
        showProduct()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])


  return (

        <div>
          <Controlnav />
          <div className=''>

            <div className='row mt-5 pt-2' style={{margin:0}}>

              <div className='col-lg-2' style={{backgroundColor: 'black'}}>
                <SideBar />
              </div>


              <div className='col-lg-10'>
                <div className='d-flex justify-content-center align-items-center' style={{height:'92.2vh'}}>
                <Card style={{ width: '16rem' }}>
                  <Card.Img variant="top"  src={product.image} style={{ height: '20rem' }}/>
                  <Card.Body>
                    <Card.Title className='d-flex justify-content-md-between'>
                      <span>{product.name}</span>
                      <span style={{fontSize:'15px'}}>Avaliable: <Badge>{product.QutAvl}</Badge></span>
                    </Card.Title>
                    <Card.Text className='mt-3 fw-bold'>
                      <span>Code No: #<span className='text-danger'>{product.id}</span></span>
                    </Card.Text>
                    <Card.Text className='fw-bold'>
                      <span>Price: $<span className='text-danger'>{product.price}</span></span>
                    </Card.Text>
                    <div className='text-center'>
                      <Link to='/ControlPanal/Products'>
                        <Button variant="success">Back To Products</Button>
                      </Link>
                    </div>
                  </Card.Body>
                </Card>
                </div>
              </div>

            </div>
          </div>
        </div>
  )
}

export default ViewProduct
