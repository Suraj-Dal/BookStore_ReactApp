import React, { useState, useEffect } from 'react'
import { getWishlist } from '../../Services/DataService'
import Header from '../../Components/Header/Header'
import './Wishlist.css'
import QuickView from '../../Components/QuickView/QuickView'

function Wishlist() {
    const [wishlist, setWishlist] = useState([])
    
    useEffect(() => {
        getWishlist().then((response) => setWishlist(response.data.data) + console.log(response.data.data))
    }, [])

    return (
        <div>
            <Header />
            <div className='mainwl' style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                <div style={{ display: "flex", marginLeft: "15%" }}>
                    <h4 style={{ color: "#a4a3a3", fontWeight: "500" }}>Home /</h4>
                    <h4 style={{ fontWeight: "500" }}>My Wishlist</h4>
                </div>
                <div className='box'>
                    <div className='box1'>
                        <h3 style={{ fontWeight: "600" }}>My Wishlist ({wishlist.length})</h3>
                    </div>
                    <div style={{ width: "100%" }} >
                        {
                            wishlist.map((wish) => <QuickView wish={wish}/>)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Wishlist