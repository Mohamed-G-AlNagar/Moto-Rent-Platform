// import { Box, Grid } from '@mui/material';
// import React, { useEffect, useState } from 'react';
// import Navbar from '../../../components/NavBar/NavBar';
// import image from '../../../assets/emailConfirm2.jpg'
// import LoadingIndicator from '../../../ui/LoadingIndicator';
// import { useParams } from 'react-router-dom';
// import verifyEmail  from './VerifyEmail';

// function VerifyEmail() {
//     const [isLoading, setIsLoading] = useState(false);
//     const { verifyToken } = useParams();
// useEffect(()=>{
//     setIsLoading(true);
//     async function verifyMail(){
//         const res = await verifyEmail(verifyToken);
//         console.log(res,"response");
//         setIsLoading(false);
//     }
//     verifyMail();
// },[])
//     return  (
//         <>
//         <Navbar/>
//         {isLoading && <LoadingIndicator />}
//         <Box container display='flex' justifyContent='center' alignItems='center' marginTop='4%'>
//           <Box  width='75%'
//           sx={{ 
//             border: " 2px solid #eee",
//             padding: "20px",
//             borderRadius: "10px",
//             boxShadow:'0 0 3px #ADD8E6',
//         }}>
//           <Grid container spacing={2} justifyContent='center' alignItems='center'>
//             <Grid item xs={12} md={6}>
//               <img
//                 src={image}
//                 alt="Sample image"
//                 style={{ maxWidth: "90%", height: "auto" }}
//               />
//             </Grid>
//           </Grid>
//           </Box>
//         </Box>
//       </>
//     );
// }

// export default VerifyEmail
// VerifyEmail.js

import React, { useEffect, useState } from 'react';
import { Box, Grid } from '@mui/material';
import Navbar from '../../../components/NavBar/NavBar';
import image from '../../../assets/emailConfirm2.jpg';
import LoadingIndicator from '../../../ui/LoadingIndicator';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';
// import verifymail  from './VerifyEmail'; // Corrected import statement

function VerifyEmailComponent() { // Renamed component to avoid conflict
  const { verifyToken } = useParams();
  const navigate = useNavigate()
  const [isLoading , setIsloading] = useState(false)
  async function verifymail() {
try{

  const {data } = await axios.get(`http://localhost:3000/api/v1/users/verify/${verifyToken}`)
// console.log(data)
  toast.success(data.message);
  setTimeout(() => {
    navigate('/login')
  }, 2000);
}catch(error){
  // console.log(error.response.data.message,"*****");
  toast.error(error.response.data.message);
  navigate('/register')
}
  }

  useEffect( function() {
    setIsloading(true)
    verifymail()  
    setIsloading(false)    
   } ,[verifyToken]
  )

  return (
    <>
      <Navbar />
      {isLoading && <LoadingIndicator />}
      <Box container display='flex' justifyContent='center' alignItems='center' marginTop='4%'>
        <Box width='75%'
          sx={{
            border: " 2px solid #eee",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: '0 0 3px #ADD8E6',
          }}>
          <Grid container spacing={2} justifyContent='center' alignItems='center'>
            <Grid item xs={12} md={6}>
              <img
                src={image}
                alt="Sample image"
                style={{ maxWidth: "90%", height: "auto" }}
              />
            </Grid>
          </Grid>
  
        </Box>
      </Box>
    </>
  );
}

export default VerifyEmailComponent;
