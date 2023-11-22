import * as React from 'react';
import Book from '../Asserts/education.png'
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MoreIcon from '@mui/icons-material/MoreVert';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import './Header.css'
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Button } from '@mui/material';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import { useNavigate } from "react-router-dom"
import { jwtDecode } from 'jwt-decode';



const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 1),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.85),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '70ch',
        },
    },
}));

export default function Header() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
    const usernameToken = () => {
        const token = localStorage.getItem('Token');
        try {
            const decodedToken = jwtDecode(token);
            console.log(decodedToken);
            return decodedToken.unique_name;
        } catch (error) {
            console.error('Error decoding token:', error);
            return 'Guest';

        }
    };
    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };
    const navigate = useNavigate();

    const signin = () => {

        navigate("/signIn")

    }
    const signout = () => {

        localStorage.removeItem("Token")
    }
    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
            }}
            sx={{
                height: '90vh',
                marginTop: '6ch',
                marginLeft: '24ch'

            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: 'bottom',
                horizontal: 'right',

            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            {localStorage.getItem('Token') ? (
                <div className='label-lh'>
                    <p><b>Hello {usernameToken()}</b></p>
                    <div className='profile-lh'>
                        <PermIdentityIcon sx={{
                            paddingTop: '5px',
                            color: 'gray',
                            width: '1vw'

                        }} />
                        <MenuItem >Profile </MenuItem>
                    </div>
                    <div className='order-lh'>
                        <Inventory2OutlinedIcon sx={{
                            paddingTop: '5px',
                            color: 'gray',
                            width: '1vw'

                        }} />
                        <MenuItem >My Order</MenuItem>
                    </div>
                    <div className='list-lh'>
                        <FavoriteBorderOutlinedIcon sx={{
                            paddingTop: '5px',
                            color: 'gray',
                            width: '1vw'
                        }} />
                        <MenuItem >My Whishlist</MenuItem>
                    </div>
                    <div>
                        <Button type='submit' variant='contained' onClick={signout}
                            sx={{
                                color: 'red',
                                backgroundColor: 'white', border: '1px solid red',
                                '&:hover': {
                                    backgroundColor: 'rgba(0, 0, 0, 0.15)',
                                }
                            }}>LogOut</Button>

                    </div>

                </div>
            ) : (

                <div className='label-h'>
                    <p><b>Welcome</b></p>
                    <p>To access account and mange orders</p>
                    <Button type='submit' variant='contained' onClick={signin}
                        sx={{
                            color: 'red',
                            backgroundColor: 'white', border: '1px solid red',
                            '&:hover': {
                                backgroundColor: 'rgba(0, 0, 0, 0.15)',
                            }
                        }}>
                        Login/SignUp</Button>
                    <hr />
                    <div className='order-h'>
                        <Inventory2OutlinedIcon sx={{
                            paddingTop: '5px',
                            color: 'gray',
                            width: '1vw'

                        }} />
                        <MenuItem onClick={signin}>My Order</MenuItem>
                    </div>
                    <div className='wish-h'>
                        <FavoriteBorderOutlinedIcon sx={{
                            paddingTop: '5px',
                            color: 'gray',
                            width: '1vw'
                        }} />
                        <MenuItem onClick={signin}>WhishList</MenuItem>
                    </div>
                </div>
            )}
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',

            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >


            <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <AccountCircle />
                </IconButton>
                <p>Profile</p>
            </MenuItem>
        </Menu>
    );

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" >
                <Toolbar className='tool-h'>
                    <img src={Book} width={29} height={23} className='img-h' ></img>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ display: { xs: 'none', sm: 'block' }, marginRight: '2ch' }}
                    >
                        BookStore
                    </Typography>
                    <Search>
                        <SearchIconWrapper sx={{ color: 'black' }}>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"

                            inputProps={{ 'aria-label': 'search' }}
                            sx={{
                                color: 'black'
                            }}
                        />
                    </Search>
                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{
                        display: { xs: 'none', md: 'flex' },
                        border: '0.5px solid black',
                    }} className='icon-box'>

                        <IconButton
                            size="large"
                            edge="end"
                            aria-label="account of current user"
                            aria-controls={menuId}
                            aria-haspopup="true"
                            onClick={handleProfileMenuOpen}
                            color="inherit"



                        >
                            <div>
                            <PermIdentityIcon className='profile-h' />
                            <p className='untoken'>{usernameToken()}</p>
                            </div>
                        </IconButton>
                        <div className='vertical'>

                        </div>
                        <IconButton
                            color='inherit'>
                            <div>
                            <ShoppingCartOutlinedIcon className='cart-h' />
                            <p className='cart-p'>Cart</p>
                            </div>
                        </IconButton>
                    </Box>
                    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <MoreIcon />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
            {renderMobileMenu}
            {renderMenu}
        </Box>
    );
}