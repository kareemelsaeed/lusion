import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import Controlnav from './Controlnav';
import SideBar from './SideBar';

const Products = () => {
    const [products, setProducts] = useState([])

    let ShowProducts = ()=>{
      axios({
        method:'get',
        url: `http://localhost:9000/products`
      }).then((data)=>{
        setProducts(data.data)
      })
    }

    const deletProduct =(product)=>{
          Swal.fire({
              title: 'Are you sure?',
              text: "You won't be able to revert this!",
              icon: 'warning',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Yes, delete it!'
          }).then((data)=>{
              if (data.isConfirmed) {
                  axios({
                      method: "delete",
                      url: `http://localhost:9000/products/${product.id}`,
                  }).then((data)=>{
                  });

                  ShowProducts()
              }
          })
    }

  useEffect(()=>{
    ShowProducts()
  },[])
  
    return (
      <div>

        <Controlnav />

        <div>

        <div className='row mt-5 pt-2' style={{margin:0}}>

          <div className='col-lg-2' style={{backgroundColor: 'black'}}>
              <SideBar />
          </div>

          <div className='col-lg-10'>

            <div className='my-3'>
                <Link to='/ControlPanal/AddProduct'>
                    <Button>Add To Products</Button>
                </Link>
            </div>

            <Table striped bordered hover variant="dark">
              <thead>
                <tr>
                  <th className='text-center'>ID</th>
                  <th className='text-center'>Product Image</th>
                  <th className='text-center'>Product Name</th>
                  <th className='text-center'>price</th>
                  <th className='text-center'>Items</th>
                  <th className='text-center'>Controls</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product)=>(
                  <tr key={product.id}>
                    <td className='text-center' style={{width:'5rem' , height:'2.5rem'}}>{product.id}</td>
                    <td className='text-center' style={{width:'10rem' , height:'3rem', padding:'2px'}}><img src={product.image} style={{width:'2rem' , height:'3rem'}} alt=""/></td>
                    <td className='text-center' style={{width:'10rem' , height:'3rem'}}>{product.name}</td>
                    <td className='text-center' style={{width:'8rem' , height:'3rem'}}>{product.price}</td>
                    <td className='text-center' style={{width:'8rem' , height:'3rem'}}>{product.QutAvl}</td>
                    <td className='d-flex justify-content-between align-items-center'>
                       <Link to={`/ControlPanal/EditProduct/${product.id}`}>
                            <Button variant='outline-warning'>Edite</Button>
                       </Link>
                       <Link to={`/ControlPanal/ViewProduct/${product.id}`}>
                            <Button variant='outline-info'>View</Button>
                       </Link>
                       <Button variant='outline-danger' onClick={()=>deletProduct(product)}>Delete</Button>
                    </td>
                  </tr>
                ))}

              </tbody>
            </Table>
          </div>

        </div>
        
        </div>

      </div>
    )
}

export default Products;
