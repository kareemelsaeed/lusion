import axios from 'axios';
import React, { useContext, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import Naav from '../Components/Naav';
import Store from '../Store/Store';


const Signup = () => {
    const [name, setname] = useState('')
    const [nameError,setNameError ] = useState('Name')
    const [age,setAge] = useState(0)
    const [ageError, setAgeError] = useState('Age')
    const [gender, setGender] = useState('')
    const [genderError, setGenderError] = useState('Gender')
    const [email,setEmail] =useState('')
    const emailCheek = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/ ;
    const [emailError, setEmailError] = useState('Email')
    const [userName, setUserName] = useState('')
    const [userNameError, setUserNameError] =useState('User Name')
    const [password,setPassword] = useState('')
    const [passwordError, setPasswordError] = useState('Password')
    const [confirmPassword,setConfirmPassword] = useState('')
    const [confirmPasswordError, setConfirmPasswordError] = useState('Confirm Password')
    const [phone, setPhone] = useState('')
    const [phoneError, setPhoneError] = useState('Phone')
    const phoneCheek = /^\+(?:[0-9] ?){6,14}[0-9]$/ ;

    const context = useContext(Store)
    let users = context.storeUsers
    const navigate = useNavigate()
    const [usersError, setUsersError] = useState('')

    const handleForm = (e)=>{
        e.preventDefault()
        if (name === '' || !isNaN(name) || name.indexOf(" ") !== -1) {
          setNameError('Invalid Name')
        }else if (age === 0 || age < 0) {
          restValidation()
          setAgeError('Invalid Age')
        }else if (gender === '') {
          restValidation()
          setGenderError('Invalid Gender')
        }else if (!emailCheek.test(email)) {
          restValidation()
          setEmailError('Invalid Email')
        }else if (userName === '' || !isNaN(userName) || userName.indexOf(' ') !== -1) {
          restValidation()
          setUserNameError('Invalid User Name')
        }else if (!phoneCheek.test(phone)) {
          restValidation()
          setPhoneError('Invalid Phone')
        }else if (password === '' || (password.length) < 5) {
          restValidation()
          setPasswordError('Invalid Password')
        }else if (confirmPassword !== password) {
          restValidation()
          setConfirmPasswordError(`Dosen't Match`)
        }else{
          restValidation()
          if (users.length !== 0) {
            let user = users.map((e)=> (e.email))
            let userEmail = user.filter((e)=> e === email)
            if (userEmail.length !== 0) {
              setUsersError('Error')
            }else{
              setUsersError('')
              axios({
                method: "post",
                url: `http://localhost:9000/users`,
                data: {
                  name,
                  age,
                  gender,
                  email,
                  userName,
                  phone,
                  password,
                  role: 'member',
                  image: ''
                }
              }).then((data)=>{
                navigate('/Sinein')
              })
            }
          }
        }
    }



   

    const restValidation = ()=>{
      setNameError('Name')
      setAgeError('Age')
      setGenderError('Gender')
      setEmailError('Email')
      setUserNameError('User Name')
      setPasswordError('Password')
      setPhoneError('Phone')
      setConfirmPasswordError('Confirm Password')
    }
  return (
    <div>
      <Naav />
        <div className='mt-4 pt-2 d-flex align-items-center justify-content-center'>
        <div className='mt-5'>
            <div className='py-4 px-4 border rounded shadow-lg p-3 mb-5 bg-body rounded' style={{width:'22rem'}}>
                <Form onSubmit={handleForm}>
                  <Form.Group className="mb-3 text-center fs-3 fw-bold text-success" controlId="formBasicPassword">
                    <Form.Label>Sign Up</Form.Label>
                  </Form.Group>
                  <Form.Group className="mb-3 text-primary fw-bold" controlId="formBasicName">
                    <Form.Label  className={nameError !== 'Name' && 'text-danger'}>{nameError}</Form.Label>
                    <Form.Control type="search" placeholder="Enter Your Name" value={name}
                    onChange={(e)=>setname(e.currentTarget.value) }/>
                  </Form.Group>

                  <Form.Group className="mb-3 text-primary fw-bold" controlId="formBasicAge">
                    <Form.Label className={ageError !== 'Age' && 'text-danger'}>{ageError}</Form.Label>
                    <Form.Control type="number" placeholder="Age" value={age}
                    onChange={(e)=>setAge(e.currentTarget.value) }/>
                  </Form.Group>

                  <Form.Group className="mb-3 text-primary fw-bold" controlId="formBasicGender">
                    <Form.Label className={genderError !== 'Gender' && 'text-danger'}>{genderError}</Form.Label>
                    <Form.Select aria-label="Default select example" value={gender}
                    onChange={(e)=>setGender(e.currentTarget.value) }>
                        <option>Choose Your Gender</option>                        
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group className="mb-3 text-primary fw-bold" controlId="formBasicEmail">
                    <Form.Label className={emailError !== 'Email' && 'text-danger'}>{emailError}</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" value={email}
                    onChange={(e)=>setEmail(e.currentTarget.value)}/>
                  </Form.Group>

                  <Form.Group className="mb-3 text-primary fw-bold" controlId="formBasicUserName">
                    <Form.Label className={userNameError !== 'User Name' && 'text-danger'}>{userNameError}</Form.Label>
                    <Form.Control type="search" placeholder="Enter User Name" value={userName}
                    onChange={(e)=>setUserName(e.currentTarget.value)}/>
                  </Form.Group>

                  <Form.Group className="mb-3 text-primary fw-bold" controlId="formBasicUserphone">
                    <Form.Label className={phoneError !== 'Phone' && 'text-danger'}>{phoneError}</Form.Label>
                    <Form.Control type="search" placeholder="Enter User Phone" value={phone}
                    onChange={(e)=>setPhone(e.currentTarget.value)}/>
                  </Form.Group>

                  <Form.Group className="mb-3 text-primary fw-bold" controlId="formBasicPassword">
                    <Form.Label className={passwordError !== 'Password' && 'text-danger'}>{passwordError}</Form.Label>
                    <Form.Control type="password" placeholder="Password" value={password}
                    onChange={(e)=>setPassword(e.currentTarget.value)}/>
                  </Form.Group>

                  <Form.Group className="mb-3 text-primary fw-bold" controlId="formBasicConfirmPassword">
                    <Form.Label className={confirmPasswordError !== 'Confirm Password' && 'text-danger'}>{confirmPasswordError}</Form.Label>
                    <Form.Control type="password" placeholder="Confirm Password" value={confirmPassword}
                    onChange={(e)=>setConfirmPassword(e.currentTarget.value)}/>
                  </Form.Group>      

                  <Form.Group>
                    {usersError !== '' && (
                      <div>
                        <h6 className='text-center text-danger fs-4'> Email Already Exist</h6>
                        <div className='text-center fs-6 fw-bold'>
                          <Link to='/Sinein'>Go To Sign In Page</Link>
                        </div>
                      </div>
                    )}
                  </Form.Group>

                  <Button variant="success w-100 mt-2" type="submit">
                    Sign Up
                  </Button>
                </Form>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Signup
