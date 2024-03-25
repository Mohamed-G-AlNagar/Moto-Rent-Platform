import React from "react";
import {  Box,  Grid} from '@mui/material';

import ImageCars from "../../components/CarDetails/CarDetailsImages";
import CarDetailsForm from "../../components/CarDetails/CarDetailsForm";
import Review from "../../components/Reviews/Reviews";
import { useLocation } from "react-router-dom";
import Navbar from "../../components/NavBar/NavBar";
import TopFiveCars from "../../components/TopFiveCars/TopFiveCars";
import TopFiveExpensiveCars from "../../components/TopFiveExpensiveCars/TopFiveExpensiveCars";
import Footer from "../../components/Footer/Footer";



const CarDetails = () => {
  const location = useLocation();
  const { car: carDetails } = location?.state || {};
  console.log(carDetails)

  return <>
    <Grid container>
        <Grid item xs={12}>
          <Navbar />
        </Grid>

        <Grid item xs={12} sm={12}>
          <Grid container spacing={2}>
            <Grid mt={3} item xs={12} sm={12} md={6}>
              <Box 
                height="100%"
                width="100%"
                display="flex"
                justifyContent="center"
              >
                <ImageCars car={carDetails} />
              </Box>
            </Grid>
            <Grid mt={3}  item xs={12} sm={12} md={6}>
              <Box display="flex" justifyContent="center" width="100%" height="100%">
                <CarDetailsForm car={carDetails} />
              </Box>
            </Grid>
          </Grid>

          <Grid item mt={2} xs={12} sm={12}>
            <Box
              display="flex"
              justifyContent="center"
              width="100%"
              boxShadow={3}
              borderRadius={8}
              mt={3}
            >
              <Review carDetails={carDetails}   />
            </Box>
          </Grid>

          <Grid item xs={12} mt={2}>
            <TopFiveCars />
          </Grid>

          <Grid item xs={12} mt={2}>
            <TopFiveExpensiveCars />
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <Footer />
        </Grid>
      </Grid>
    

    

  </>
}
export default CarDetails