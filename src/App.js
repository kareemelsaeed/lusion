import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import ControlPanal from './Admin/ControlPanal'
import ViewProduct from './Admin/ViewProduct'
import Home from './Pages/Home'
import Store from './Store/Store'
import S1 from './Photos/s1.jpg'
import S2 from './Photos/s2.jpg'
import S3 from './Photos/s3.jpg'
import S4 from './Photos/s4.jpg'
import T1 from './Photos/t1.jpg'
import T2 from './Photos/t2.jpg'
import T3 from './Photos/t3.jpg'
import T4 from './Photos/t4.jpg'
import Shop from './Pages/Shop'
import Shopingcart from './Pages/Shopingcart'
import axios from 'axios'
import Sigein from './Pages/Sigein'
import Signup from './Pages/Signup'
import Pay from './Pages/Pay'
import Products from './Admin/Products'
import EditProduct from './Admin/EditProduct'
import AddProduct from './Admin/AddProduct'
import ControlUsers from './Admin/ControlUsers'
import AddUser from './Admin/AddUsers'
import EditUser from './Admin/EditUser'
import ViewUsers from './Admin/ViewUsers'



const App = () => {

    const [items] = useState([
        {id:1, photo:S1 ,name:'Clothing', item:'5'},
        {id:2, photo:S2 ,name:'Bag Brand', item:'20'},
        {id:3, photo:S3 ,name:'Accessories', item:'6'},
        {id:4, photo:S4 ,name:'Shoes', item:'8'}
    ])

    const [bestSell] = useState([
        {id:1, photo:T1 ,name:'Quilted Gilet With Hood', price:'150'},
        {id:2, photo:T2 ,name:'Quilted Gilet With Hood', price:'110'},
        {id:3, photo:T3 ,name:'Quilted Gilet With Hood', price:'200'},
        {id:4, photo:T4 ,name:'Quilted Gilet With Hood', price:'250'},
    ])

    const [product, setProduct] = useState([])
    useEffect(()=>{
        axios({
            method: 'get',
            url: `http://localhost:9000/products`
        }).then((data)=>{
            setProduct(data.data)
        })
    },[])

    const [cart,setCart] = useState([])

    const add = (obj)=>{
        let products = product.map((e)=>{
            if (obj.id === e.id && obj.QutBuy < e.QutAvl) {
                e.QutBuy++
            }
            return e
        })
        let Cart = products.filter((e)=> e.QutBuy > 0)
        setCart(Cart)
    }

    const decreas = (obj)=>{
        let products = product.map((e)=>{
            if (obj.id === e.id && obj.QutBuy > 0) {
                e.QutBuy--
            }
            return e
        })
        let Cart = products.filter((e)=> e.QutBuy > 0)
        setCart(Cart)
    }

    const del = (obj)=>{
        let Cart = cart.filter((e)=> e.id !== obj.id);
        obj.QutBuy = 0;
        setCart(Cart)
    }

    const [price, setPrice] = useState(0)

    const totalPrice = ()=>{
        let price = cart.map((e)=>
            e.QutBuy * e.price
        )
        let finalPrice = price.reduce((a,c)=> a+c )

        setPrice(finalPrice)
    }


    const [users, setUsers] = useState([])

    useEffect(()=>{
        axios({
          method: 'get',
          url: `http://localhost:9000/users`
        }).then((data)=>{
          setUsers(data.data)
        })
      },[])


  return (
    <Store.Provider value={{
        storeItems: items,
        storeBestSell: bestSell,
        storeAdd: add,
        storeCart: cart, 
        storeProduct: product,
        storeDecreas: decreas,
        storeDel: del,
        storeTotalPrice: totalPrice,
        storePrice: price,
        storeUsers: users,
    }}>
        <div>
            
            



            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/Shop' element={<Shop />}/>
                <Route path='/ControlPanal' element={<ControlPanal />}/>
                <Route path='/ControlPanal/ViewProduct/:productID' element={<ViewProduct />}/>
                <Route path='/Shopingcart' element={<Shopingcart />}/>
                <Route path='/Sinein' element={<Sigein />}/>
                <Route path='/Signup' element={<Signup />}/>
                <Route path='/Pay' element={<Pay />}/>
                <Route path='/ControlPanal/Products' element={<Products />}/>
                <Route path='/ControlPanal/ControlUsers' element={<ControlUsers />}/>
                <Route path='/ControlPanal/EditProduct/:editID' element={<EditProduct />}/>
                <Route path='/ControlPanal/AddProduct' element={<AddProduct />}/>
                <Route path='/ControlPanal/AddUser' element={<AddUser />}/>
                <Route path='/ControlPanal/EditUser/:editUser' element={<EditUser />}/>
                <Route path='/ControlPanal/ViewUsers/:userID' element={<ViewUsers />}/>
            </Routes>
        </div>
    </Store.Provider>

  )
}

export default App
