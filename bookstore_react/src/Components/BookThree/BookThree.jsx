import React from 'react'
import Header from '../Header/Header'
import { useState, useEffect } from 'react'
import './BookThree.css'
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating'
import TextField from '@mui/material/TextField';
import { addCart, addWishlist, getBookByID } from '../../Services/DataService'
import StarIcon from '@mui/icons-material/Star';

function BookThree() {
  const [books, setBooks] = useState([])
  const cartObj = { CartQty: 1, BookID: Number(books.bookID)}

  const handleWishlist = () =>{
    addWishlist(books.bookID)
    alert("Book added to wishlist.")
  }

  const handleCart = () =>{
    addCart(cartObj)
    alert("Book added to cart.")
  }

  useEffect(() => {
    getBookByID(localStorage.getItem("BookID")).then((response) => setBooks(response.data.data) + console.log(response.data.data))
  }, [])

  return (
    <div>
      <Header />
      <div className='mainqv'>
        <div style={{ display: "flex", marginLeft: "15%" }}>
          <h4 style={{ color: "#a4a3a3", fontWeight: "500" }}>Home /</h4>
          <h4 style={{ fontWeight: "500" }}>Book ({books.bookID})</h4>
        </div>
        <div style={{ display: "flex"}}>
          <div style={{ display: "flex", flexDirection: "column", marginLeft: "14%" }}>
            <img className='bookimgqv' src={books.bookImage} />
            <img className='bookimgqv' src={books.bookImage} />
          </div>
          <div className='boxoneqv'>
            <img className='bigimgqv' src={books.bookImage} />
            <div style={{ marginTop: "10px" }}>
              <Button variant="contained" size='small' style={{ backgroundColor: "#A03037", marginRight: "45px" }} onClick={handleCart}>Add to Bag</Button>
              <Button variant="contained" size='small' style={{ backgroundColor: "#333333" }} onClick={handleWishlist}>Wishlist</Button>
            </div>
          </div>
          <div>
            <div className='boxtwoqv'>
              <h2 style={{ margin: "0" }}>{books.bookName}</h2>
              <h5 style={{ margin: "0", color: "#a4a3a3", fontWeight: "500" }}>by {books.authorName}</h5>
              <button className="ratingbtn">{books.rating} <StarIcon fontSize="smaller"/> </button>
              <div style={{ display: "flex" }}>
                <h3 style={{ margin: "0" }}>Rs. {books.discountPrice}</h3>
                <s style={{ color: "#a4a3a3" }}><h5 style={{ margin: "0", color: "#a4a3a3", fontWeight: "500" }}>Rs. {books.price}</h5></s>
              </div>
              <div style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                paddingTop: "5%",
                borderTop: "1px solid #d6d5d5",
                marginTop: "3%",
                gap: "10px",
                width: "100%"
              }}>
                <h4 style={{ margin: "0", color: "#a4a3a3", fontWeight: "500" }}>Book Details</h4>
                <h5 style={{ margin: "0", textAlign: "start", color: "#a4a3a3", fontWeight: "500" }}>{books.description}</h5>
              </div>
              <div style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                paddingTop: "5%",
                borderTop: "1px solid #d6d5d5",
                marginTop: "3%",
                gap: "10px",
                width: "100%"
              }}>
                <h4 style={{ margin: "0", fontWeight: "600" }}>Customer Feedback</h4>
                <div className='ratingqv'>
                  <h5 style={{ fontWeight: "600", color: "#a4a3a3", margin: "0" }}>Overall rating</h5>
                  <Rating
                    name="simple-controlled"
                  />
                  <TextField
                    className='inputqv'
                    label="Write your review"
                    multiline
                    fullWidth
                    maxRows={4}
                    sx={{margin: "20px 0"}}
                  />
                  <Button variant="contained" size='small' style={{ alignSelf: "flex-end" }}>Submit</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookThree