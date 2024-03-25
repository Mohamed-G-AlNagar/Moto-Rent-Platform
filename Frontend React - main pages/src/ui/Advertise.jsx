import { Box, Button, Typography } from "@mui/material";
import styles from "./Advertise.module.css";

function Advertise() {
  return (
    <Box className={styles.adv}>
      <Box className={styles.text}>
        <Typography component={'div'}sx={{color:"#fff",fontFamily:"Nunito"
        ,fontSize:"28px",fontWeight:600}} className={styles.header}>The Best Platform for Car Rental</Typography>
      </Box>
      <Typography sx={{color:"#fff",fontFamily:"Nunito"}} component={'div'} >
        Ease of doing Car Rental safely and reliebly , Of course at low price
      </Typography>
      <Box className={styles.button}>
        <Button sx={{
    
    bgcolor:"#3563E9",
    fontSize:"14px",
    fontWeight:500,
    font:"Plus Jakarta Sans",
    textTransform:"unset"
    }} variant="contained">Rental Car</Button>
      </Box>
      <img src="../../public/car.png" alt="car1" className={styles.image} />
    </Box>
  );
}

export default Advertise;
