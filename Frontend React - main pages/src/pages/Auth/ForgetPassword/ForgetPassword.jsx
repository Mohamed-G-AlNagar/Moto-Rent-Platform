import { useForm } from "react-hook-form";
import { Box, Stack, TextField, Button, Typography, Grid } from "@mui/material";
import useForgetPassword from "./useForgetPassword";
import LoadingIndicator from "../../../ui/LoadingIndicator";
import image from '../../../assets/forgotPass.jpg'
import Navbar from "../../../components/NavBar/NavBar";

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/gi;

function ForgetPassword() {
  const { isLoading, forgetPassword } = useForgetPassword();
  const { register, handleSubmit, formState } = useForm({
    mode: "all",
  });
  const { errors } = formState;

  function submit(value) {
    forgetPassword(value);
  }

  function onError(errors) {
    console.log(errors);
  }
  return (
    <>
    <Navbar />
    {isLoading && <LoadingIndicator />}
    <Box container display='flex' justifyContent='center' alignItems='center' marginTop='4%'>
      <Box  width='75%'
      sx={{ 
        border: " 2px solid #eee",
        padding: "20px",
        borderRadius: "10px",
        boxShadow:'0 0 3px #ADD8E6',
    }}>
      <Grid container spacing={2} justifyContent='center' alignItems='center'>
        <Grid item xs={12} md={6} >
          <Box component="form" onSubmit={handleSubmit(submit)}>
            <Typography fontWeight={550} fontFamily={'Nunito'} variant="h4" textAlign="center" marginBottom={3}>
              Forget Password
            </Typography>
            <Stack spacing={2} display='flex' gap={1}>
            <TextField
            gutterBottom
            required
            size="small"
            id="email"
            label="Email"
            {...register("email", {
              required: "Email is Required",
              pattern: {
                value: emailRegex,
                message: "Please Enter a Valid Email",
              },
            })}
            error={errors?.email?.message}
            helperText={!errors?.email?.message ? "" : errors?.email?.message}
                style={{ boxShadow: '0 0 3px #ADD8E6' }}
          />
              <Box display='flex' justifyContent='center'>
              <Button type="submit" variant="contained" disabled={isLoading} 
               sx={{ width: '50%',textTransform:'unset' }}
               fontWeight={550} fontFamily={'Nunito'}
>
                Send Code
              </Button>
              </Box>
            </Stack>
 
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <img
            src={image}
            alt="Sample image"
            style={{ maxWidth: "90%", height: "auto" }}
          />
        </Grid>
      </Grid>
      </Box>
    </Box>
  </>
);

}

export default ForgetPassword;
