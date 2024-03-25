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
import useGetTopFive from '../../pages/Cars/useGetTopFive';

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
  borderRadius : "5px"
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
  fontFamily : "Nunito",
  color : "#fff"
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  borderTop: '1px solid rgba(0, 0, 0, .125)',
  backgroundColor : "#eee",
  display : "flex",
  justifyContent : "space-between",
  alignItems : "center"
}));

export default function TopFiveCars() {
  const [expanded, setExpanded] = useState('panel1');
  const {data : TopFive , isLoading : GettingTopFive} = useGetTopFive();
  const [showAllCars, setShowAllCars] = useState(false);//naglaa added

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  // return (
  //   <div >
  //       {GettingTopFive && <LoadingIndicator />}
  //     <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
  //       <AccordionSummary aria-controls="panel1d-content" id="panel1d-header" >
  //       <Box sx={{
  //           display : "flex",
  //           justifyContent : "space-between",
  //           alignItems : "center",
  //           width : "100%"
  //       }}>
  //       <Typography>Top Five Cars</Typography>
  //       <Typography>View All</Typography>
  //       </Box>
  //       </AccordionSummary>
  //       <AccordionDetails>
  //       <Grid container padding={1}>
  //         {TopFive?.data.map(car => 
  //           <Grid item xs={12} ms={6} md={4} lg={3} key={car.id}>
  //                <CarCard  car={car} LoadingCars={GettingTopFive} key={car.id}/>
  //           </Grid>
  //           )}
  //       </Grid>
  //       </AccordionDetails>
  //     </Accordion>
  //   </div>
  // );
  return (
    <div>
      {GettingTopFive && <LoadingIndicator />}

      <Box sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%"
      }}>
        <Typography sx={{ color: "#90A3BF", fontWeight: 600, fontFamily: "Nunito" }}>Top Five Cars</Typography>
        <Button onClick={() => setShowAllCars(!showAllCars)} sx={{textTransform:'unset',color: "#90A3BF", fontWeight: 600, fontFamily: "Nunito"}}>{showAllCars ? "Hide All" : "View All"}</Button>
</Box>

      <Grid container padding={1}>
        {TopFive?.data.slice(0, showAllCars ? TopFive.data.length : 4).map(car => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={car.id}>
            <CarCard car={car} LoadingCars={GettingTopFive} key={car.id} />
          </Grid>
        ))}
      </Grid>
    </div>
  );


}
