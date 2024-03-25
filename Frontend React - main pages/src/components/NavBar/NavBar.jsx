import Fade from '@mui/material/Fade';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, CardMedia, Divider } from '@mui/material';
import PagesIcon from '@mui/icons-material/Pages';
import HomeIcon from '@mui/icons-material/Home';
import CommuteIcon from '@mui/icons-material/Commute';
import LoginIcon from '@mui/icons-material/Login';
import Person3Icon from '@mui/icons-material/Person3';
import { useGetUserMessage } from '../RecviedMessagesUser/useGetUserMessage';
import { useQueryClient } from '@tanstack/react-query';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: '70px',
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  border: '1px solid #C3D4E9',
  marginRight: theme.spacing(2),
  marginLeft: 0,

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
  color: '#C3D4E9'
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
      width: '20ch',
      color: '#C3D4E9'
    },
  },
}));

function Navbar({ user = {}, cars = [] }) {
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const [pageIconAnchor, setPageIconAnchor] = useState(null);
  const [pageIconUserAnchor, setPageIconUserAnchor] = useState(null);


  const [notifications, setNotifications] = useState(5); // Number of notifications
  const navigate = useNavigate()
  //?-----------------------
  const queryClient = useQueryClient();
  const { data: userMessageData, isLoading: isLoadingMessage, error: errorUserMessage } = useGetUserMessage();
  let unseenMessagesCount = 0;
  if (!errorUserMessage){
     unseenMessagesCount = userMessageData && userMessageData.data ? userMessageData.data.filter(message => !message.seen && message.status==='solved').length : 0;
    // console.log(unseenMessagesCount,"unseenMessagesCount")
  }

 const  handleSeenMessages = ()=>{
  if (unseenMessagesCount>0){
    queryClient.invalidateQueries('userMessages');
  }
   navigate('/user/recviedmessage')
  }
  //?-----------------------
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearchResults, setShowSearchResults] = useState(false);

  const filteredSearchCars = cars?.data?.filter((car) =>
    car.model.toLowerCase().startsWith(searchQuery.toLowerCase()) ||
    car.brand.brand.toLowerCase().startsWith(searchQuery.toLowerCase())
  ) || [];

  const handleSearch = (e) => {
    console.log(e.target.value, "event")
    const value = e.target.value;
    setSearchQuery(value);
    setShowSearchResults(value !== '');
  }

  const handleSearchCarClick = (car) => {
    navigate(`/carDetails`, { state: { car } });
    setShowSearchResults(false);
    setSearchQuery('');
  }

  //?-------------------------
  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const isMenuOpen = Boolean(anchorEl);
