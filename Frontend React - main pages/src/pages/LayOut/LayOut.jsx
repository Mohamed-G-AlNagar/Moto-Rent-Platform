import React from 'react'
import Navbar from '../../components/NavBar/NavBar'
import Footer from '../../components/Footer/Footer'
import { Outlet } from 'react-router-dom'
import LoadingIndicator from '../../ui/LoadingIndicator';
import useUser from '../Auth/useUser';

export default function LayOut() {
    const { data: user, isLoading : LoadingUser } = useUser();
  return (
    <div>
      {LoadingUser && <LoadingIndicator load={LoadingUser}/>}  
        <Navbar user={user}/>
      <Outlet />
      <Footer />
    </div>
  )
}
