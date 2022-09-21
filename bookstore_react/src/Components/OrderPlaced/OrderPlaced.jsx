import React from 'react'
import placed from '../../Assets/placed.png'
import Button from '@mui/material/Button';
import Header from '../Header/Header';

function OrderPlaced() {
    return (
        <div>
            <Header />
            <img src={placed} />
            <h4 style={{ color: "#a4a3a3", fontWeight: "500" }}>hurray!!!your order is confirmed</h4>
            <div style={{
                marginLeft: "25%",
                display: "flex",
                justifyContent: "center",
                justifyContent: "space-evenly",
                width: "50%",
                border: "1px solid #a4a3a3",
                boxShadow: "0px 0px 6px 1px rgba(0,0,0,0.3)"
            }}>
                <h6>Email us</h6>
                <h6>Contact us</h6>
                <h6>Address</h6>
            </div>
            <div style={{
                marginLeft: "25%",
                display: "flex",
                justifyContent: "center",
                justifyContent: "space-evenly",
                width: "50%",
                border: "1px solid #a4a3a3",
                boxShadow: "0px 0px 6px 1px rgba(0,0,0,0.3)"
            }}>
                <h6>Email us</h6>
                <h6>Contact us</h6>
                <h6>Address</h6>
            </div>
            <div style={{marginTop: "30px"}}>
            <Button variant="contained">Continue Shoppiing</Button>
            </div>
        </div>
    )
}

export default OrderPlaced