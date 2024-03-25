// import { useForm } from "react-hook-form";
// import { Box, Stack, TextField, Button, Typography, Grid } from "@mui/material";
// import LoadingIndicator from "../../../ui/LoadingIndicator";
// import { resetPassword } from "../../../service/userApi";
// import { useState } from "react";
// import toast from "react-hot-toast";
// import { useNavigate, useParams } from "react-router-dom";
// import Navbar from "../../../components/NavBar/NavBar";
// import image from '../../../assets/resetPass.jpg'

// const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.])[A-Za-z\d@$!%*?&.]+$/;

// function ResetPassword() {
//   const navigate = useNavigate();
//   const {code} = useParams();
//   const [isLoading, setIsLoading] = useState(false);
//   const { register, handleSubmit, getValues, formState } = useForm({
//     mode: "all",
//   });
//   const { errors } = formState;

//   async function submit(values) {
//     try {
//       setIsLoading(true);
//       const response = await resetPassword(values);
//       toast.success(response.message);
//       navigate("/login");
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
//     <>
//     <Navbar />
//     {isLoading && <LoadingIndicator />}
//     <Box container display='flex' justifyContent='center' alignItems='center' marginTop='4%'>
//       <Box  width='75%'
//       sx={{ 
//         border: " 2px solid #eee",
//         padding: "20px",
//         borderRadius: "10px",
//         boxShadow:'0 0 3px #ADD8E6',
//     }}>
//       <Grid container spacing={2} justifyContent='center' alignItems='center'>
//         <Grid item xs={12} md={6} >
//         <Box
//       onSubmit={handleSubmit(submit, onError)}
//       component="form"
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
//       autoComplete="off"
//     >
//       {isLoading && <LoadingIndicator />}
//       <Typography variant="h4" textAlign="center" gutterBottom>
//         Create New Password
//       </Typography>
//       <Stack
//         sx={{
//           marginBottom: "20px",
//         }}
//       >
//         <TextField
//           required
//           size="small"
//           id="password"
//           label="Password"
//           type="password"
//           {...register("password", {
//             required: "Password is Required",
//             pattern: {
//               value: passwordRegex,
//               message: "Please Enter a Valid Password",
//             },
//           })}
//           error={errors?.password?.message}
//           helperText={
//             !errors?.password?.message ||
//             "Password should contain lowercase,uppercase,char(.,-,#,_),number, min 8 char long"
//           }
//         />
//       </Stack>
//       <Stack
//         sx={{
//           marginBottom: "20px",
//         }}
//       >
//         <TextField
//           required
//           size="small"
//           id="passwordConfirm"
//           label="Confirm Password"
//           type="password"
//           {...register("passwordConfirm", {
//             required: "Password is Required",
//             validate: (value) =>
//               value === getValues().password || "Passwords do not match",
//           })}
//           error={errors?.passwordConfirm?.message}
//           helperText={
//             !errors?.passwordConfirm?.message
//               ? ""
//               : errors?.passwordConfirm?.message
//           }
//         />
//       </Stack>
//       <Stack
//         sx={{
//           marginBottom: "20px",
//         }}
//       >
//         <TextField
//           required
//           type="text"
//           id="code"
//           label="code"
//           value={code}
//           {...register("code", { required: "Code is required" })}
//         />
//       </Stack>
//       <Stack>
//         <Button type="submit" variant="contained">
//           Submit
//         </Button>
//       </Stack>
//     </Box>
//         </Grid>
//         <Grid item xs={12} md={6}>
//           <img
//             src={image}
//             alt="Sample image"
//             style={{ maxWidth: "90%", height: "auto" }}
//           />
//         </Grid>
//       </Grid>
//       </Box>
//     </Box>
//   </>
 
//   );
// }

// export default ResetPassword;

import { useForm } from "react-hook-form";
import { Box, Stack, TextField, Button, Typography, Grid } from "@mui/material";
import LoadingIndicator from "../../../ui/LoadingIndicator";
import { resetPassword } from "../../../service/userApi";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../../../components/NavBar/NavBar";
import image from '../../../assets/resetPass.jpg'

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.])[A-Za-z\d@$!%*?&.]+$/;

function ResetPassword() {
  const navigate = useNavigate();
  const { code } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit, getValues, formState } = useForm({
    mode: "all",
  });
  const { errors } = formState;

  async function submit(values) {
    try {
      setIsLoading(true);
      const response = await resetPassword(values);
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
      {isLoading && <LoadingIndicator />}
      <Box
        container
        display='flex'
        justifyContent='center'
        alignItems='center'
        marginTop='5%'
      >
        <Box
          width='70%'
          sx={{
            border: " 2px solid #eee",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: '0 0 3px #ADD8E6',
          }}
        >
          <Grid container spacing={2} justifyContent='center' alignItems='center'>
            <Grid item xs={12} md={6}>
              <Box
                component="form"
                onSubmit={handleSubmit(submit, onError)}
                sx={{
                  width: "100%",
                  border: "1px solid #eee",
                  padding: "30px",
                  borderRadius: "5px",
                  boxShadow: '0 0 3px #ADD8E6',
                }}
                autoComplete="off"
              >
                {isLoading && <LoadingIndicator />}
                <Typography variant="h4" textAlign="center" gutterBottom>
                  Create New Password
                </Typography>
                <Stack sx={{ marginBottom: "20px" }}>
                  <TextField
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
                      "Should contain lower&uppercase ,(.,-,#,_),number, min 8 char long"
                    }
                    style={{ boxShadow: '0 0 3px #ADD8E6' }}

                 />
                </Stack>
                <Stack sx={{ marginBottom: "20px" }}>
                  <TextField
                    required
                    size="small"
                    id="passwordConfirm"
                    label="Confirm Password"
                    type="password"
                    {...register("passwordConfirm", {
                      required: "Password is Required",
                      validate: (value) =>
                        value === getValues().password || "Passwords do not match",
                    })}
                    error={errors?.passwordConfirm?.message}
                    helperText={
                      !errors?.passwordConfirm?.message
                        ? ""
                        : errors?.passwordConfirm?.message
                    }
                    style={{ boxShadow: '0 0 3px #ADD8E6' }}

                  />
                </Stack>
                <Stack sx={{ marginBottom: "20px" }}>
                  <TextField
                    required
                    style={{ boxShadow: '0 0 3px #ADD8E6' }}
                    type="text"
                    id="code"
                    label="Code"
                    value={code}
                    {...register("code", { required: "Code is required" })}
                  />
                </Stack>
                <Stack display='flex' justifyContent='center' alignItems='center'>
                  <Button type="submit" variant="contained" disabled={isLoading} 
                 sx={{ width: '60%'}}
                 fontWeight={550} fontFamily={'Nunito'}>
                    Submit
                  </Button>
                </Stack>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <img
                src={image}
                alt="Reset Password Illustration"
                style={{ maxWidth: "90%", height: "auto" }}
              />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}

export default ResetPassword;
