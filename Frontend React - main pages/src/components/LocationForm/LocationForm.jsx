import React, { useState } from 'react';
import { TextField, Box } from '@mui/material';

const LocationForm = ({onChange , car}) => {
  const [location, setLocation] = useState({
    city: '',
    area: '',
    description: ''
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLocation(prevState => ({
        ...prevState,
        [name]: value
    }));
    onChange(location);
};

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        sx={{marginBottom : "15px"}}
        fullWidth
        size='small'
        label="City"
        name="city"
        // defaultValue={car.location.city}
        value={location.city}
        onChange={handleChange}
        required
      />
      <TextField
        fullWidth
        sx={{marginBottom : "15px"}}
        size='small'
        label="Area"
        name="area"
        // defaultValue={car.location.area}
        value={location.area}
        onChange={handleChange}
        required
      />
      <TextField
        fullWidth
        size='small'
        label="Description"
        name="description"
        // defaultValue={car.location.description}
        value={location.description}
        onChange={handleChange}
        multiline
        rows={4}
      />
      <Box mt={2}>
      </Box>
    </form>
  );
};

export default LocationForm;
