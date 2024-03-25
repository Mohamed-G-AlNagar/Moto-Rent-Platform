import { Box, Button, Typography } from "@mui/material";
import styles from "./Advertise.module.css";
import img1 from '../assets/2 (2).png'
function AdvertiseTwo() {
  return (
    <Box className={styles.adv2}>
      <Box className={styles.text}>
        <Typography component={'div'}sx={{color:"#fff",fontFamily:"Nunito"
        ,fontSize:"28px",fontWeight:600}} className={styles.header}>Easy way to rent a car at a low price</Typography>
      </Box>
      <Typography sx={{color:"#fff",fontFamily:"Nunito"}} component={'div'} >
      Providing cheap car rental services and safe and comfortable facilities.      </Typography>
      <Box className={styles.button}>
        <Button sx={{
    
    bgcolor:"#54A6FF",
    fontSize:"14px",
    fontWeight:500,
    font:"Plus Jakarta Sans",
    textTransform:"unset"
    }} variant="contained">Rental Car</Button>
      </Box>
      <img sx={{
       
      }} src={img1} alt="car2" className={styles.image2} />
    </Box>
  );
}

export default AdvertiseTwo;