import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Controlnav from './Controlnav';
import SideBar from './SideBar';
import Card from 'react-bootstrap/Card';
import { Badge, Button } from 'react-bootstrap';


const ViewUsers = () => {

    const {userID} = useParams()
    const [user, setuser] = useState({})

    let showProduct = ()=>{
        axios({
            method: 'get',
            url: `http://localhost:9000/users/${userID}`
        }).then((data)=>{
            setuser(data.data)
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
              <Card.Img variant="top"  src={user.image} style={{ height: '16rem' }}/>
              <Card.Body>
                <Card.Title className='d-flex justify-content-md-between'>
                  <span>{user.name}</span>
                  <span style={{fontSize:'15px'}}>Age: <Badge>{user.age}</Badge></span>
                </Card.Title>
                <Card.Text className='mt-3 fw-bold'>
                  <span>User No: #<span className='text-info'>{user.id}</span></span>
                </Card.Text>
                <Card.Text className='fw-bold'>
                  <span>User Name: <span className='text-danger'>{user.userName}</span></span>
                </Card.Text>
                <Card.Text className='fw-bold'>
                  <span>User Phone: <span className='text-primary'>{user.phone}</span></span>
                </Card.Text>
                <div className='text-center bg-warning py-2 mb-2'>
                    <Card.Text className='fw-bold'>
                      <span>User Role: <span className='text-danger'>{user.role}</span></span>
                    </Card.Text>
                </div>
                <div className='text-center'>
                  <Link to='/ControlPanal/ControlUsers'>
                    <Button variant="success">Back To Users</Button>
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

export default ViewUsers
