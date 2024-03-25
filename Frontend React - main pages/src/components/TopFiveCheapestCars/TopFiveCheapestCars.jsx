import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { Box, Button, Grid } from '@mui/material';
import LoadingIndicator from '../../ui/LoadingIndicator';
import CarCard from '../CarCard/CarCard';
import useGetTopCheapest from '../../pages/Cars/useGetTopCheapest';

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
       ? 'trasparent'
      : '#trasparent',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
  color : "#54a6ff",
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  borderTop: '1px solid rgba(0, 0, 0, .125)',
  backgroundColor : "#eee",
  display : "flex",
  justifyContent : "space-between",
  alignItems : "center"
}));

export default function TopFiveCheapestCars({length}) {
  const [expanded, setExpanded] = useState('panel1');
  const {data : TopCheapesFivetCars , isLoading : GettingTopFiveCheapest} = useGetTopCheapest();
  const [showAllCars, setShowAllCars] = useState(false);//added by naglaa to show fivth car


  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  // return (
  //   <div >
  //       {GettingTopFiveCheapest && <LoadingIndicator />}
  //     <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
  //       <AccordionSummary aria-controls="panel1d-content" id="panel1d-header" >
  //       <Box sx={{
  //           display : "flex",
  //           justifyContent : "space-between",
  //           alignItems : "center",
  //           width : "100%"
  //       }}>
  //       <Typography>Top Five Cheapest Cars</Typography>
  //       <Typography>View All</Typography>
  //       </Box>
  //       </AccordionSummary>
  //       <AccordionDetails>
  //       <Grid container padding={1}>
  //         {TopCheapesFivetCars?.data.map(car => 
  //           <Grid item xs={12} ms={6} md={4} lg={3} key={car.id}>
  //                <CarCard  car={car} LoadingCars={GettingTopFiveCheapest} key={car.id}/>
  //           </Grid>
  //           )}
  //       </Grid>
  //       </AccordionDetails>
  //     </Accordion>
  //   </div>
  // );
  return (
    <div>
      {GettingTopFiveCheapest && <LoadingIndicator />}

      <Box sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%"
      }}>
        <Typography sx={{ color: "#90A3BF", fontWeight: 600, fontFamily: "Nunito" }}>Top Five Cheapest Cars</Typography>
        <Button sx={{ color: "#90A3BF", textTransform:"unset", fontWeight: 600, fontFamily: "Nunito" }} onClick={() => setShowAllCars(!showAllCars)}>

        {showAllCars ? "Hide All" : "View All"}
        </Button>
      </Box>

      <Grid container padding={1}>
        {TopCheapesFivetCars?.data.slice(0, showAllCars ? TopCheapesFivetCars.data.length :4).map(car => (
          <Grid item xs={12} ms={6} md={4} lg={3} key={car.id}>
            <CarCard car={car} LoadingCars={GettingTopFiveCheapest} key={car.id} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
