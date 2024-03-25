import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { Box, Button, Grid } from '@mui/material';
import useGetTopFiveExpensive from '../../pages/Cars/useGetTopFiveExpensive';
import LoadingIndicator from '../../ui/LoadingIndicator';
import CarCard from '../CarCard/CarCard';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&::before': {
    display: 'none',
  },
  borderRadius : "5px",
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
    ? '#54a6ff'
    : '#54a6ff',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
  color : "#fff"
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  borderTop: '1px solid rgba(0, 0, 0, .125)',
  backgroundColor : "#eee",
  display : "flex",
  justifyContent : "space-between",
  alignItems : "center"
}));

export default function TopFiveExpensiveCars() {
  const [expanded, setExpanded] = useState('panel1');
  const {data : topFiveExpensiveCars , isLoading : GettingTopFiveExpensive} = useGetTopFiveExpensive();
  const [showAllCars, setShowAllCars] = useState(false);//naglaa added


  const [showRemaining, setShowRemaining] = useState(false);
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };


  return (
    <div >
      {GettingTopFiveExpensive && <LoadingIndicator />}

      <Box sx={{
          display : "flex",
          justifyContent : "space-between",
          alignItems : "center",
          width : "100%"
      }}>
        <Typography sx={{ color: "#90A3BF", fontWeight: 600, fontFamily: "Nunito" }}>Top Five Expensive Cars</Typography>
        <Button sx={{textTransform:'unset', color: "#90A3BF", fontWeight: 600, fontFamily: "Nunito" }} variant='text' onClick={() => setShowAllCars(!showAllCars)}>

        {showAllCars ? "Hide All" : "View All"}
        </Button>
      </Box>

      <Grid container padding={1}>
        {topFiveExpensiveCars?.data.slice(0, (showAllCars ? topFiveExpensiveCars.data.length : 4)).map(car => (
          <Grid item xs={12} ms={6} md={4} lg={3} key={car.id}>
            <CarCard  car={car} LoadingCars={GettingTopFiveExpensive} key={car.id}/>
          </Grid>
        ))}
      </Grid>
    </div>
  )
  
}
