import React from 'react';
import {
  Typography,
  FormHelperText,
  Grid,
  Rating,
  Button,
  Stack,
  Divider,
  TextField

} from "@mui/material";

const RentalSummary = ({ rental }) => {
  return<>
    <div style={{
      border: '1px solid #ccc',
      borderRadius: 5,
      padding: 48,
      margin: 16,
    }}>
    <form noValidate>

   
      <Grid container spacing={2}>
        <Grid item xs={12}>

        <Typography variant="h5" noWrap component="div"   sx={{color:"#1A202C",
            fontSize:"32px",
            fontWeight:700,
            font:"Plus Jakarta Sans",
            fontStyle:"bold",
            }} >

     Rental Summary
      </Typography>
      <FormHelperText>Prices may change depending on the length of the rental and the price of your rental car.</FormHelperText>
        </Grid>
        <Grid item xs={6} sm={4}>
         <Stack p={1} borderRadius={8} backgroundColor="#3563E9"><img src={rental.image} alt={rental.name} style={{
            width: 'auto',
            height: 'auto',
          }} />
          </Stack> 
        </Grid>

<Grid item xs={6} sm={8}>

<Typography variant="h5" component="h2" gutterBottom sx={{color:"#1A202C",
            fontSize:"32px",
            fontWeight:700,
            font:"Plus Jakarta Sans",
            fontStyle:"bold",
            lineHeight:"48px"
            }}>
            {rental.name}
          </Typography>
          <Rating name="read-only" value={rental.reviewer} readOnly />
          <Typography variant="body1" color="textSecondary">
            {`${rental.reviewer}+ reviewer(s)`}
          </Typography>

</Grid>
        <Grid item xs={12} sm={12}>
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Typography variant="body2" color="#90A3BF">
                Subtotal
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="h4" style={{display:"flex",justifyContent:"flex-end"}} sx={{fontSize:"16px",fontWeight:"600"}} color="Secondary/500">
                ${rental.price.subtotal} 
              </Typography>
            </Grid>
            <Grid item xs={8} >
              <Typography variant="body2" color="#90A3BF">
                Tax
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="body2" sx={{fontSize:"16px",fontWeight:"600"}}style={{display:"flex",justifyContent:"flex-end"}} color="Secondary/500">
                ${rental.price.tax} 
              </Typography>
            </Grid>
          </Grid>
    
        </Grid>
        <Divider/>
        <Grid item sx={12} sm={12}>
      
          <TextField   sx={{backgroundColor:"#F6F7F9",borderRadius:"15px",mt:3,border:"none" ,"&:hover":{border:"1px solid #F6F7F9"}}}
      fullWidth
      label="Enter promo code"
      variant="outlined"
      InputProps={{
        endAdornment: (
          <Button size="large"  sx={{color:"#1A202C",width:"auto",fontWeight:700,font:"Semibold/Type@16"}} variant="text">Applynow
          </Button>
        ),
      }}/>
    
          </Grid>
        <Grid item sx={12} sm={8}>
        <Typography variant="h5" noWrap component="div"   sx={{color:"#1A202C",
            fontSize:"32px",
            fontWeight:700,
            font:"Plus Jakarta Sans",
            fontStyle:"bold",
            }} >
       Total Rental Price
      </Typography>
      <FormHelperText>Prices may change depending on the length of the rental and the price of your rental car.</FormHelperText>
        </Grid>
        <Grid item xs={12} sm ={4}style={{display:"flex",justifyContent:"flex-end"}}>
        <Typography variant="h5" noWrap component="div"   sx={{color:"#1A202C",
            fontSize:"32px",
            fontWeight:700,
            font:"Plus Jakarta Sans",
            fontStyle:"bold",
          lineHeight:"40px"
            }} >
80$
      </Typography>
     </Grid>
      </Grid>
      </form>
    </div>
   
  </>;
};


export default RentalSummary