import React, { useContext, useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink , Link } from 'react-router-dom';
import '../Style/Naav.css'
import { FaShoppingBasket } from "react-icons/fa";
import { Badge } from 'react-bootstrap';
import Store from '../Store/Store';
import axios from 'axios';


const Naav = () => {
  const context = useContext(Store)

  const [userName, setUserName] = useState('')
  const [userRole, setUserRole] = useState('')
  const [sign, setSign] = useState('')
  
  let myUser = ()=>{
    axios({
      method: 'get',
      url: `http://localhost:9000/logIn`
    }).then((data)=>{
      setUserName(data.data.userName)
      setUserRole(data.data.role)
      setSign(data.data.sign)
    })
  }

  useEffect(()=>{
    myUser()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  

  const signout = ()=>{
    if (sign === 'Sign Out') {
      axios({
        method: "put",
        url: `http://localhost:9000/logIn`,
        data: {
          userName: '',
          role: '',
          sign: 'Sign In'
        }
      }).then((data)=>{
      })
    }
  }

  // axios({
  //   method: "put",
  //   url: `http://localhost:9000/logIn`,
  //   data: {
  //     userName : x[0].userName,
  //     role: x[0].role,
  //     sign: "Sign Out"
  //   }
  // }).then((data)=>{
  //   console.log(data.data);
  //   navigate('/')
  // })

  return (
    <div>
        <Navbar bg="dark" expand="lg" variant='dark' className='fixed-top'>
          <Container>
            <Navbar.Brand className='fw-bold text-info'>LUSION</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto d-flex align-items-lg-center align-items-start ">
                <NavLink className='text-decoration-none light me-3' to='/'>Home</NavLink>
                <NavLink className='text-decoration-none light me-3' to='/Shop'>Shop</NavLink>
                {userName !== '' && (
                  <Link className='text-decoration-none light me-3 text-warning fw-bold'>Welcome {userName}</Link>
                )}
                {(userRole === 'Admin') && (
                  <NavLink className='text-decoration-none light me-3' to='/ControlPanal'>Control_Panal</NavLink>
                )}
                <NavLink className='light' to='/Shopingcart'>
                  <div className='position-relative' style={{width:'1rem'}}>
                    <FaShoppingBasket style={{fontSize:'20px'}}/>
                    <Badge bg={context.storeCart.length > 0 ? 'success' : 'danger'} className='position-absolute top-0 start-100 translate-middle ms-2' style={{fontSize:'8px'}}>
                      {context.storeCart.length}
                    </Badge>
                  </div>
                </NavLink>
                <NavLink className='text-decoration-none light ms-3' to='/Sinein' onClick={signout}>{sign}</NavLink>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    </div>
  )
}

export default Naav
