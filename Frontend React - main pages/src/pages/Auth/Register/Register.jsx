
import { useForm } from "react-hook-form";
import { Box, Stack, TextField, Typography, Button, Grid } from "@mui/material";
import { signup } from "../../../service/userApi";
import { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import LoadingIndicator from "../../../ui/LoadingIndicator";
import Navbar from "../../../components/NavBar/NavBar";
import image from '../../../assets/signup.webp'

// import { useSignup } from "../Register/useSignup";
const phoneNumberRegex = /^01[0125]\d{8}$/
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/gi;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.])[A-Za-z\d@$!%*?&.]+$/
const driverLiesenseRegex = /^\d{14}$/

function Register() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const { register, getValues, handleSubmit, formState } = useForm({
    mode: "all",
  });
  const { errors } = formState;

  async function submit(values) {
    try {
      setIsLoading(true);
      const response = await signup(values);
      toast.success(response.message);
      navigate("/login");
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      setIsLoading(false);
    }
  }

  function onError(errors) {
    console.log(errors);
  }
  
  return (
    <>
    <Navbar />
    <Box>
      {isLoading && <LoadingIndicator />}
      <Box
        component="form"
        onSubmit={handleSubmit(submit)}
        sx={{
          width: "70%",
          margin: "3% auto",
          border: " 2px solid #eee",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: '0 0 3px #ADD8E6',
        }}
        autoComplete="off"
      >
        <Grid container spacing={2} justifyContent='center' alignItems='center'>
          <Grid item xs={12} md={6}>
            <Typography  fontWeight={550} fontFamily={'Nunito'} variant="h4" textAlign="center" marginBottom={1}>
              Register
            </Typography>
            <Stack spacing={1}>
              <TextField
                required
                size="small"
                id="firstName"
                label="First Name"
                {...register("firstName", {
                  required: "First Name is Required",
                  minLength: {
                    value: 3,
                    message: "At least 3 chars",
                  },
                })}
                error={errors?.firstName?.message}
                helperText={
                  !errors?.firstName?.message ? "" : errors?.firstName?.message
                }
                style={{ boxShadow: '0 0 3px #ADD8E6' }}
              />
              <TextField
                style={{ boxShadow: '0 0 3px #ADD8E6' }}
                required
                size="small"
                id="lastName"
                label="Last Name"
                {...register("lastName", {
                  required: "Last Name is Required",
                  minLength: {
                    value: 3,
                    message: "At least 3 chars",
                  },
                })}
                error={errors?.lastName?.message}
                helperText={
                  !errors?.lastName?.message ? "" : errors?.lastName?.message
                }
              />
              <TextField
                style={{ boxShadow: '0 0 3px #ADD8E6' }}
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
              />
              <TextField
                style={{ boxShadow: '0 0 3px #ADD8E6' }}
                required
                size="small"
                id="password"
                label="Password"
                type="password"
                {...register("password", {
                  required: "Password is Required",
                  pattern: {
                    value: passwordRegex,
                    message: "Please Enter a Valid Password",
                  },
                })}
                error={errors?.password?.message}
                helperText={
                  !errors?.password?.message ||
                  "Password should contain lowercase,uppercase,char(.,-,#,_),number, min 8 char long"
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
              <TextField
                style={{ boxShadow: '0 0 3px #ADD8E6' }}
                required
                size="small"
                id="address"
                label="address"
                type="text"
                {...register("address", {
                  required: "address is Required",
                })}
                error={errors?.address?.message}
                helperText={
                  !errors?.address?.message ? "" : errors?.address?.message
                }
              />
              <TextField
                style={{ boxShadow: '0 0 3px #ADD8E6' }}
                required
                size="small"
                id="phone"
                label="phone"
                type="text"
                {...register("phone", {
                  required: "phone is Required",
                  pattern : {
                    value : phoneNumberRegex,
                    message : "Plese Enter an Egptian Phone Number"
                  }
                })}
                error={errors?.phone?.message}
                helperText={!errors?.phone?.message ? "" : errors?.phone?.message}
              />
              <TextField
                style={{ boxShadow: '0 0 3px #ADD8E6' }}
                required
                size="small"
                id="driverLicense"
                label="Driver License"
                type="text"
                {...register("driverLicense", {
                  required: "Driver License is Required",
                  pattern : {
                    value  : driverLiesenseRegex,
                    message : "Please Enter A Valid Driver"
                  }
                })}
                error={errors?.driverLicense?.message}
                helperText={
                  !errors?.driverLicense?.message
                    ? ""
                    : errors?.driverLicense?.message
                }
              />
            </Stack>
            <Stack
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              marginTop="20px"
            >
              <Button
                size="small"
                disabled={isLoading}
                type="submit"
                variant="contained"
                sx={{ width: '60%',textTransform:'unset' }}
                fontWeight={550} fontFamily={'Nunito'}
              
              >
                Register
              </Button>
              <Box
                marginTop="10px"
              >
                <Link to="/login">Have an account?</Link>
              </Box>
            </Stack>
          </Grid>
          <Grid item xs={12} md={6} >
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

export default Register;
