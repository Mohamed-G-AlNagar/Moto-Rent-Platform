import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

export default function FailureAlert() {
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
      <Alert variant="outlined" severity="error">
        Something Went Wrong, please try again.
      </Alert>
    </Stack>
  );
}