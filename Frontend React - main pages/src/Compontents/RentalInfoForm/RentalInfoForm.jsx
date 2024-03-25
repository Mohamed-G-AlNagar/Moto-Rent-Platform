import React from "react"
import {
    Typography,
    FormHelperText,
    FormControl,
    FormLabel,
    Grid,
    MenuItem,
    Select,
    Box
  } from "@mui/material";
import {useForm} from 'react-hook-form'
const RentalInfoForm =()=>{
const form = useForm({
        mode:"all"
    })
    const {register,formState}=form
    const {errors}=formState
    return<>
    <Box sx={{m:4}}>
      <Typography variant="h5" noWrap component="div"   sx={{color:"#1A202C",
            fontSize:"20px",
            fontWeight:700,
            font:"Plus Jakarta Sans",
            fontStyle:"bold",
            }} >
      Rental Summary
      </Typography>
      <FormHelperText sx={{mb:4}}>Prices may change depending on the length of the rental and the price of your rental car.</FormHelperText>
      
   
      <form noValidate>
      <Typography variant="h5" noWrap component="div"   sx={{color:"#1A202C",
            fontSize:"20px",
            fontWeight:700,
            font:"Plus Jakarta Sans",
            fontStyle:"bold",
            mb:2
            }} >
      Pick-Up
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
        <FormControl fullWidth>
        <FormLabel component="legend" sx={{color:'#1A202C',font:"Plus Jakarta Sans",
    fontWeight:600, fontSize:"18px"}}>Location</FormLabel>
        <Select
          labelId="location-select-formRental"
          id="location-select-formRental"
          value={''}
          placeholder="Select your City"
          sx={{backgroundColor:"#F6F7F9",borderRadius:"10px",mt:3,border:"none" ,"&:hover":{border:"1px solid #F6F7F9"}}}
          {...register('location',{required:{value:true,
            message:"This Filed is required"}})}
            error={!!errors.message}
         
        >
          <MenuItem value={"Beni Seuf"}>Beni Seuf</MenuItem>
          <MenuItem value={"Cairo"}>Cairo</MenuItem>
          <MenuItem value={"Alex"}>Alex</MenuItem>
        </Select>
        <FormHelperText sx={{color:"red"}}>{errors.location?.message}</FormHelperText>
      </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
        <FormControl fullWidth>
        <FormLabel component="legend" sx={{color:'#1A202C',font:"Plus Jakarta Sans",
    fontWeight:600, fontSize:"16px"}}>Date</FormLabel>
        <Select
          labelId="date-select-formRental"
          id="date-select-formRental"
          value={''}
          type="data"
          placeholder="Select your date"
          sx={{backgroundColor:"#F6F7F9",borderRadius:"10px",mt:3,border:"none" ,"&:hover":{border:"1px solid #F6F7F9"}}}
          {...register('date',{required:{value:true,
            message:"This Filed is required"}})}
            error={!!errors.message}
        >
          <MenuItem value={"12"}>12:pm</MenuItem>
          <MenuItem value={"2"}>2:pm</MenuItem>
          <MenuItem value={"3"}>3:pm</MenuItem>
        </Select>
        <FormHelperText sx={{color:"red"}}>{errors.date?.message}</FormHelperText>

      </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
        <FormControl fullWidth>
        <FormLabel component="legend" sx={{color:'#1A202C',font:"Plus Jakarta Sans",
    fontWeight:600, fontSize:"16px"}}>Time</FormLabel>
        <Select
          labelId="select-location-rentalForm"
          id="time-select-rentalForm"
          value={'Beni Seu'}
          placeholder="Select your time"
          sx={{backgroundColor:"#F6F7F9",borderRadius:"10px",mt:3,border:"none" ,"&:hover":{border:"1px solid #F6F7F9"}}}
          {...register('time',{required:{value:true,
            message:"This Filed is required"}})}
            error={!!errors.message}
        >
          <MenuItem value={"Beni Seuf"}>jun</MenuItem>
          <MenuItem value={"Cairo"}>july</MenuItem>
          <MenuItem value={"Alex"}>Alex</MenuItem>
        </Select>
        <FormHelperText sx={{color:"red"}}>{errors.date?.message}</FormHelperText>
      </FormControl>
        </Grid>
       </Grid>
       <Typography variant="h5" noWrap component="div"   sx={{color:"#1A202C",
            fontSize:"20px",
            fontWeight:700,
            font:"Plus Jakarta Sans",
            fontStyle:"bold",
            mb:2,
            mt:4

            }} >
      Drop-Off
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
        <FormControl fullWidth>
        <FormLabel component="legend" sx={{color:'#1A202C',font:"Plus Jakarta Sans",
    fontWeight:600, fontSize:"18px"}}>Location</FormLabel>
        <Select
          labelId="select-location-rentalForm"
          id="demo-simple-select"
          value={''}
          placeholder="Select City"
          sx={{backgroundColor:"#F6F7F9",borderRadius:"10px",mt:3,border:"none" ,"&:hover":{border:"1px solid #F6F7F9"}}}
          {...register('location',{required:{value:true,
            message:"This Filed is required"}})}
            error={!!errors.message}
         
        >
          <MenuItem value={"Beni Seuf"}>Beni Seuf</MenuItem>
          <MenuItem value={"Cairo"}>Cairo</MenuItem>
          <MenuItem value={"Alex"}>Alex</MenuItem>
        </Select>
        <FormHelperText sx={{color:"red"}}>{errors.location?.message}</FormHelperText>
      </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
        <FormControl fullWidth>
        <FormLabel component="legend" sx={{color:'#1A202C',font:"Plus Jakarta Sans",
    fontWeight:600, fontSize:"16px"}}>Date</FormLabel>
        <Select
          labelId="select-location-rentalForm"
          id="demo-simple-select"
          value={''}
          type="data"
          placeholder="Select City"
          sx={{backgroundColor:"#F6F7F9",borderRadius:"10px",mt:3,border:"none" ,"&:hover":{border:"1px solid #F6F7F9"}}}
          {...register('date',{required:{value:true,
            message:"This Filed is required"}})}
            error={!!errors.message}
        >
          <MenuItem value={"Beni Seuf"}>Beni Seuf</MenuItem>
          <MenuItem value={"Cairo"}>Cairo</MenuItem>
          <MenuItem value={"Alex"}>Alex</MenuItem>
        </Select>
        <FormHelperText sx={{color:"red"}}>{errors.date?.message}</FormHelperText>

      </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
        <FormControl fullWidth>
        <FormLabel component="legend" sx={{color:'#1A202C',font:"Plus Jakarta Sans",
    fontWeight:600, fontSize:"16px"}}>Time</FormLabel>
        <Select
          labelId="select-location-rentalForm"
          id="demo-simple-select"
          value={'Beni Seu'}
          placeholder="Select City"
          sx={{backgroundColor:"#F6F7F9",borderRadius:"10px",mt:3,border:"none" ,"&:hover":{border:"1px solid #F6F7F9"}}}
          {...register('time',{required:{value:true,
            message:"This Filed is required"}})}
            error={!!errors.message}
        >
          <MenuItem value={"Beni Seuf"}>Beni Seuf</MenuItem>
          <MenuItem value={"Cairo"}>Cairo</MenuItem>
          <MenuItem value={"Alex"}>Alex</MenuItem>
        </Select>
        <FormHelperText sx={{color:"red"}}>{errors.date?.message}</FormHelperText>
      </FormControl>
        </Grid>
       </Grid>
        </form>
        </Box>
    </>
}



export default RentalInfoForm;