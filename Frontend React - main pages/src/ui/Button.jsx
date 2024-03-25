import { Box } from "@mui/material";

function Button({ children }) {
  return (
    <Box>
      <Button variant="contained">{children}</Button>
    </Box>
  );
}

export default Button;
