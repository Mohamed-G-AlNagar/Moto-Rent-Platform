import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import { Stack } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Navbar from '../../components/NavBar/NavBar'; 
import SiderBarUser from '../../components/SiderBarUserProfile/SiderBarUserProfile';
import { RentedCars } from '../../components/RentedCars/RentedCars';
import UserSendMessageForm from '../../components/sendMessagesForm/SendMessagesForm';


const UserProfille = () => {
  const drawerWidth = 25;
  return (
     <>
      <CssBaseline />
      <Stack sx={{ width:{ sm:`calc(100% - ${drawerWidth}%)` }, ml:`${drawerWidth}%` }}>
      <Navbar></Navbar>
      <UserSendMessageForm></UserSendMessageForm>
      {/* <RentedCars></RentedCars> */}
      </Stack>
      <SiderBarUser DrawerWidth={drawerWidth} />
      <Stack direction="row" spacing={2} sx={{ p: 2 }}>
        <Box sx={{ backgroundColor: '#fff', borderRadius: '10px', flex: '1' }}>
          <Outlet></Outlet>
        </Box>
      </Stack>
      </>
  );
};

export default UserProfille;