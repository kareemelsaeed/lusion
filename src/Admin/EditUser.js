import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Controlnav from './Controlnav'
import SideBar from './SideBar'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import Swal from 'sweetalert2';
const EditUser = () => {

    const navigate = useNavigate()
    const {editUser} = useParams()
    const [name, setName] = useState('')
    const [image, setImage] = useState('')
    const [age, setAge] = useState(0)
    const [gender, setGender] = useState(0)
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [role, setRole] = useState('')
    const [id, setID] = useState(0)

    let showProduct = ()=>{
        axios({
            method: 'get',
            url: `http://localhost:9000/users/${editUser}`
        }).then((data)=>{
            setName(data.data.name)
            setImage(data.data.image)
            setAge(data.data.age)
            setGender(data.data.gender)
            setUserName(data.data.userName)
            setPassword(data.data.password)
            setEmail(data.data.email)
            setPhone(data.data.phone)
            setRole(data.data.role)
            setID(data.data.id)
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
                    url:`http://localhost:9000/users/${editUser}`,
                    data:{
                        name,
                        image,
                        age,
                        gender,
                        userName,
                        password,
                        email,
                        phone,
                        role,
                    }
                  }).then((data)=>{
                    navigate('/ControlPanal/ControlUsers')
                  })  
                } 
                }else if (data.isDenied) {
                  Swal.fire('Changes are not saved', '', 'info')
                  navigate('/ControlPanal/ControlUsers')
                }
              })
    
           
      }


  return (
    <div>
      
      <Controlnav />

        <div className='row mt-5 pt-2' style={{margin:0}}>

          <div className='col-lg-2' style={{backgroundColor: 'black'}}>
             <SideBar />
          </div>

          <div className='col-lg-10'>
            <div className='d-flex justify-content-center align-items-center mt-5'>

             <div className='py-3 px-4 border rounded shadow-lg p-3 mb-5 bg-body rounded'>
              <Form onSubmit={FormSubmit} style={{width:'25rem'}}>
                  <Form.Group className="mb-3" controlId="formBasicAdd" >
                    <div className='text-center mb-3 mt-3 text-danger'>
                      <h3>Edite User No <span className='text-info'>{id}</span></h3>
                    </div>  
                    <Form.Label className='text-info fw-bold'>Name</Form.Label>
                    <Form.Control type="search" placeholder="Enter Name" value={name}
                    onChange={(e)=> setName(e.currentTarget.value)}/>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicimage">
                    <Form.Label className='text-info fw-bold'>User image</Form.Label>
                    <Form.Control type="search" placeholder="Enter Image URL" value={image}
                    onChange={(e)=> setImage(e.currentTarget.value)}/>
                    <Form.Text className="text-muted">
                      EX: http://ubbco/Go6DZtR/default-user-image.png
                    </Form.Text>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicage">
                    <Form.Label className='text-info fw-bold'>Age</Form.Label>
                    <Form.Control type="number" placeholder="Enter User Age" value={age}
                    onChange={(e)=> setAge(e.currentTarget.value)}/>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicGender">
                      <Form.Label className='text-info fw-bold'>Gender</Form.Label>
                      <Form.Select aria-label="Default select example" value={gender}
                      onChange={(e)=>setGender(e.currentTarget.value) }>
                          <option>Choose Your Gender</option>                        
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                      </Form.Select>
                  </Form.Group>


                  <Form.Group className="mb-3" controlId="formBasicuserName">
                    <Form.Label className='text-info fw-bold'>userName</Form.Label>
                    <Form.Control type="text" placeholder="Enter userName" value={userName}
                    onChange={(e)=> setUserName(e.currentTarget.value)}/>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className='text-info fw-bold'>password</Form.Label>
                    <Form.Control type="password" placeholder="Enter User password" value={password}
                    onChange={(e)=> setPassword(e.currentTarget.value)}/>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicemail">
                    <Form.Label className='text-info fw-bold'>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter User Email" value={email}
                    onChange={(e)=> setEmail(e.currentTarget.value)}/>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicphone">
                    <Form.Label className='text-info fw-bold'>Phone</Form.Label>
                    <Form.Control type="text" placeholder="Enter User Phone" value={phone}
                    onChange={(e)=> setPhone(e.currentTarget.value)}/>
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

export default EditUser
