import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import Button from "@mui/material/Button"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box, Typography } from "@mui/material";
import "./styles.css"
import OwnedCar from "../OwnedCar/OwnedCar"
import AddCarForm from "../AddCarForm/AddCarForm";
import imageCar from "../../assets/logo.jpg"

export const RentedCars= () => {
  const [showForm , setShowForm] = useState(false)

  function handleShowForm(){
    setShowForm(!showForm)
  }

  return (
   <>
    <div>
        <Box fullWidth>
          <Accordion
            disableGutters
            className="accordion-container"
            defaultExpanded
            sx={{ border: "none !important" }}
          >
            <AccordionSummary
              className="accordion-summary"
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Box className="accordion-header">
                <img src={imageCar} alt="logo" width="80px" height="80px"/>
                <Typography variant="h6" fontSize="20px" color="primary">Your Cars</Typography>
              </Box>
            </AccordionSummary>
              <OwnedCar />
          </Accordion>
      </Box>
    </div>

        <Box sx={{mt:2}} >
            <Button variant="contained" size="large" onClick={handleShowForm}>{showForm ? "Hide Form" : "ADD CAR"}</Button>
        </Box>
        { showForm &&  <Box sx={{mt:2}}><AddCarForm /></Box>}
    </>
  );

}