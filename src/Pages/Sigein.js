import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import axios from 'axios';
import { FaRegTimesCircle } from "react-icons/fa";
import Naav from '../Components/Naav';


const Sigein = () => {

    const [email,setEmail] =useState('')
    const [emailError, setEmailError] = useState('Email')
    const [password,setPassword] = useState('')
    const [passwordError, setPasswordError] = useState('Password')

    const [type, setType] = useState('password')

    const [users, setUsers] = useState([])
    const [usersError, setUsersError] = useState('')

    const emailCheek = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/ ;

    const navigate = useNavigate();

    const handleForm = (e)=>{
        e.preventDefault()
        if (!emailCheek.test(email)) {
            setEmailError('Invalid Email')
        }else if (password === '' || (password.length) < 5) {
            setEmailError('Email')
            setPasswordError('Invalid Password')
        }else {
            setPasswordError('Password')
            let x = users.filter((e)=> (e.email === email && e.password === password) )
            if (x.length === 0) {
              setUsersError('Error')
            }else{
              setUsersError('')
              axios({
                method: "put",
                url: `http://localhost:9000/logIn`,
                data: {
                  userName : x[0].userName,
                  role: x[0].role,
                  sign: "Sign Out"
                }
              }).then((data)=>{
                navigate('/')
              })
            }
        }
    }



    useEffect(()=>{
      axios({
        method: 'get',
        url: `http://localhost:9000/users`
      }).then((data)=>{
        setUsers(data.data)
      })
    },[])

    const showPassword = ()=>{
      if (type === 'password') {
        setType('text')
      } else if (type === 'text') {
        setType('password')
      }
    }

    const [foucs, setFoucs] = useState('')

    const showLable = ()=>{
      setFoucs('foucs')
    }

    const hideLable = ()=>{
      setFoucs('')
    }

    const [passFoucs, setPassFoucs] = useState('')

    const shoePassLable = ()=>{
      setPassFoucs('foucs')
    }

    const hidePassLable = ()=>{
      setPassFoucs('')
    }

  return (
    <div>
      <Naav />
      <div className='mt-4 pt-2 d-flex align-items-center justify-content-center' style={{height:'92vh'}}>
      <div className='py-4 px-4 border rounded shadow-lg p-3 mb-5 bg-body rounded'>
      <Form onSubmit={handleForm}>
        <Form.Group className="mb-3 text-center fs-3 fw-bold text-success" controlId="formBasicPassword">
          <Form.Label>Sign In</Form.Label>
        </Form.Group>
        <Form.Group className="mb-2 text-primary fw-bold" controlId="formBasicEmail">
          <Form.Label className={emailError !== 'Email' && 'text-danger'}>{emailError}</Form.Label>
          <div className='position-relative'>
            <Form.Control className='text-danger' type="email" placeholder="Enter Your Email" style={{backgroundColor:'black'}} value={email} 
            onChange={(e)=>setEmail(e.currentTarget.value) } onFocus={showLable} onBlur={hideLable}/>
            {foucs === 'foucs' && (
              <div className='position-absolute bottom-0 end-0 w-100 mb-2' style={{marginRight: '18.5rem'}}>
                <span className='position-absolute bottom-0 end-0 px-3 py-1 border rounded-3 text-light bg-dark' style={{fontSize:'12px'}}>EX: example@email.domain</span>
              </div>
            )}
          </div>

          <Form.Text className="text-muted fw-normal">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3 position-relative text-primary fw-bold" controlId="formBasicPassword">
          <Form.Label className={passwordError !== 'Password' && 'text-danger'}>{passwordError}</Form.Label>

          <div>
            <Form.Control className='text-danger' type={type} placeholder="Password" style={{backgroundColor:'black'}} value={password}
            onChange={(e)=>setPassword(e.currentTarget.value) } onFocus={shoePassLable} onBlur={hidePassLable}/>
              {passFoucs === 'foucs' && (
              <div className='position-absolute bottom-0 end-0 w-100 mb-2' style={{marginRight: '18.5rem'}}>
                <span className='position-absolute bottom-0 end-0 px-3 py-1 border rounded-3 text-light bg-dark' style={{fontSize:'12px'}}>Should Be 6 Characters</span>
              </div>
            )}
          </div>

          <span className='position-absolute top-0 end-0 text-info fs-4 mt-4 pt-1  me-2' onClick={showPassword}>
            {type === 'text' ?  (<FaEye className='mt-1'/>) : (<FaEyeSlash className='mt-1'/>)}
          
          </span>
        </Form.Group>
        <Form.Group>
          {usersError !== '' && (
            <h6 className='text-center text-danger'><FaRegTimesCircle /> Incorrect Email or Password</h6>
          )}
        </Form.Group>

        <Button variant="success w-100 " type="submit">
          Log In
        </Button>
        <div className='text-center mt-3'>
          <h6>
            <Link to='/Signup'>Sign-Up</Link>
          </h6>
        </div>
       </Form>
      </div>
    </div>
    </div>
  )
}

export default Sigein;
