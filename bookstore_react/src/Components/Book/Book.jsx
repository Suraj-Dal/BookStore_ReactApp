import React from 'react'
import './Book.css'

function Book() {
    return (
        <div className='mainhc'>
            <h3>Books</h3>
            <div className='optionhc'>
                <select className="select" style={{ border: "none" }}>
                    <option value="Sort by relevance">Sort by relevance</option>
                    <option value="A-Z">A-Z</option>
                    <option value="Price(Low-High)">Price(Low-High)</option>
                </select>
            </div>
        </div>
    )
}

export default Book