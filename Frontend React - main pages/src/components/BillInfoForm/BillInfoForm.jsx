import {
  Typography,
  FormHelperText,
  FormControl,
  FormLabel,
  OutlinedInput,
  Grid,
  Stack
} from "@mui/material";
import {useForm} from 'react-hook-form'


const BillInfoForm = () => {

    const form = useForm({
        mode:"all"
    })
    const {register,formState}=form
    const {errors}=formState
 return (
    <>
    <Stack sx={{m:2}}>
      <Typography variant="h5" noWrap component="div"   sx={{color:"#1A202C",
            fontSize:"20px",
            fontWeight:700,
            font:"Plus Jakarta Sans",
            fontStyle:"bold",
            }} >
      Billing info
      </Typography>
      <FormHelperText>Please enter your bill info</FormHelperText>
      <form noValidate>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <FormLabel component="legend" sx={{color:'#1A202C',font:"Plus Jakarta Sans",
    fontWeight:600, fontSize:"16px"}}>Name</FormLabel>
            <OutlinedInput
              id="input-name-bill-info"
              placeholder="Your Name"
              type="text"
              {...register('name',{required:{value:true,
            message:"This Filed is required"},maxLength:{value:40,message:"name is too long, maxium 40 letters"
            
            
        },minLength:{value:3,message:"name is too short, minum 3 letters"}})}

              sx={{backgroundColor:"#F6F7F9",borderRadius:"10px",mt:3,border:"none" ,"&:hover":{border:"1px solid #F6F7F9"}}}
              error={!!errors.message}

            />
            <FormHelperText sx={{color:"red"}}>{errors.name?.message}</FormHelperText>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <FormLabel component="legend" sx={{color:'#1A202C',font:"Plus Jakarta Sans",
    fontWeight:600, fontSize:"16px"}}>Address</FormLabel>
            <OutlinedInput
              id="input-address-bill-info"
              placeholder="Your Address"
              type="text"
              sx={{backgroundColor:"#F6F7F9",borderRadius:"10px",mt:3,border:"none" ,"&:hover":{border:"1px solid #F6F7F9"}}}
               {...register('address',{required:{value:true,
            message:"This Filed is required"},maxLength:{value:40,message:"Address is too long, maxium 40 letters"
            
            
        },minLength:{value:3,message:"Address is too short, minum 3 letters"}})}
              error={!!errors.message}
            />
            <FormHelperText sx={{color:"red"}}>{errors.address?.message}</FormHelperText>

          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <FormLabel component="legend" sx={{color:'#1A202C',font:"Plus Jakarta Sans",
    fontWeight:600, fontSize:"16px"}}>Town/City</FormLabel>
            <OutlinedInput
              id="input-city-bill-info"
              placeholder="Your City"
              type="text"
              sx={{backgroundColor:"#F6F7F9",borderRadius:"10px",mt:3,border:"none" ,"&:hover":{border:"1px solid #F6F7F9"}}}
              {...register('city',{required:{value:true,
                message:"This Filed is required"},maxLength:{value:40,message:"name is too long, maxium 40 letters"
            
            
            },minLength:{value:3,message:"name is too short, minum 3 letters"
            
            
        }})}
                  error={!!errors.message}
            />
             <FormHelperText sx={{color:"red"}}>{errors.city?.message}</FormHelperText>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <FormLabel component="legend"sx={{color:'#1A202C',font:"Plus Jakarta Sans",
    fontWeight:600, fontSize:"16px"}}>Phone</FormLabel>
            <OutlinedInput
              id="input-Phone-bill-info"
              placeholder="Your Phone"
              type="text"
              sx={{backgroundColor:"#F6F7F9",borderRadius:"10px",mt:3,border:"none" ,"&:hover":{border:"1px solid #F6F7F9"}}}
              {...register('phone',{required:{value:true,
                message:"This Filed is required"},pattern:{value:/^(011|012|010|015)\d{8}$/,message:"phone should be 12 numbers and start with 011 or 012 or 015 or 010"}})}
                error={!!errors.message}
            />
        <FormHelperText sx={{color:"red"}}>{errors.phone?.message}</FormHelperText>

          </FormControl>
        </Grid>
      </Grid>
      </form>
     </Stack>
    </>
  );
};

export default BillInfoForm;



















