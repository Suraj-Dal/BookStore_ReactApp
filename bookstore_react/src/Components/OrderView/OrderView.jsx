import React from 'react'
import { useState, useEffect } from 'react'
import { getBookByID } from '../../Services/DataService'
import CircleIcon from '@mui/icons-material/Circle';

function OrderView(props) {
    const [book, setBook] = useState([])
    
    useEffect(() => {
        getBookByID(props.order.bookID).then((response) => setBook(response.data.data) + console.log(response.data.data))
    }, [])

    return (
        <div className='orderdetails' style={{ width: "100%" }}>
            <div style={{ display: "flex", gap: "3rem", margin: "20px" }}>
                <div>
                    <img className='bookimgwl' src={book.bookImage} />
                </div>
                <div className='detailo'>
                    <h3 style={{ margin: "5px" }}>{book.bookName}</h3>
                    <h6 style={{ margin: "5px", color: "#a4a3a3", fontWeight: "500" }}>by {book.authorName}</h6>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <h5 style={{ margin: "5px" }}>Rs. {book.discountPrice}</h5>
                        <s style={{ color: "#878787" }}><h6 style={{ color: "#a4a3a3", margin: "0" }}>Rs. {book.price}</h6></s>
                    </div>
                </div>
            </div>
            <div style={{display: "flex", alignItems: "center", gap: "5px", marginRight: "10px"}}>
                <CircleIcon style={{height: "9px", width: "9px", color: "#26A541"}}/>
                <h5>Order Placed on {props.order.dateTime}</h5>
            </div>
        </div>
    )
}

export default OrderView