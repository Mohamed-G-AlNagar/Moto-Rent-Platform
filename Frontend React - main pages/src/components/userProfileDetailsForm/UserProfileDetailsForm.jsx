import {
    Typography,
    FormHelperText,
    FormControl,
    FormLabel,
    OutlinedInput,
    Grid,
    Stack,
    Button,
    Box
  } from "@mui/material";
  import {useForm} from 'react-hook-form'
import useUser from "../../pages/Auth/useUser";
import LoadingIndicator from "../../ui/LoadingIndicator";
import useUpdateProfile from "./useUpdateProfile";

  
  const UserProfileDetailsForm = () => {
      const {data , isLoading} =useUser();
      const user =  data?.data
      console.log(user)
      const {register,formState , handleSubmit}=useForm({mode : "all"})
      const {errors}=formState
      const {updateMyProfile , updatingProfile} = useUpdateProfile()

      async function submit(values){
        const formData = new FormData();
        formData.append('firstName', values.firstName);
        formData.append('lastName', values.lastName);
        formData.append('address', values.address);
        formData.append('phone', values.phone);
        // formData.append('image', values.image[0] || []);

        try {
          await updateMyProfile(formData)
        } catch(error) {
          console.log(error)
        }
      } 

   return (
      <>
      {(isLoading || updatingProfile) && <LoadingIndicator load={isLoading} />}
      <Stack sx={{m:2,p:2,borderRadius:"10px",backgroundColor: '#ffffff',
       border:"1px solid #3563E9"}}>
        <Typography variant="h5" noWrap component="div"   sx={{color:"#1A202C",
              fontSize:"20px",
              fontWeight:700,
              font:"Plus Jakarta Sans",
              fontStyle:"bold",
            
              }} >
        Profile Details
        </Typography>
        <FormHelperText sx={{  mb:2}}>You can update your info</FormHelperText>
        <form noValidate onSubmit={handleSubmit(submit)}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <FormLabel component="legend" sx={{color:'#1A202C',font:"Plus Jakarta Sans",
      fontWeight:600, fontSize:"16px"}}>First Name</FormLabel>
              <OutlinedInput
                name="firstName"
                defaultValue={user?.firstName}
                id="firstName"
                placeholder="First Name"
                type="text"
                {...register('firstName',{required:{value:true,
              message:"This Filed is required"},maxLength:{value:40,message:"name is too long, maxium 40 letters"
              
              
          },minLength:{value:3,message:"name is too short, minum 3 letters"}})}
  
                sx={{backgroundColor:"#F6F7F9",borderRadius:"10px",mt:3,border:"none" ,"&:hover":{border:"1px solid #F6F7F9"}}}
                error={!!errors.message}
  
              />
              <FormHelperText sx={{color:"red"}}>{errors.firstName?.message}</FormHelperText>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <FormLabel component="legend" sx={{color:'#1A202C',font:"Plus Jakarta Sans",
      fontWeight:600, fontSize:"16px"}}>Last Name</FormLabel>
              <OutlinedInput
               name="lastName"
               defaultValue={user?.lastName}
                id="lastName"
                placeholder="Last Name"
                type="text"
                {...register('lastName',{required:{value:true,
              message:"This Filed is required"},maxLength:{value:40,message:"name is too long, maxium 40 letters"
              
          },minLength:{value:3,message:"name is too short, minum 3 letters"}})}
  
                sx={{backgroundColor:"#F6F7F9",borderRadius:"10px",mt:3,border:"none" ,"&:hover":{border:"1px solid #F6F7F9"}}}
                error={!!errors.message}
  
              />
              <FormHelperText sx={{color:"red"}}>{errors.lastName?.message}</FormHelperText>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <FormLabel component="legend" sx={{color:'#1A202C',font:"Plus Jakarta Sans",
      fontWeight:600, fontSize:"16px"}}>Email</FormLabel>
              <OutlinedInput
                disabled
                defaultValue={user?.email}
                id="email"
                placeholder="Email"
                type="email"
                sx={{backgroundColor:"#F6F7F9",borderRadius:"10px",mt:3,border:"none" ,"&:hover":{border:"1px solid #F6F7F9"}}}
                error={!!errors.message}
  
              />
              <FormHelperText sx={{color:"red"}}>{errors.email?.message}</FormHelperText>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <FormLabel component="legend" sx={{color:'#1A202C',font:"Plus Jakarta Sans",
      fontWeight:600, fontSize:"16px"}}>Address</FormLabel>
              <OutlinedInput
                name="address"
                defaultValue={user?.address}
                id="address"
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
      fontWeight:600, fontSize:"16px"}}>Drive Lisencese</FormLabel>
              <OutlinedInput
                name="driverLicense"
                disabled
                defaultValue={user?.driverLicense}
                id="driverLicense"
                placeholder="Your Driver License"
                type="text"
                sx={{backgroundColor:"#F6F7F9",borderRadius:"10px",mt:3,border:"none" ,"&:hover":{border:"1px solid #F6F7F9"}}}
              />
              <FormHelperText sx={{color:"red"}}>{errors.driverLicense?.message}</FormHelperText>
  
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <FormLabel component="legend"sx={{color:'#1A202C',font:"Plus Jakarta Sans",
              fontWeight:600, fontSize:"16px"}}>Phone</FormLabel>
              <OutlinedInput
                name="phone"
                defaultValue={user?.phone}
                id="phone"
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
          <Grid item xs={12} sm={12}>
            {/* <FormControl fullWidth>
              <FormLabel component="legend"sx={{color:'#1A202C',font:"Plus Jakarta Sans",
              fontWeight:600, fontSize:"16px"}}></FormLabel>
              <label htmlFor={`image`}>
                <Button variant="contained" size="small" component="span">
                  Upload Your Image
                </Button>
              </label>
              <input
                accept="image/*"
                style={{ display: 'none' }}
                id="image"
                type="file"
                multiple={false}
                {...register("image")}
              />
            </FormControl> */}
          </Grid>
          <Grid>
          <Box sx={{
            display : "flex",
            justifyContent : "flex-end",
            mt : 2,
            ml : 2
          }}>
            <Button variant="contained" size="small" type="submit">update</Button>
          </Box>
            </Grid>
        </Grid>
        </form>
       </Stack>
      </>
    );
  };
  
  export default UserProfileDetailsForm;