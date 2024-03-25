import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { Box, Button, Stack, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import useUser from '../../pages/Auth/useUser';
import LoadingIndicator from '../../ui/LoadingIndicator';
import styles from "./OwnedCar.module.css"
import useDeleteCar from './useDeleteCar';
import EditCarForm from '../EditCarForm/EditCarForm';
import { useNavigate } from 'react-router-dom';


const Accordion = styled(MuiAccordion)(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&::before': {
    display: 'none',
  },
}));

const AccordionSummary = styled(MuiAccordionSummary)(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? "#fff"
      : '#fff',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function OwnedCar({ setShowForm }) {
  const { data, isLoading } = useUser()
  const { deleteCar, isDeleting, token } = useDeleteCar()
  const [selectedCarId, setSelectedCarId] = useState(null);
  const [confirmationOpen, setConfirmationOpen] = useState(false);
  const [carIdToDelete, setCarIdToDelete] = useState(null);
  const navigate = useNavigate()

  const [expanded, setExpanded] = useState('panel1');
  const handleChange = (panel) => () => {
    setExpanded((prevExpanded) => (prevExpanded !== panel ? panel : false));
  };

  const handleDeleteConfirmation = (carId) => {
    setConfirmationOpen(true);
    setCarIdToDelete(carId);
  };

  const handleConfirmDelete = () => {
    deleteCar(carIdToDelete, token);
    setConfirmationOpen(false);
  };

  const handleCloseConfirmation = () => {
    setConfirmationOpen(false);
  };

  return (
    <> {(isLoading || isDeleting) && <LoadingIndicator load={isDeleting} />}
      <Box sx={{ width: "100%", border: "1px solid #3563E9", borderRadius: "6px" }}>
        {data?.data.ownedCars.map(car =>
          <Accordion expanded={expanded === car.id} onChange={handleChange(car.id)} key={car.id}>
            <AccordionSummary aria-controls={`${car.id}-content`} id={`${car.id}-header`} expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}>
              <Typography sx={{ color: "#000", fontFamily: "Nunito", fontSize: "1.2rem" }}>{car.model}</Typography>
            </AccordionSummary>
            {selectedCarId === car.id ?

              <AccordionDetails >
                <Box className="cardetails">
                  <Stack display="flex" justifyContent="space-around" alignItems="center" flexDirection="row">
                    <Box>
                      <EditCarForm car={car} hidden setShowForm={setShowForm} selectedCarId={selectedCarId} />
                    </Box>
                  </Stack>
                </Box>
              </AccordionDetails> :
              <AccordionDetails>
                <Box className="cardetails">
                  <Stack display="flex" justifyContent="space-around" alignItems="center" flexDirection="row" >
                    <Box sx={{
                      width: "200px",
                      height: "150px",
                      cursor: "pointer",
                    }} onClick={() => navigate("/carDetails", { state: { car } })}>
                      <img className={styles.image} src={car.images[0].url} alt={car.images[0]._id} />
                    </Box>
                    <Box>
                      <div>
                        Active : <span>{car.active === true ? "Yes" : "No"}</span>
                      </div>
                      <div>
                        Approved : <span>{car.aproved === true ? "Yes" : "No"}</span>
                      </div>
                      <div>
                        Average : <span>{car.average}</span>
                      </div>
                      <div>
                        Status : <span>{car.status}</span>
                      </div>
                      <div>
                        Transission : <span>{car.transmission}</span>
                      </div>
                      <div>
                        Capacity : <span>{car.capacity} Person</span>
                      </div>
                      <div>
                        Category : <span>{car.category}</span>
                      </div>
                      <div>
                        City : <span>{car.location.city}</span>
                      </div>
                      <div>
                        Area : <span>{car.location.area}</span>
                      </div>
                      <div>
                        TankCapacity : <span>{car.tankCapacity} LT</span>
                      </div>
                      <div>
                        Price / Day : <span>{car.priceForDay} EGP</span>
                      </div>
                      <div>
                        Total KM : <span>{car.totalKM} KM</span>
                      </div>
                      <div>
                        Plate Number : <span>{car.plateNumber}</span>
                      </div>
                      <div>
                        Status : <span>{car.status}</span>
                      </div>
                    </Box>
                  </Stack>
                  <Stack display="flex" justifyContent="space-around" alignItems="center" flexDirection="row" marginTop={2}>
                    <Box>
                      <Button disabled={car.status === "rented"} variant='contained' size='small' color='error' onClick={() => handleDeleteConfirmation(car.id)}>{car.status === "rented" ? "Rented" : "Delete"}</Button>
                    </Box>
                    <Box>
                      <Button variant='contained' size='small' onClick={() => setSelectedCarId(car.id)}>Update</Button>
                    </Box>
                  </Stack>
                </Box>
              </AccordionDetails>
            }

          </Accordion>)}
      </Box>
      <Dialog
        open={confirmationOpen}
        onClose={handleCloseConfirmation}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Confirm Deletion"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete this Car?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseConfirmation}  size="small" variant='contained' color="error">
            Cancel
          </Button>
          <Button onClick={handleConfirmDelete} size="small" variant='contained' color="primary" autoFocus>
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

