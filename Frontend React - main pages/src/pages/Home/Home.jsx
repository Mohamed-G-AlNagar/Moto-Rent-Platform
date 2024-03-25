import Footer from "../../components/Footer/Footer";
import Location from "../../components/Location/Location";
import Advertise from "../../ui/Advertise";
import CarCard from "../../components/CarCard/CarCard";
import { Box, Button, Grid, Stack } from "@mui/material";
import LoadingIndicator from "../../ui/LoadingIndicator"
import styles from "./Home.module.css";
import SwapHorizOutlinedIcon from "@mui/icons-material/SwapHorizOutlined";
import NavBar from "../../components/NavBar/NavBar";
import useUser from "../Auth/useUser";
import useCars from "../Cars/useCars"
import TopFiveExpensiveCars from "../../components/TopFiveExpensiveCars/TopFiveExpensiveCars";
import TopFiveCheapestCars from "../../components/TopFiveCheapestCars/TopFiveCheapestCars";
import TopFiveCars from "../../components/TopFiveCars/TopFiveCars";
import AllCars from "../../components/AllCars/AllCars";
import AdvertiseTwo from "../../ui/AdvertiseTwo";
import AllAvailableCars from "../../components/AllAvailableCars/AllAvailableCars";


function Home() {
  const { data: user, isLoading : LoadingUser } = useUser();
  const {data : cars , isLoading } = useCars()

  console.log(cars)
  return (
      <Box className={styles.home}> 
      {(LoadingUser || isLoading)  && (
        <LoadingIndicator load={LoadingUser}/>
      )}
        <NavBar user={user} cars={cars}/>
        <Box>
          <Grid container gap="15px" className={styles.loc}>
            <Advertise item sm={6} />
            <AdvertiseTwo item sm={6} />
          </Grid>
        </Box>

          <Box sx={{padding : "25px"}}>
            <AllCars />
          </Box>
          <Box sx={{padding : "25px"}}>
            <AllAvailableCars />
          </Box>
          <Box sx={{padding : "25px"}}>
            <TopFiveExpensiveCars />
          </Box>
          <Box sx={{padding : "25px"}}>
            <TopFiveCheapestCars />
          </Box>
          <Box sx={{padding : "25px"}}>
            <TopFiveCars  />
          </Box>
        <Footer />
      </Box>
  );
}

export default Home;