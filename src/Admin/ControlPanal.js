import React, { useEffect, useState } from 'react'
import SideBar from './SideBar'
import Controlnav from './Controlnav'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import axios from 'axios'



const ControlPanal = () => {


    // products part
    const [products, setProducts] = useState([])  
    let ShowProducts = ()=>{
        axios({
          method: 'get',
          url: `http://localhost:9000/products`
        }).then((data)=>{
          setProducts(data.data)
        })
    }
  
    let productPrice = products.map((e)=> (e.price))
    let minPrice = Math.min(...productPrice)
    let maxPrice = Math.max(...productPrice)
    let productId = products.map((e)=> e.id)
    let lastProdNum = Math.max(...productId)    
  
    let productQutAvl = products.map((e)=> (e.QutAvl))
    
    let productQutAvlMinItem = Math.min(...productQutAvl)
    let productQutAvlMinNum = productQutAvl.indexOf(productQutAvlMinItem) + 1
  
    // Users part 
  
    const [users, setUsers] = useState([])
  
    let showUsers = ()=>{
      axios({
        method: 'get',
        url: `http://localhost:9000/users`
      }).then((data)=>{
        setUsers(data.data)
      })
    }
  
    useEffect(()=>{
      showUsers()
      ShowProducts()
    },[])
  
    let numMale = users.filter((e)=> e.gender === 'Male')
    let numFemale = users.filter((e)=> e.gender === 'Female')
  
    let numAdmin = users.filter((e)=> e.role === 'Admin')
    let numMember = users.filter((e)=> e.role === 'member')
  
    let usersId = users.map((e)=> e.id)
    let lastMumb = usersId[usersId.length-1]
    let lastMembNum = Math.max(...usersId)
    let lastMembNameArr = users.filter((e)=> e.id === lastMembNum)
    let lastMembNameObj = lastMembNameArr[0]
  

  return (
    <div>

      <Controlnav />

      <div className=''>
        <div className='row mt-5 pt-2' style={{margin:0}}>
          <div className='col-lg-2' style={{backgroundColor: 'black'}}>
            <SideBar />
          </div>

          <div className='col-lg-10'>

            <div>

              <div className='row d-flex align-items-center justify-content-center mt-5 ' style={{height:'85.5vh'}}>

                <div className=' mx-4' style={{width:'28rem'}}>

                    <div className='text-center shadow-lg p-3 my-5 bg-body rounded'>
                      <h1 className='bg-success py-1 text-light'>Products</h1>
                      <h5 className='text-info'>You Have <span className='text-danger'>{products.length}</span> Products Available</h5>
                      <h6>with prices between <span className='text-success'>${minPrice}</span> : <span className='text-danger'>${maxPrice}</span></h6>
                      <h6 className='opacity-75'>Last Product Added Code <span className='text-info'>{lastProdNum}</span></h6>

                      <h6>The product with the fewest  number of items is Product No <span className='text-success'>{productQutAvlMinNum} </span>
                        with <span className='text-danger'>{productQutAvlMinItem}</span> item only</h6>

                      <h6 className='opacity-75'>To preview that product click <Link to={`/ControlPanal/ViewProduct/${productQutAvlMinNum}`}><Button>View</Button></Link></h6>

                      <Link to='/ControlPanal/Products'>
                        <Button variant='success'>Manage Products</Button>
                      </Link>
                    </div>
                </div>

                <div className=' mx-4' style={{width:'28rem'}}>

                  <div className='text-center shadow-lg p-3 my-5 bg-body rounded'>
                        <h1 className='bg-success py-1 text-light'>Users</h1>
                        <h5 className='text-info'>You Have <span className='text-danger'>{users.length}</span> Users Registered</h5>
                        <h6>with <span className='text-success'>{numMale.length}</span> Male $ <span className='text-danger'>{numFemale.length}</span> Female</h6>
                        <h6 className='opacity-75'>With <span className='text-danger'>{numAdmin.length}</span> Admin & <span className='text-success'>{numMember.length}</span> Members</h6>

                        <h6>The Newest registered user is the owner of the account No <span className='text-success'>{lastMembNum} </span>
                          Named <span className='text-danger'>{lastMembNameObj !== undefined && lastMembNameObj.name}</span></h6>

                        <h6 className='opacity-75'>To preview that User click <Link to={`/ControlPanal/ViewUsers/${lastMumb}`}><Button>View</Button></Link></h6>

                        <Link to='/ControlPanal/ControlUsers'>
                          <Button variant='success'>Manage Users</Button>
                        </Link>
                  </div>        
                </div>

              </div>

              </div>





            </div>
          </div>
      </div>


   
    </div>
  )
}

export default ControlPanal;
