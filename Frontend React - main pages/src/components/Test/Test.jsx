import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Badge, Fade, InputBase, Menu, MenuItem } from '@mui/material';
import { AccountCircle,   Search } from '@mui/icons-material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Person2Icon from "@mui/icons-material/Person2";
import LockResetIcon from '@mui/icons-material/LockReset';
import GarageIcon from "@mui/icons-material/Garage";
import NoCrashIcon from "@mui/icons-material/NoCrash";
import EmailIcon from "@mui/icons-material/Email";
import SendIcon from "@mui/icons-material/Send";
import LogoutIcon from "@mui/icons-material/Logout";
import Collapse from "@mui/material/Collapse";
import MarkEmailUnreadIcon from "@mui/icons-material/MarkEmailUnread";
import { Outlet, useNavigate } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { useState } from 'react';
import PagesIcon from '@mui/icons-material/Pages';
import Person3Icon from '@mui/icons-material/Person3';
import CommuteIcon from '@mui/icons-material/Commute';
import LoginIcon from '@mui/icons-material/Login';
import Footer from '../Footer/Footer';
import { useGetUserMessage } from '../RecviedMessagesUser/useGetUserMessage';
import axios from 'axios';
import { useQueryClient } from '@tanstack/react-query';



const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);
// const Search = styled('div')(({ theme }) => ({
//   position: 'relative',
//   borderRadius: '70px',
//   backgroundColor: alpha(theme.palette.common.white, 0.15),
//   '&:hover': {
//     backgroundColor: alpha(theme.palette.common.white, 0.25),
//   },
//   border: '1px solid #C3D4E9',
//   marginRight: theme.spacing(2),
//   marginLeft: 0,

//   [theme.breakpoints.up('sm')]: {
//     marginLeft: theme.spacing(3),
//     width: 'auto',
//   },
// }));

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


