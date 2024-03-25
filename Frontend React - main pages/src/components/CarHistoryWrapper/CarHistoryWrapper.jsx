import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box, Typography } from "@mui/material";
import "./styles.css"
import CarHistory from "../CarHistory/CarHistory"
import imageCar from "../../assets/logo.jpg"

export const CarHistoryWrapper= () => {
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
                <Typography variant="h6" fontSize="20px" color="primary">Your History</Typography>
              </Box>
            </AccordionSummary>
              <CarHistory />
          </Accordion>
      </Box>
    </div>
    </>
  );

}