import React from 'react';
import {
  Typography,
  Button,
  Stack,
Box,
AccordionSummary,
Accordion,
AccordionDetails,
} from "@mui/material";
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import { useNavigate } from 'react-router-dom';
import useRemoveFromWishList from '../CarCard/useRemoveFromWishList';
import LoadingIndicator from '../../ui/LoadingIndicator';

const CarWishList=({car})=>{
  const navigate = useNavigate()
       const {removeFromWishList , removingFromWishList} = useRemoveFromWishList();

    async function handleRemoveFromWishList(id){
    try {
      await removeFromWishList(id)
    } catch(error) {
      console.log(error)
    } 
  }

return (
  <>
  {removingFromWishList && <LoadingIndicator load={removingFromWishList}/>}
<Accordion expanded key={car.id} >
<AccordionSummary aria-controls={`${car.id}-content`} id={`${car.id}-header`} expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}>
  <Typography sx={{color : "#000" , fontFamily: "Nunito" ,fontWeight:700, fontSize : "1.2rem"}}>{car.model}</Typography>
</AccordionSummary> 
        <AccordionDetails>
        <Box className="cardetails">
            <Stack display="flex" justifyContent="space-around" alignItems="center" flexDirection="row" >
                <Box sx={{
                    width : "200px",
                    height : "150px",
                    cursor : "pointer"
                }}
                onClick={()=>navigate("/carDetails" , {state : {car}})}
                >
                    <img style={{width:'100%',border:'1px solid transparent',borderRadius:'50px'}} src={car.images[0].url} alt={car.images[0]._id} />
                </Box>
                <Box>    
                  
                    <div>
                    <span style={{fontWeight:700}}>Transission :</span> <span>{car.transmission}</span>
                    </div>                            
                    <div>
                   <span style={{fontWeight:700}}> Capacity :</span> <span>{car.capacity} Person</span>
                    </div>
                    <div>
                 <span style={{fontWeight:700}}>  Category :</span> <span>{car.category}</span>
                    </div>
                    <div>
                 <span style={{fontWeight:700}}>   City :</span> <span>{car.location.city}</span>
                    </div>
                    <div>
                    <span style={{fontWeight:700}}>   Area :</span> <span>{car.location.area}</span>
                    </div>
                    <div>
                    <span style={{fontWeight:700}}>   TankCapacity :</span> <span>{car.tankCapacity} LT</span>
                    </div>
                    <div>
                    <span style={{fontWeight:700}}>   Price / Day :</span> <span>{car.priceForDay} EGP</span>
                    </div>
                    <div>
                    <span style={{fontWeight:700}}>  Total KM :</span> <span>{car.totalKM} KM</span>
                    </div>
                    <div>
                    <span style={{fontWeight:700}}>  Plate Number :</span> <span>{car.plateNumber}</span>
                    </div>
                </Box>
            </Stack>
            <Stack display="flex" justifyContent="space-around" alignItems="center" flexDirection="row" marginTop={2}>
                <Box>
                    <Button  variant='contained' size='small' color='error' onClick={()=>handleRemoveFromWishList(car.id)}>Delete</Button>
                </Box>
                <Box>
                    <Button variant='contained' size='small'onClick={()=> navigate("/rentalInfo" , {state : {car}})}  >Rent</Button>
                </Box>
            </Stack>
        </Box>
</AccordionDetails>

</Accordion>
</>
)
}
export default CarWishList;


