import React, { useState } from "react"
import {
    Typography,
    FormHelperText,
    FormControl,
    FormLabel,
    Grid,
    Box,
    Button,
    TextField
  } from "@mui/material";

import {useForm} from 'react-hook-form'
import { useLocation } from "react-router-dom";
import LoadingIndicator from "../../ui/LoadingIndicator";
import {rentCar} from "../../service/carApi"

const RentalInfoForm =()=>{
    const Location = useLocation()
    const carId = Location.state.car.id;
    const carLocation = Location.state.car.location.city;
    const [isLoading , setIsLoading] = useState(false)
    const {register , formState , handleSubmit} = useForm({mode:"all"})
    const {errors}=formState
    

   async function submit(val){
      const values = {
        car : carId,
        from : val.from,
        to : val.to
      }
      try{
          setIsLoading(true)
         const res  = await rentCar(values)
         window.location.href = res.data.url
         window.open(res.data.url, '_blank');
      } 
      catch(error) {
        console.log(error)
      } finally {
        setIsLoading(false)
      }  
    }

    function onError(errors){
      console.log(errors)
    }
    
    return<>
    <Box sx={{m:4}}>
      {isLoading && <LoadingIndicator load={isLoading}/>}
      <Typography variant="h5" noWrap component="div" sx={{color:"#1A202C",
            fontSize:"20px",
            fontWeight:700,
            font:"Plus Jakarta Sans",
            fontStyle:"bold",
            }} >
      Rental info
      </Typography>
      <FormHelperText sx={{mb:4}}>Please enter your bill info</FormHelperText>

      <form noValidate onSubmit={handleSubmit(submit , onError)}>
      <Typography variant="h5" noWrap component="div" sx={{color:"#1A202C",
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
        <TextField
          labelId="pickLocation"
          id="pickLocation"
          value={carLocation}
          placeholder="Select your City"
          sx={{backgroundColor:"#F6F7F9",borderRadius:"10px",mt:3,border:"none" ,"&:hover":{border:"1px solid #F6F7F9"}}}
          {...register('pickLocation',{required:{
            message:"This Filed is required"}})}
            error={!!errors.message}
        >
        </TextField>
      </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
        <FormControl fullWidth>
        <FormLabel component="legend" sx={{color:'#1A202C',font:"Plus Jakarta Sans",
          fontWeight:600, fontSize:"16px"}}>Date</FormLabel>
          <input 
            id="from" 
            labelId="from"
            type="date"
            style=
            {{
              backgroundColor:"#F6F7F9",
              borderRadius:"10px",
              padding : "18px",
              marginTop : "22px"
            }}
            {...register("from" , {required : "This Field is required" , min : {value : new Date().toISOString().split('T')[0] , message : "Not allowed"}})}
            />
            <span style={{color : "red"}}>{errors?.from?.message}</span>        
      </FormControl>
        </Grid>
       </Grid>
       <Typography variant="h5" noWrap component="div" sx={{color:"#1A202C",
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
        <TextField
          labelId="dropofLocation"
          id="dropofLocation"
          value={carLocation}
          placeholder="Select your City"
          sx={{backgroundColor:"#F6F7F9",borderRadius:"10px",mt:3,border:"none" ,"&:hover":{border:"1px solid #F6F7F9"}}}
          {...register('pickLocation',{required:{
            message:"This Filed is required"}})}
            error={!!errors.message}
        >
        </TextField>
      </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
        <FormControl fullWidth>
        <FormLabel component="legend" sx={{color:'#1A202C',font:"Plus Jakarta Sans",
          fontWeight:600, fontSize:"16px"}}>Date</FormLabel>
          <input 
            id="to" 
            labelId="to"
            type="date"
            style=
            {{
              backgroundColor:"#F6F7F9",
              borderRadius:"10px",
              padding : "18px",
              marginTop : "22px"
            }}
            {...register("to" , {required : "This Field is required"})}
            />        
      </FormControl>
        </Grid>
       </Grid>
          <Box sx={{
            mt : 2,
            marginLeft : "auto",
          }}>
          <Button variant="contained" size="small" type="submit" >RENT NOW</Button>
          </Box>
        </form>
        </Box>
    </>
}



export default RentalInfoForm;