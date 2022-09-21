import React from 'react'
import { useState, useEffect } from 'react'
import { addOrder, getBookByID } from '../../Services/DataService'
import Button from '@mui/material/Button';
import {useNavigate} from 'react-router-dom'

function CartView(props) {
    const navigate = useNavigate()
    const [book, setBook] = useState([])
    let [count, setCount] = useState(1)
    const [orderObj, setOrderObj] = useState({AddressID: 1, CartID: Number(props.cart.cartID)})

    function incrementCount() {
        count = count + 1
        setCount(count)
    }
    function decrementCount() {
        count = count - 1
        setCount(count)
    }

    const placeOrder = async () => {
        let response = await addOrder(orderObj)
        console.log(response)
        navigate('/OrderPlaced')
    }

    useEffect(() => {
        getBookByID(props.cart.bookID).then((response) => setBook(response.data.data) + console.log(response.data.data))
    }, [])

    return (
        <div>
            <div style={{ display: "flex", gap: "3rem", margin: "20px" }}>
                <div>
                    <img className='bookimgc' src={book.bookImage} />
                </div>
                <div className='detailc'>
                    <h3 style={{ margin: "5px" }}>{book.bookName}</h3>
                    <h6 style={{ margin: "5px", color: "#a4a3a3", fontWeight: "400" }}>by {book.authorName}</h6>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <h5 style={{ margin: "5px" }}>Rs. {book.discountPrice}</h5>
                        <s style={{ color: "#878787" }}><h6 style={{ color: "#a4a3a3", margin: "0" }}>Rs. {book.price}</h6></s>
                    </div>
                    <div className='qtycart'>
                        <button onClick={incrementCount}>+</button>
                        <div>{count}</div>
                        <button onClick={decrementCount}>-</button>
                    </div>
                </div>
                <div style={{ margin: "20px", alignSelf: "flex-end" }}>
                    <Button variant="contained" onClick={placeOrder}>Place Order</Button>
                </div>
            </div>
        </div>
    )
}

export default CartView