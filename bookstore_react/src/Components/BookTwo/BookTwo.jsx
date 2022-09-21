import React from 'react'
import './BookTwo.css'
import Rating from '@mui/material/Rating'
import { useNavigate } from 'react-router-dom'


function BookTwo(props) {
    const navigate = useNavigate()

    const handleClick = () => {
        localStorage.setItem("BookID", props.book.bookID)
        navigate('/Book')
    }
    return (
        <div className='booktemp' onClick={handleClick}>
            <div>
                <img className='bookimg' src={props.book.bookImage}/>
            </div>
            <div className='detailbt'>
                <h4 style={{ margin: "0", fontWeight: "500" }}>{props.book.bookName}</h4>
                <h6 style={{ color: "#878787", margin: "0", fontWeight: "lighter" }}>by {props.book.authorName}</h6>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        flexWrap: "wrap",
                        alignItems: "center"
                    }}>
                    <Rating name="read-only" value={props.book.rating} readOnly size='small' />
                    <h6 style={{ color: "#878787", margin: "0" }}>({props.book.peopleRated})</h6>
                </div>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        flexWrap: "wrap",
                        alignItems: "center",
                        gap: "5px"
                    }}>
                    <h5 style={{ margin: "0" }}>Rs. {props.book.discountPrice}</h5>
                    <s style={{ color: "#878787" }}><h6 style={{ color: "#a4a3a3", margin: "0" }}>Rs. {props.book.price}</h6></s>
                </div>
            </div>
        </div>
    )
}

export default BookTwo