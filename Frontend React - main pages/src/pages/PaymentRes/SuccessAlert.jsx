import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

export default function SuccessAlert() {
  return (
    <Stack
      sx={{
        width: '100%', 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        minHeight: '39vh',
      }}
    >
      <Alert variant="outlined" severity="success">
        Car is Rented Successfully, Check Your Email Please.
      </Alert>
    </Stack>
  );
}