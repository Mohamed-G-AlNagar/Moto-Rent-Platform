import React from 'react';
import { Grid, Card,  Stack } from '@mui/material';


const ImageCars = ({ car }) => {
  return (
    <Card sx={{height:"100%"}}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12}>
          <Stack p={1} borderRadius={8} >
            <img
              src={car?.images[0].url || "default-image-url"}
              alt="MainCarImage"
              style={{
                width: "100%",
                height: "auto",
                objectFit: "cover",
                borderRadius: 8,
              }}
            />
          </Stack>
        </Grid>

        {car?.images?.map((image, index) => (
          <Grid key={index} xs={12} sm={6} md={3} mt={2} item>
            <Stack p={1} borderRadius={8}>
              <img
                src={image.url || "default-image-url"}
                alt={`CarImage ${index + 1}`}
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "cover",
                  borderRadius: index === 0 ? 15 : 20,
                }}
              />
            </Stack>
          </Grid>
        ))}
      </Grid>
    </Card>
  );
};

export default ImageCars;