import { useForm } from "react-hook-form";
import { Box, Stack, TextField, Button, Typography, Grid } from "@mui/material";
import image from '../../../assets/resetPass.jpg'
import useUpdatePassword from "./useUpdatePassword";
import LoadingIndicator from "../../../ui/LoadingIndicator";


const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.])[A-Za-z\d@$!%*?&.]+$/

function UpdatePassword() {

    const { register, handleSubmit,getValues, reset,formState } = useForm({
      mode: "all",
    });
    const { errors } = formState;
    const {mutatePassword , updatingPassword} = useUpdatePassword(reset)


    async function submit(values) {
      try {
        await mutatePassword(values);
        setTimeout(function(){
        } , 3000)      
      } catch (error) {
        console.log(error)
      }
    }
  
  return (
    <>
      {updatingPassword && <LoadingIndicator Load={updatingPassword} />}
      <Box container display='flex' justifyContent='center' alignItems='center' marginY='5%'>
        <Box  width='80%'
        sx={{ 
          border: " 2px solid #eee",
          padding: "30px",
          borderRadius: "10px",
          boxShadow:'0 0 3px #ADD8E6',
      }}>
        <Grid container spacing={2} justifyContent='center' alignItems='center'>
          <Grid item xs={12} md={6} >
            <Box component="form" onSubmit={handleSubmit(submit)}>
              <Typography fontWeight={550} fontFamily={'Nunito'} variant="h4" textAlign="center" marginBottom={3}>
               Update Password
              </Typography>
              <Stack spacing={2} display='flex' gap={1}>
             
                  <TextField
                style={{ boxShadow: '0 0 3px #ADD8E6' }}
                required
                size="small"
                id="currentPassword"
                label="Current Password"
                type="password"
                {...register("currentPassword", {
                  required: "Current Password is Required" 
                })}
                error={errors?.currentPassword?.message}
                helperText={
                  !errors?.currentPassword?.message ? "" : errors.currentPassword.message
                }
              />
              <TextField
                style={{ boxShadow: '0 0 3px #ADD8E6' }}
                required
                size="small"
                id="password"
                label="New Password"
                type="password"
                {...register("password", {
                  required: "Password is Required",
                  pattern : {
                    value : passwordRegex,
                    message : "Password should contain lowercase,uppercase,char(.,-,#,_),number, min 8 char long"
                  }
                 
                })}
                error={errors?.password?.message}
                helperText={
                  !errors?.password?.message
                    ? ""
                    : errors?.password?.message
                }
              />
              <TextField
                style={{ boxShadow: '0 0 3px #ADD8E6' }}
                required
                size="small"
                id="passwordConfirm"
                label="Confirm Password"
                type="password"
                {...register("passwordConfirm", {
                  required: "Password Confirm is Required",
                  validate: (value) =>
                    value === getValues().password || "Passwords do not match",
                })}
                error={errors?.passwordConfirm?.message}
                helperText={
                  !errors?.passwordConfirm?.message
                    ? ""
                    : errors?.passwordConfirm?.message
                }
              />
                <Box display='flex' justifyContent='center'>
                <Button type="submit" variant="contained" 
                 sx={{ width: '60%',textTransform:'unset' }}
                 fontWeight={550} fontFamily={'Nunito'}
                >
                Update
                </Button>
                </Box>
              </Stack>
             
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <img
              src={image}
              alt="Sample image"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </Grid>
        </Grid>
        </Box>
      </Box>
    </>
  );
}

export default UpdatePassword;