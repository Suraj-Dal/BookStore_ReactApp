import React, { useState, useEffect } from 'react'
import Header from '../../Components/Header/Header'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { getCart } from '../../Services/DataService';
import './Cart.css'
import CartView from '../../Components/CartView/CartView';
import Address from '../../Components/Address/Address';

function Cart() {
  const [cart, setCart] = useState([])

  

  useEffect(() => {
    getCart().then((response) => setCart(response.data.data) + console.log(response.data.data))
  }, [])

  return (
    <div>
      <Header />
      <div className='mainc' style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
        <div style={{ display: "flex", marginLeft: "15%" }}>
          <h4 style={{ color: "#a4a3a3", fontWeight: "500" }}>Home /</h4>
          <h4 style={{ fontWeight: "500" }}>My Cart</h4>
        </div>
        <div className='boxc'>
          <div className='navc'>
            <h4>My Cart ({cart.length})</h4>
            <div className='locationc'>
              <LocationOnIcon fontSize='small' style={{ color: "#A03037" }} />
              <h6 style={{ fontWeight: "500", marginRight: "20px" }}>Use current location</h6>
              <ArrowDropDownIcon />
            </div>
          </div>
          <div className='cartdetails' style={{ width: "100%" }}>
            {
              cart.map(cart => <CartView cart={cart} />)
            }
          </div>
          
        </div>
        <div className='addressbox'>
          <Address />
        </div>
      </div>
    </div>
  )
}

export default Cart