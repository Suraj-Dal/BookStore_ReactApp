import React from 'react'
import bookimg from '../../Assets/book.png'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

function Header() {
    return (
        <div>
            <div className='headhc'>
                <div className='logohc'>
                    <img src={bookimg} style={{ width: "28px", height: "23px" }} />
                    <h4 style={{ fontWeight: "500", color: "white" }}>BookStore</h4>
                </div>
                <div className='searchhc'>
                    <SearchIcon fontSize="medium" />
                    <input type="text" placeholder="Search" />
                </div>
                <div className='buttonhc'>
                    <div className='profilehc'>
                        <PersonOutlineIcon fontSize='small' />
                        <h6 style={{margin: "0", fontWeight: "light"}}>Profile</h6>
                    </div>
                    <div className='carthc'>
                        <ShoppingCartOutlinedIcon fontSize='small'/>
                        <h6 style={{margin: "0", fontWeight: "light"}}>Cart</h6>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header