import React, { useState } from 'react';
import { TextField, Button, Grid, Box } from '@mui/material';

const DocumentationForm = () => {
  const [documents, setDocument] = useState({
    insurance: { insurance: '', photo: null },
    carLicense :{ inputValue: '', photo: null },
    carInspection :{ inputValue: '', photo: null }
  });

  const handleInputChange = (index, event) => {
    const newFormData = {documents};
    newFormData[index].inputValue = event.target.value;
    setDocument(newFormData);
  };

  const handlePhotoUpload = (index, event) => {
    const newFormData = {documents};
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      newFormData[index].photo = reader.result;
      setDocument(newFormData);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };


  return (
    <Box component="form">
       <Grid container spacing={2} >
          <Grid item xs={6}>
            <TextField
              label={`insurance`}
              value="insurance"
              onChange={(event) => handleInputChange(event)}
              fullWidth
              size='small'
            />
          </Grid>
          <Grid item xs={4}>
            <input
              accept="image/*"
              style={{ display: 'none' }}
              id={`photo-upload-1`}
              type="file"
              onChange={(event) => handlePhotoUpload(event)}
            />
            <label htmlFor={`photo-upload-1`}>
              <Button variant="contained" size="small" component="span">
                Upload
              </Button>
            </label>
          </Grid>
        </Grid>
    </Box>
  );
};

export default DocumentationForm;
