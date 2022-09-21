import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route
  } from 'react-router-dom';
import Forget from '../Components/Forget/Forget';
import Account from '../Pages/Account/Account';
import Reset from '../Components/Reset/Reset';
import Dashboard from '../Pages/Dashboard/Dashboard';
import BookThree from '../Components/BookThree/BookThree';
import Wishlist from '../Pages/Wishlist/Wishlist';
import Order from '../Pages/Order/Order';
import Cart from '../Pages/Cart/Cart'
import OrderPlaced from '../Components/OrderPlaced/OrderPlaced';

function RouterComponent() {
  return (
    <div>
        <Router>
        <Routes>
          <Route path="/" element={<Account />} />
          <Route path="/Forget" element={<Forget />} />
          <Route path="/Reset" element={<Reset />} />
          <Route path="/Dashboard" element={<Dashboard />}/>
          <Route path="/Book" element={<BookThree />} />
          <Route path="/Wishlist" element={<Wishlist />} />
          <Route path="/Order" element={<Order />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/OrderPlaced" element={<OrderPlaced />} />
        </Routes>
      </Router>
    </div>
  )
}

export default RouterComponent