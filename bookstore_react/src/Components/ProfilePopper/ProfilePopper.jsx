import React from 'react'
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { useNavigate } from 'react-router-dom'

function ProfilePopper(props) {
    const navigate = useNavigate()
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };

    const handleLogout = () =>{
        navigate('/')
    }
    const handleHome = () =>{
        navigate('/Dashboard')
    }
    const handleWishlist = () =>{
        navigate('/Wishlist')
    }
    const handleOrder = () => {
        navigate('/Order')
    }

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popper' : undefined;

    return (
        <div>
            <div className='profilehc' onClick={handleClick}>
                <PersonOutlineIcon fontSize='small' />
                <h6 style={{ margin: "0", fontWeight: "light" }}>Profile</h6>
            </div>
            <Popper id={id} open={open} anchorEl={anchorEl}>
                <div style={{padding: "10px", backgroundColor: 'white', display: "flex", flexDirection: "column", flexWrap: "wrap", boxShadow: '1px 1px 6px 1px rgba(0,0,0,0.3)', borderRadius: "3px" }}>
                <Box sx={{p:0.5, cursor: "pointer"}}>
                    <h5 style={{margin: "5px", fontWeight: "500"}} onClick={handleHome}>Home</h5>
                </Box>
                <Box sx={{p:0.5, cursor: "pointer", borderTop: "1px solid #a4a3a3"}}>
                    <h5 style={{margin: "5px", fontWeight: "500"}} onClick={handleWishlist}>Wishlist</h5>
                </Box>
                <Box sx={{p:0.5, borderTop: "1px solid #a4a3a3", cursor: "pointer"}}>
                    <h5 style={{margin: "5px", fontWeight: "500"}} onClick={handleOrder}>My Orders</h5>
                </Box>
                <Box sx={{p:0.5, borderTop: "1px solid #a4a3a3", cursor: "pointer"}}>
                    <h5 style={{margin: "5px", fontWeight: "500"}} onClick={handleLogout}>Logout</h5>
                </Box>
                </div>
            </Popper>
        </div>
    )
}

export default ProfilePopper