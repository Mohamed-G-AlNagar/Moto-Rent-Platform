import { useForm } from "react-hook-form";
import { Box, Stack, TextField, Button, Typography } from "@mui/material";
import useForgetPassword from "./useForgetPassword";
import LoadingIndicator from "../../../ui/LoadingIndicator";

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
    <Box>
      <Box
        onSubmit={handleSubmit(submit, onError)}
        component="form"
        sx={{
          width: "500px",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50% , -50%)",
          border: " 1px solid #eee",
          padding: "30px",
          borderRadius: "5px",
        }}
        autoComplete="off"
      >
        {isLoading && <LoadingIndicator />}
        <Typography variant="h4" textAlign="center" gutterBottom>
          Find Your Account
        </Typography>
        <Stack
          sx={{
            marginBottom: "20px",
          }}
        >
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
          />
        </Stack>
        <Stack>
          <Button type="submit" variant="contained" disabled={isLoading}>
            Send Email
          </Button>
        </Stack>
      </Box>
    </Box>
  );
}

export default ForgetPassword;
