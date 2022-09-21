import React, { useState, useEffect } from 'react'
import Book from '../../Components/Book/Book'
import BookTwo from '../../Components/BookTwo/BookTwo'
import Header from '../../Components/Header/Header'
import { getBooks } from '../../Services/DataService'

function Dashboard() {
    const [books, setBooks] = useState([])

    useEffect( () => {
        getBooks().then( (response) => setBooks(response.data.data) + console.log(response.data.data))
    }, [])


  return (
    <div>
        <Header />
        <Book />
        <div
        style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            marginLeft: "14%",
            marginRight: "14%",
            gap: "20px"
          }}>
            {
                books.map(book => <BookTwo book={book} />)
            }
        </div>
    </div>
  )
}

export default Dashboard