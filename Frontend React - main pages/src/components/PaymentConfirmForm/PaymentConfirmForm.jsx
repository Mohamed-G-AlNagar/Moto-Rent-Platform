import React  from "react";
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';
import {
    Typography,
    FormHelperText,
    FormControl,
    FormLabel,
    Grid,
    MenuItem,
    Select,
    Box,
    Checkbox,
    FormControlLabel,
    FormGroup,
    Button,
    IconButton
  } from "@mui/material";
  import {useForm} from 'react-hook-form'

const PaymentConfirmForm=()=>{
    const form = useForm({
        mode:"all"
    })
    const {register,formState}=form
    const {errors}=formState
    return<>
    <Box sx={{m:4}}>
      <Typography variant="h5" noWrap component="div"   sx={{color:"Secondary/500",
            fontSize:"20px",
            fontWeight:800,
            font:"Plus Jakarta Sans",
            

            }} >
     Confirmation
      </Typography>
      <FormHelperText sx={{mb:4,fontSize:"14px",fontWeight:500,color:"Secondary/300"}}>We are getting to the end. Just few clicks and your rental is ready!</FormHelperText>

      <form noValidate>
        <Box sx={{mt:3,mb:3,borderRadius:"10px",backgroundColor:"#F6F7F9"}}>
      <FormControlLabel sx={{m:1}}  control={<Checkbox {...register('newsletterEmails',{required:{value:true,
            message:"This Filed is required"}})}
            error={!!errors.message}
            />} label="I agree with sending an Marketing and newsletter emails. No spam, promissed!" />
            
      </Box>
      <FormHelperText sx={{color:"red",fontSize:"14px",fontWeight:500}}>{errors.newsletterEmails?.message}</FormHelperText>

      <Box sx={{mt:3,mb:3,borderRadius:"10px",backgroundColor:"#F6F7F9"}}>
      <FormControlLabel sx={{m:1}}   control={<Checkbox {...register('conditionsAndPrivacy',{required:{value:true,
            message:"This Filed is required"}})}
            error={!!errors.message} />} label="I agree with our terms and conditions and privacy policy." />
      </Box>
      <FormHelperText sx={{color:"red",fontSize:"14px",fontWeight:500}}>{errors.conditionsAndPrivacy?.message}</FormHelperText>

      <Box sx={{mb:2}}>
      <Button variant="contained" size="large"  sx={{bgcolor:"#3563E9",font:"Plus Jakarta Sans",fontWeight:"700",p:2, fontSize:"16px",borderRadius:"10px"}}>
          Rent Now
        </Button>
        </Box>


<Box>
<VerifiedUserOutlinedIcon sx={{color:"#3563E9",width:"35px",height:"35px"}} ></VerifiedUserOutlinedIcon>
</Box>
        <Box sx={{mt:2,mb:2}}>
            
        <Typography variant="h2" noWrap component="div" sx={{color:"Secondary/500",
            fontSize:"18px",
            fontWeight:800,
            font:"Plus Jakarta Sans",
            lineHeight:"24px"

            }} >
     All your data are safe
      </Typography>
      <FormHelperText sx={{mb:4,fontSize:"14px",fontWeight:500}}>We are using the most advanced security to provide you the best experience ever.</FormHelperText>
        </Box>
        
      </form>
      
      </Box>
    </>
}
export default PaymentConfirmForm;