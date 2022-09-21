import React, { useState, useEffect } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import { getBookByID } from '../../Services/DataService';

function QuickView(props) {
    const [book, setBook] = useState([])

    useEffect(() => {
       getBookByID(props.wish.bookID).then((response) => setBook(response.data.data) + console.log(response.data.data))
    }, [])

    return (
        <div className='wishlistdetails'>
            <div style={{ display: "flex", gap: "3rem", margin: "20px" }}>
                <div>
                    <img className='bookimgwl' src={book.bookImage} />
                </div>
                <div className='detailwl'>
                    <h3 style={{ margin: "5px" }}>{book.bookName}</h3>
                    <h6 style={{ margin: "5px", color: "#a4a3a3", fontWeight: "500"}}>{book.authorName}</h6>
                    <div style={{display: "flex", alignItems: "center"}}>
                        <h5 style={{ margin: "5px" }}>Rs. {book.discountPrice}</h5>
                        <s style={{ color: "#878787" }}><h6 style={{ color: "#a4a3a3", margin: "0" }}>Rs. {book.price}</h6></s>
                    </div>
                </div>
            </div>
            <DeleteIcon style={{ margin: "20px" }} />
        </div>
    )
}

export default QuickView