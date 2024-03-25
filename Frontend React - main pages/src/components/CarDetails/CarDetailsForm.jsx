import React from 'react';
import { Rating, Typography, Button , Grid, Card} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const CarDetailsForm = ({ car }) => {
  const navigate = useNavigate()
  console.log(car)
  return<>
<Card  sx={{p:3,backgroundColor:"#ffffff",height:'100%'}} >
<Grid container spacing={2} height={"100%"}>
<Grid item xs={6} sm={8}>
<Typography variant="h5" component="h2" gutterBottom sx={{color:"#1A202C",
            fontSize:"32px",
            fontWeight:700,
            font:"Plus Jakarta Sans",
            fontStyle:"bold",
            lineHeight:"48px"
            }}>
            {car?.brand.brand}
          </Typography>
          <Rating name="read-only" value={car?.rating} readOnly />
          <Typography variant="h4" color="textSecondary">
            {`${car?.category}`}
          </Typography>
</Grid>
<Grid item sm={12}>
<Typography sx={{color:"#596780",font:"Plus Jakarta Sans",fontSize:"20px",lineHeight:"40px"}}>{car?.brand?.brand} has become the embodiment of  outstanding performance, inspired by the most unforgiving,
Manufacturing year is {car?.manufacturingYear}and car model is {car?.model}

</Typography>
</Grid>
<Grid container sx={{m:2}} spacing={2}>
<Grid item sm={3}>
<Typography variant="body2" color="#90A3BF" sx={{fontWeight:400,font:"Plus Jakarta Sans",fontSize:"20px"}}>
              Type Car
              </Typography>
</Grid>
<Grid item sm={3}>
<Typography variant="body2" color="#596780" sx={{fontWeight:600,font:"Plus Jakarta Sans",fontSize:"20px"}}>
             {car?.category}
              </Typography>
</Grid>
<Grid item sm={3}>
<Typography variant="body2" color="#90A3BF" sx={{fontWeight:400,font:"Plus Jakarta Sans",fontSize:"20px"}}>
              Capacity
              </Typography>
</Grid>
<Grid item sm={3}>
<Typography variant="body2" color="#596780" sx={{fontWeight:600,font:"Plus Jakarta Sans",fontSize:"20px"}}>
            {car?.capacity} Person
              </Typography>
</Grid>
<Grid item sm={3}>
<Typography variant="body2" color="#90A3BF" sx={{fontWeight:400,font:"Plus Jakarta Sans",fontSize:"20px"}}>
Gasoline
              </Typography>
</Grid>
<Grid item sm={3}>
<Typography variant="body2" color="#596780" sx={{fontWeight:600,font:"Plus Jakarta Sans",fontSize:"20px"}}>
             {car?.tankCapacity}L
              </Typography>
</Grid>

<Grid item sm={3}>
<Typography variant="body2" color="#90A3BF" sx={{fontWeight:400,font:"Plus Jakarta Sans",fontSize:"20px"}}>
Streening
</Typography>

</Grid>
<Grid item sm={3}>
<Typography variant="body2" color="#596780" sx={{fontWeight:600,font:"Plus Jakarta Sans",fontSize:"20px"}}>
             {car?.transmission}
              </Typography>
</Grid>

<Grid item sm={3}>
<Typography variant="body2" color="#90A3BF" sx={{fontWeight:400,font:"Plus Jakarta Sans",fontSize:"20px"}}>
Location
</Typography>

</Grid>
<Grid item sm={3}>
<Typography variant="body2" color="#596780" sx={{fontWeight:600,font:"Plus Jakarta Sans",fontSize:"20px"}}>
             {car?.location.city}/{car?.location.area}
              </Typography>
</Grid>
</Grid>
<Grid item sm={8}>
<Typography variant="h5" noWrap component="div"   sx={{color:"#1A202C",
            fontSize:"28px",
            fontWeight:700,
            font:"Plus Jakarta Sans",
            fontStyle:"bold",
          lineHeight:"35.5px"
            }} >
{car?.priceForDay} EGP<span style={{color:"#90A3BF",font:"Plus Jakarta Sans",fontSize:"16px"}}>/day</span>
     
      </Typography>
</Grid>
<Grid item sm={4}>
  <Button size='large' variant="contained" sx={{p:2,
    bgcolor:"#3563E9",
    fontSize:"16px",
    fontWeight:700,
    font:"Plus Jakarta Sans",
    textTransform:"unset"
    }} disabled={car.status !== "available"} onClick={() => navigate("/rentalInfo", { state: { car } })}>{car.status !== "available" ? "Not Avail" : "Rent Now"}</Button>
</Grid>
</Grid>
</Card>

  </>

};

export default CarDetailsForm;