const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));


  const PersistentDrawerLeft = () => {
    //?-------------------------------------------------------
    const queryClient = useQueryClient();
    const { data: userMessageData, isLoading: isLoadingMessage, error: errorUserMessage } = useGetUserMessage();
    const unseenMessagesCount = userMessageData && userMessageData.data ? userMessageData.data.filter(message => !message.seen && message.status==='solved').length : 0;
console.log(unseenMessagesCount,"unseenMessagesCount")

const handleSeenMessages = async ()=>{
if (unseenMessagesCount>0){

  const {data,error} = await axios.get('http://localhost:3000/api/v1/messages/seenMyMessages',{
    headers:{
      Authorization: `Bearer ${localStorage.getItem("token")}`
  }
  })
if (error) console.log(error,"error")
if (data){

  queryClient.invalidateQueries('userMessages');
} 
}
}
//?-----------------------------------------------------------------
    const [anchorEl, setAnchorEl] = useState(null);
const [notifications, setNotifications] = useState(5); // Number of notifications
const handleDrawerOpen = () => {
  setOpen(true);
};
const handleMenuOpen = (event) => {
  setAnchorEl(event.currentTarget);
};

const handleMenuClose = () => {
  setAnchorEl(null);
};
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const navigate = useNavigate();
  const handleClick = () => {
    setOpen(!open);
  };

  const [pageIconAnchor, setPageIconAnchor] = useState(null);
  const [pageIconUserAnchor, setPageIconUserAnchor] = useState(null);
  const token=localStorage.getItem('token')

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
      localStorage.removeItem(token)
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
        <MenuItem onClick={() => handleMenuItemClick('cars')}><CommuteIcon/>Cars</MenuItem>
        <MenuItem onClick={() => handleMenuItemClick('home')}><HomeIcon/>Home</MenuItem>
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
        <MenuItem onClick={() => handleMenuItemClick('login')}><LogoutIcon/>Log Out</MenuItem>
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

  const handleDrawerClose = () => {
    setOpen(false);
  };
  // const handleProfileMenuOpen = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };


  return (
    <Box sx={{ display: 'flex', }}>
      <CssBaseline />
      <AppBar sx={{backgroundColor:"white"}} position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon sx={{color:"#3563E9"}} />
          </IconButton>
          <Typography variant="h6" noWrap component="div" sx={{color:"#3563E9",
            fontSize:"32px",
            fontWeight:700,
            font:"Plus Jakarta Sans" }}>MOTORENT</Typography>
          <Box sx={{ display: { xs: 'none',sm:"flex", md: 'flex' },justifyContent:"flex-end" ,flexGrow:1}} >


            <IconButton
              size="large"
              aria-label="wishlist"
              color="inherit"
              sx={{ color: '#596780', bgcolor: 'white', borderRadius: '50%', border: '1px solid #C3D4E9', mr: 2 }}
            >
              <FavoriteIcon sx={{"&:hover":{color:"#8b0000"}}}  />
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
        onClick={handleMenuOpen}
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
        <AccountCircle />
      </IconButton>
      <PositionedMenuProfile/>
          </Box>
         
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton >
         <Typography variant='span'sx={{color:"#3563E9",
            fontSize:"18px",
            fontWeight:700,
            font:"Plus Jakarta Sans" }}> Close </Typography>
        </DrawerHeader>
        <Divider />
        <List>
          <ListItemButton
            onClick={() => {
              navigate("/");
            }}
          >
            <ListItemIcon>
              <HomeIcon sx={{ color: "#3563E9" }} />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItemButton>
          <ListItemButton 
            onClick={() => {
              navigate("./profiledetalis");
            }}
          >
            <ListItemIcon>
              <Person2Icon sx={{ color: "#3563E9" }} />
            </ListItemIcon>
            <ListItemText primary="Profile Details" />
          </ListItemButton>

          <ListItemButton 
            onClick={() => {
              navigate("./updatepassword");
            }}
          >
            <ListItemIcon>
              <LockResetIcon sx={{ color: "#3563E9" }} />
            </ListItemIcon>
            <ListItemText primary="Update Password" />
          </ListItemButton>

          <ListItemButton 
            onClick={() => {
              navigate("wishlist");
            }}
          >
            <ListItemIcon>
              <FavoriteIcon sx={{ color: "#3563E9" }} />
            </ListItemIcon>
            <ListItemText primary="Wish List" />
          </ListItemButton>

          <ListItemButton
            onClick={() => {
              navigate("./history");
            }}
          >
            <ListItemIcon>
              <GarageIcon sx={{ color: "#3563E9" }} />
            </ListItemIcon>
            <ListItemText primary="My history" />
          </ListItemButton>


          <ListItemButton
            onClick={() => {
              navigate("./collection");
            }}
          >
            <ListItemIcon>
              <NoCrashIcon sx={{ color: "#3563E9" }} />
            </ListItemIcon>
            <ListItemText primary="My Collection" />
          </ListItemButton>
          <ListItemButton onClick={handleClick}>
            <ListItemIcon>
              <EmailIcon sx={{ color: "#3563E9" }} />
            </ListItemIcon>
            <ListItemText primary="Messages" />
          </ListItemButton>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton
                sx={{ pl: 4 }}
                onClick={() => {
                  navigate("./sendmessage");
                }}
              >
                <ListItemIcon>
                  <SendIcon sx={{ color: "#3563E9" }} />
                </ListItemIcon>
                <ListItemText primary="Send Message" />
              </ListItemButton>

              <ListItemButton
                sx={{ pl: 4 }}
                onClick={() => {
                  handleSeenMessages();
                  navigate("./recviedmessage");
                }}
              >
                <ListItemIcon>
                <Badge badgeContent={unseenMessagesCount} color="error">
                  <MarkEmailUnreadIcon sx={{ color: "#3563E9" }} />
                  </Badge>
                </ListItemIcon>
                <ListItemText primary="Recivied Messages" />
              </ListItemButton>
            </List>
          </Collapse>

          <ListItemButton
            onClick={() => {
              localStorage.removeItem("token");
              navigate("/login");
            }}
          >
            <ListItemIcon>
              <LogoutIcon sx={{ color: "#3563E9" }} />
            </ListItemIcon>
            <ListItemText primary=" Log out" />
          </ListItemButton>
        </List>
        {/* <Divider /> */}
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        <Box sx={{boxShadow:5 ,
      bgcolor:"background.paper",
      p:10, mb:20 ,borderRadius:"10px" }}>


      
       <Outlet></Outlet>
       
       </Box>
       <Footer/>
      </Main>
    </Box>
  );
};
export default PersistentDrawerLeft