//?------------------------------------
// const handleMenuPageOpen = (event) => {
// setPageIconAnchor(event.currentTarget);
// };
const handleClickPage = (event) => {
  setPageIconAnchor(event.currentTarget);
};
const handleClickPageUser = (event) => {
  setPageIconUserAnchor(event.currentTarget);
};
const handleMenuItemClick = (page) => {
  handleMenuPageClose();
  if (page === 'cars') {
   navigate('/cars');
  } else if (page === 'home') {
    navigate('/');
  }
  else if (page === 'user') {
    navigate('/user');
  }

  else if (page === 'login') {
    navigate('/login');
    localStorage.removeItem("token")
  }
  
  
};
const PositionedMenu = (props) => (
  <div {...props}>
    <Menu
      id="pages-menu"
      anchorEl={pageIconAnchor}
      open={Boolean(pageIconAnchor)}
      onClose={handleMenuPageClose}
      TransitionComponent={Fade}
      sx={{ zIndex: 1200, mt: 1.5, boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.15)' }}
    >
      <MenuItem onClick={() => handleMenuItemClick('cars')}><CommuteIcon></CommuteIcon>Cars</MenuItem>
      <MenuItem onClick={() => handleMenuItemClick('home')}><HomeIcon></HomeIcon>Home</MenuItem>
    </Menu>
  </div>
);
//-------////
const PositionedMenuProfile = (props) => (
  <div {...props}>
    <Menu
      id="pages-menu-user"
      anchorEl={pageIconUserAnchor}
      open={Boolean(pageIconUserAnchor)}
      onClose={handleMenuPageUserClose}
      TransitionComponent={Fade}
      sx={{ zIndex: 1200, mt: 1.5, boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.15)' }}
    >
      <MenuItem onClick={() => handleMenuItemClick('user')}><Person3Icon/>Profile</MenuItem>
      <MenuItem onClick={() => handleMenuItemClick('login')}><LoginIcon/>Log Out</MenuItem>
    </Menu>
  </div>
);
///---///
const handleMenuPageClose = () => {
  setPageIconAnchor (null);
};
const handleMenuPageUserClose = () => {
  setPageIconUserAnchor (null);
};
const isMenuPageOpen = Boolean(mobileMoreAnchorEl);
const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  
  const menuId = 'primary-search-account-menu';
////////////// token for user ///////////////
const token= localStorage.getItem("token")
 ///////////////////////////////////////////
 

 
 

  return (
    <Box  sx={{ flexGrow: 1, width: "100%" }}>
      <AppBar position="sticky" top={0} sx={{ backgroundColor: 'white',  }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'center' }}>

          <Typography
            onClick={()=>navigate("/")}
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } ,color:"#3563E9",
            fontSize:"32px",
            fontWeight:700,
            cursor : "pointer",
            font:"Plus Jakarta Sans",
            mr:10,
            ml:2
        }}
          >
            MOTORENT
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', width: '50%', position: 'relative' }}>
            <Search sx={{ flex: 1, maxWidth: '100%', display: 'flex', alignItems: 'center', mr: 2, ml: 2,'& input:focus': {
       
          color: '#000',
        }, }}>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Write something here"
                inputProps={{ 'aria-label': 'search' }}
                fullWidth
                onChange={handleSearch}
                value={searchQuery}
                sx={{ color: 'black' }}

              />
            </Search>
            {/* ************************************* */}
            <Box
              sx={{
                position: 'absolute',
                backgroundColor: 'white',
                width: 'calc(100% - 5%)',
                overflowY: 'scroll',
                cursor: 'pointer',
                top: '100%',
                left: '50%',
                marginTop: '5px',
                transform: 'translateX(-50%)',
                zIndex: '2',
                maxHeight: '300px',
              }}
            >
              {searchQuery &&
                filteredSearchCars.map((car) => (
                  <>
                    <Button
                      key={car._id}
                      onClick={() => handleSearchCarClick(car)}
                      style={{
                        width: '100%',
                        height: '100%',
                        padding: "5px",
                        marginTop: '5px',
                        background: 'none',
                        border: 'none',
                        outline: 'none',
                        display: 'flex'
                      }}
                    >
                      <CardMedia
                        component="img"
                        src={car?.images[0].url}
                        alt="carImg"
                        style={{ width: '25%', maxHeight: '80px' }}
                      />

                      <Typography variant="subtitle1" fontWeight="bold" marginX="auto">
                        {car?.brand?.brand}
                      </Typography>
                      <Typography variant="body2" fontWeight="bold" marginX='auto'>
                        {car?.model}
                      </Typography>
                      <Typography variant="body2" fontWeight="bold" marginX="auto" >
                        ${car?.priceForDay}
                      </Typography>
                    </Button>
                    <Divider />
                  </>
                ))}
            </Box>

          </Box>

          <Box sx={{ flexGrow: 1 }} />
          {token ? (
  <>
    <Box sx={{ flexGrow: 1 }} />
    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
      <IconButton
        size="large"
        aria-label="wishlist"
        color="inherit"
        sx={{ color: '#596780', bgcolor: 'white', borderRadius: '50%', border: '1px solid #C3D4E9', mr: 2 }}
      onClick={()=>{
        navigate('/user/wishlist')
      }}
      >
        <FavoriteIcon />
      </IconButton>
      <IconButton
        size="large"
        aria-label="pages"
        color="inherit"
        aria-controls="pages-menu"
        aria-haspopup="true"
        onClick={handleClickPage}
        sx={{ color: '#596780', bgcolor: 'white', borderRadius: '50%', border: '1px solid #C3D4E9', mr: 2 }}
      >
        <PagesIcon />
      </IconButton>
     <PositionedMenu/>
      
      <IconButton
        size="large"
        aria-label="show 17 new notifications"
        sx={{ color: '#596780', bgcolor: 'white', borderRadius: '50%', border: '1px solid #C3D4E9', mr: 2 }}
        aria-controls="notifications-menu"
        aria-haspopup="true"
        onClick={handleSeenMessages}
        // onClick={handleMenuOpen}
      >
        <Badge badgeContent={unseenMessagesCount} color="error">
          <NotificationsIcon sx={{ "&:hover": { color: "#FBB917" }, "&:click": { color: "#FBB917" } }} />
        </Badge>
      </IconButton>
      {/* <Menu
        id="notifications-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
       
        <MenuItem onClick={handleMenuClose}>Notification 1</MenuItem>
        <MenuItem onClick={handleMenuClose}>Notification 2</MenuItem>
        <MenuItem onClick={handleMenuClose}>Notification 3</MenuItem>
      </Menu> */}
      <IconButton
        size="large"
        aria-label="pages"
        color="inherit"
        aria-controls="pages-menu-user"
        aria-haspopup="true"
        onClick={handleClickPageUser}
        sx={{ color: '#596780', bgcolor: 'white', borderRadius: '50%', border: '1px solid #C3D4E9', mr: 2 }}
      >
        <AccountCircle user={user}/>
      </IconButton>
      <PositionedMenuProfile/>
    </Box>
    
  </>
) : (
  <>
    <Box sx={{ flexGrow: 1 }} />
    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
      <IconButton
        size="large"
        aria-label="wishlist"
        color="inherit"
        sx={{ color: '#596780', bgcolor: 'white', borderRadius: '50%', border: '1px solid #C3D4E9', mr: 2 }}
        onClick={()=>{
        navigate('/login')
     }}
     >
        <LoginIcon />
      </IconButton>
      <IconButton
        size="large"
        aria-label="pages"
        color="inherit"
        aria-controls="pages-menu"
        aria-haspopup="true"
        onClick={handleClickPage}
        sx={{ color: '#596780', bgcolor: 'white', borderRadius: '50%', border: '1px solid #C3D4E9', mr: 2 }}
      >
        <PagesIcon />
      </IconButton>
     <PositionedMenu/>
      {/* <IconButton
        size="large"
        aria-label="show 17 new notifications"
        sx={{ color: '#596780', bgcolor: 'white', borderRadius: '50%', border: '1px solid #C3D4E9', mr: 2 }}
        aria-controls="notifications-menu"
        aria-haspopup="true"
        onClick={handleMenuOpen}
      >
        <Badge badgeContent={notifications} color="error">
          <NotificationsIcon sx={{ "&:hover": { color: "#FBB917" }, "&:click": { color: "#FBB917" } }} />
        </Badge>
      </IconButton> */}
      {/* <Menu
        id="notifications-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleMenuClose}>Notification 1</MenuItem>
        <MenuItem onClick={handleMenuClose}>Notification 2</MenuItem>
        <MenuItem onClick={handleMenuClose}>Notification 3</MenuItem>
      
      </Menu> */}
    
    </Box>
   
  </>
)}

        </Toolbar>
        {/* <Link to={"/cars"}>Cars</Link> */}
      </AppBar>

    </Box>
  );
}

export default Navbar;