import React, { useState, useEffect } from 'react'
import Header from '../../Components/Header/Header'
import OrderView from '../../Components/OrderView/OrderView'
import { getOrder } from '../../Services/DataService'
import './Order.css'

function Order() {
    const [order, setOrder] = useState([])

    useEffect(() => {
        getOrder().then((response) => setOrder(response.data.data) + console.log(response.data.data))
    }, [])

    return (
        <div>
            <Header />
            <div className='maino' style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                <div style={{ display: "flex", marginLeft: "15%" }}>
                    <h4 style={{ color: "#a4a3a3", fontWeight: "500" }}>Home /</h4>
                    <h4 style={{ fontWeight: "500" }}>My Orders</h4>
                </div>
                <div className='boxo'>
                    {
                        order.map(order => <OrderView order={order}/>)
                    }
                </div>
            </div>
        </div>
    )
}

export default Order