import React from 'react'
import { NavLink , Link } from 'react-router-dom';
import { FaHome } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaShoppingBasket } from "react-icons/fa";



const SideBar = () => {
  return (
    <div>
      <div className='d-flex justify-content-start align-items-center my-5 pt-2' style={{color:'white' , backgroundColor: 'black'}}>

        <div>

          <h5>
            <Link to='/ControlPanal' className='text-info text-decoration-none'>
                <FaHome /> <span>Dashboard</span>
            </Link>
          </h5>

          <h5>
            <NavLink to='/ControlPanal/ControlUsers' className='text-decoration-none'>
                <FaUser /> <span>Users</span>
            </NavLink>
          </h5>

          <h5>
            <NavLink to='/ControlPanal/Products' className='text-decoration-none'>
                <FaShoppingBasket /> <span>Products</span>
            </NavLink>
          </h5>
          
        </div>

      </div>
    </div>
  )
}

export default SideBar;
