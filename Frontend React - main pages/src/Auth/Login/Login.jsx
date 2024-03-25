
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { Box, Stack, TextField, Button, Typography, Grid } from "@mui/material";
import { login } from "../../../service/userApi";
import { useState } from "react";
import toast from "react-hot-toast";
import LoadingIndicator from "../../../ui/LoadingIndicator";
import Navbar from "../../../components/NavBar/NavBar";
import image from '../../../assets/login.webp'

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/gi;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.])[A-Za-z\d@$!%*?&.]+$/

function Login() {


  const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const { register, handleSubmit, formState } = useForm({
      mode: "all",
    });
    const { errors } = formState;
    async function submit(values) {
      try {
        setIsLoading(true);
        const response = await login(values);
        toast.success("You logged in successfully");
        localStorage.setItem("token", response.token);
        navigate("/");
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
      {isLoading && <LoadingIndicator />}
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
              <Typography variant="h4" textAlign="center" marginBottom={3}>
                Login
              </Typography>
              <Stack spacing={2} display='flex' gap={1}>
                <TextField
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
                  error={!!errors.email}
                  helperText={errors.email?.message}
                  style={{ boxShadow: '0 0 3px #ADD8E6' }}
                />
                <TextField
                  required
                  size="small"
                  id="password"
                  label="Password"
                  type="password"
                  {...register("password", {
                    required: "Password is Required",
                  })}
                  error={!!errors.password}
                  helperText={errors.password?.message}
                  style={{ boxShadow: '0 0 3px #ADD8E6' }}

                />
                <Box display='flex' justifyContent='center'>
                <Button type="submit" variant="contained" disabled={isLoading} sx={{ width: '60%'}} >
                  Login
                </Button>
                </Box>
              </Stack>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                marginTop="20px"
              >
                <Link to="/forgotPassword">Forgot Password?</Link>
                <Link to="/register">Don't have an account?</Link>
              </Box>
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

export default Login;

// import { useForm } from "react-hook-form";
// import { Link, useNavigate } from "react-router-dom";
// import { Box, Stack, TextField, Button, Typography } from "@mui/material";
// import { login } from "../../../service/userApi";
// import { useState } from "react";
// import toast from "react-hot-toast";
// import LoadingIndicator from "../../../ui/LoadingIndicator";

// const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/gi;
// const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.])[A-Za-z\d@$!%*?&.]+$/
  
// function Login() {
//   const navigate = useNavigate();
//   const [isLoading, setIsLoading] = useState(false);
//   const { register, handleSubmit, formState } = useForm({
//     mode: "all",
//   });
//   const { errors } = formState;
//   async function submit(values) {
//     try {
//       setIsLoading(true);
//       const response = await login(values);
//       toast.success("You logged in successfully");
//       localStorage.setItem("token", response.token);
//       navigate("/");
//     } catch (error) {
//       toast.error(error.response.data.message);
//     } finally {
//       setIsLoading(false);
//     }
//   }

//   function onError(errors) {
//     console.log(errors);
//   }

//   return (
//     <Box
//       sx={{
//         width: "500px",
//         position: "absolute",
//         top: "50%",
//         left: "50%",
//         transform: "translate(-50% , -50%)",
//         border: " 1px solid #eee",
//         padding: "30px",
//         borderRadius: "5px",
//       }}
//     >
//       {isLoading && <LoadingIndicator />}
//       <Box onSubmit={handleSubmit(submit, onError)} component="form">
//         <Typography variant="h4" textAlign="center" gutterBottom>
//           Login
//         </Typography>
//         <Stack
//           sx={{
//             marginBottom: "20px",
//           }}
//         >
//           <TextField
//             gutterBottom
//             required
//             size="small"
//             id="email"
//             label="Email"
//             {...register("email", {
//               required: "Email is Required",
//               pattern: {
//                 value: emailRegex,
//                 message: "Please Enter a Valid Email",
//               },
//             })}
//             error={errors?.email?.message}
//             helperText={!errors?.email?.message ? "" : errors?.email?.message}
//           />
//         </Stack>
//         <Stack
//           sx={{
//             marginBottom: "20px",
//           }}
//         >
//           <TextField
//             gutterBottom
//             required
//             size="small"
//             id="password"
//             label="Password"
//             type="password"
//             {...register("password", {
//               required: "Password is Required",
//               // pattern: {
//               //   value: passwordRegex,
//               //   message: "Please Enter a Valid Password",
//               // },
//             })}
//             // error={errors?.password?.message}
//             // helperText={
//             //   !errors?.password?.message ? "" : errors?.password?.message
//             // }
//           />
//         </Stack>

//         <Stack>
//           <Button type="submit" variant="contained" disabled={isLoading}>
//             Login
//           </Button>
//           <Box
//             display="flex"
//             justifyContent="space-between"
//             alignItems="center"
//             marginTop="20px"
//           >
//             <Link to={"/forgotPassword"}>Forget Password ?</Link>
//             <Link to={"/register"}>Do not have an account?</Link>
//           </Box>
//         </Stack>
//       </Box>
//     </Box>
//   );
// }

// export default Login;
