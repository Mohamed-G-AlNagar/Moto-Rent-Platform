import { styled } from '@mui/material/styles';
import Slider from '@mui/material/Slider';
import { Box, Typography } from '@mui/material';

const StyledSlider = styled(Slider)({
  width: '100%',
  '& .MuiSlider-thumb': {
    color: '#54a6ff',
  },
  '& .MuiSlider-rail': {
    color: 'rgba(0, 0, 0, 0.26)',
  },
  '& .MuiSlider-track': {
    color: '#54a6ff',
  },
});

const PriceFliterButton = ({ selectedPrice, handleChangePrice }) => {
  return (
    <Box sx={{padding : "20px"}}>
    <StyledSlider
      value={selectedPrice}
      onChange={handleChangePrice}
      valueLabelDisplay='on'
      aria-label='range-slider'
      min={250}
      max={2500}
      />
       <Typography sx={{color:'#90A3BF',font:"Plus Jakarta Sans",lineHeight:'30px',
          fontWeight:600, fontSize:"12px"}}>
          P R I C E
        </Typography>
    </Box>
    
  );
};

export default PriceFliterButton;
