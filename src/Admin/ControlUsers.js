import React, { useEffect, useState } from 'react'
import Controlnav from './Controlnav'
import Table from 'react-bootstrap/Table';
import SideBar from './SideBar';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import Swal from 'sweetalert2';



const ControlUsers = () => {

    const [users, setUsers] = useState([])


    const showUsers = ()=>{
      axios({
        method: 'get',
        url: `http://localhost:9000/users`
      }).then((data)=>{
          setUsers(data.data)
      })
    }


    const deletuser =(user)=>{
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
                        url: `http://localhost:9000/users/${user.id}`
                    }).then(()=>{
                    });
                    
                    showUsers()
                }
            })
    }


    useEffect(()=>{
      showUsers()
    },[])

    const makeAdmie = (user)=>{
       users.map((e)=>{
        if (user.id === e.id) {
          if (e.role === "Admin") {
            e.role = 'member'
          }else{
            e.role = 'Admin'
          }
        }
        return user
      })
      axios({
        method: 'put',
        url: `http://localhost:9000/users/${user.id}`,
        data: {
          name: user.name ,
          image: user.image,
          age: user.age,
          gender: user.gender,
          userName: user.userName,
          password: user.password,
          email: user.email,
          phone: user.phone,
          role: user.role
        }
      }).then((data)=>{
        showUsers()
      })
    }


  return (
    <div>
        <Controlnav />
        <div>

        <div className='row mt-5 pt-2' style={{margin:0}}>

            <div className='col-lg-2 col-sm-12' style={{backgroundColor: 'black'}}>
                <SideBar />
            </div>

            <div className='col-lg-10 col-sm-12' style={{height: '92.2vh'}}>

              <div className='mt-4 mb-4'>
                  <Link to='/ControlPanal/AddUser'>
                      <Button>Add To Users</Button>
                  </Link>
              </div>

              <Table striped bordered hover variant="dark">
                <thead>
                  <tr>
                    <th className='text-center'>ID</th>
                    <th className='text-center'>User Image</th>
                    <th className='text-center'>User Name</th>
                    <th className='text-center'>Phone</th>
                    <th className='text-center'>Age</th>
                    <th className='text-center'>Gender</th>
                    <th className='text-center'>Controls</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user)=>(
                    <tr key={user.id}>
                      <td className='text-center' style={{width:'5rem' , height:'2.5rem'}}>{user.id}</td>
                      <td className='text-center' style={{width:'6rem' , height:'3rem', padding:'2px'}}><img src={user.image} style={{width:'2rem' , height:'3rem'}} alt=""/></td>
                      <td className='text-center' style={{width:'6rem' , height:'3rem'}}>{user.name}</td>
                      <td className='text-center' style={{width:'5rem' , height:'3rem'}}>{user.phone}</td>
                      <td className='text-center' style={{width:'5rem' , height:'3rem'}}>{user.age}</td>
                      <td className='text-center' style={{width:'5rem' , height:'3rem'}}>{user.gender}</td>
                      <td className='d-flex justify-content-between align-items-center'>
                         <Link to={`/ControlPanal/Edituser/${user.id}`}>
                              <Button variant='outline-warning'>Edite</Button>
                         </Link>
                         <Link to={`/ControlPanal/ViewUsers/${user.id}`}>
                              <Button variant='outline-info'>View</Button>
                         </Link>
                         <Button variant='outline-danger' onClick={()=>deletuser(user)}>Delete</Button>
                         <Button variant={user.role === 'Admin' ? 'secondary' : 'success'} style={{width:'9rem'}} onClick={()=>makeAdmie(user)}>{user.role === 'Admin' ? 'Remove Admin' : 'Make Admin'}</Button>
                
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

export default ControlUsers
