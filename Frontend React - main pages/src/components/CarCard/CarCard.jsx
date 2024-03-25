import styles from "./CarCard.module.css";

import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
  Stack,
  Box,
  Button,
  Grid,
  IconButton,
} from "@mui/material";

import EvStationIcon from "@mui/icons-material/EvStation";
import AdjustIcon from "@mui/icons-material/Adjust";
import PersonIcon from "@mui/icons-material/Person";
import FavouriteICon from "../../ui/FavouriteICon";
import LoadingIndicator from "../../ui/LoadingIndicator";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import useAddToWishList from "./useAddToWishList";
import useRemoveFromWishList from "./useRemoveFromWishList";
import NotFavouriteICon from "../../ui/NotFavouriteICon";
import useUser from "../../pages/Auth/useUser";



function CarCard({car , LoadingCars}) {
  const navigate = useNavigate()
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const {addToWishList , addingToWishList , res} = useAddToWishList()
  const {removeFromWishList , removingFromWishList} = useRemoveFromWishList()
  const {data : user , isLoading} = useUser()


  const handleHoverEnter = () => {
    setIsHovered(true);
  };

  const handleHoverLeave = () => {
    setIsHovered(false);
    setIsClicked(false);
  };

  async function handleAddToWishList(id){
    try {
      await addToWishList(id)
    } catch(error) {
      console.log(error)
    } 
  }

  async function handleRemoveFromWishList(id){
    try {
      await removeFromWishList(id)
    } catch(error) {
      console.log(error)
    } 
  }


  return (
      <>
      {(LoadingCars || addingToWishList || removingFromWishList || isLoading) && <LoadingIndicator />}
        <div className={styles.slider} key="1">
          <Grid container gap="20px">
            <Grid item  >
              <Card style={{border:"1px solid #ffffff",borderRadius:"20px" ,width:"100%",height:"100%"}}
                className={`${styles.card} ${isHovered && styles.cardHover} ${isClicked && styles.cardClick}`}
                onMouseEnter={handleHoverEnter}
                onMouseLeave={handleHoverLeave}
                sx={{
                  maxWidth: "304px",
                  maxHeight: "388px",
                  padding: "10px !important",
                  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1), 0px 4px 20px rgba(0, 0, 0, 0.2)'

                
                }}
              >
                <CardHeader sx={{fontWeight:700,font:
                "Plus Jakarta Sans",fontSize:"20px",
                textTransform: "capitalize",
    
                }} action={
                  <>
                  {user?.data?.wishlist.filter(c => c._id === car._id ).length > 0 ? <IconButton onClick={()=>handleRemoveFromWishList(car._id)}>
                  <FavouriteICon  />
                  </IconButton> :
                   <IconButton onClick={()=>handleAddToWishList(car.id)}>
                  <NotFavouriteICon  />
                  </IconButton>
                  }
                  </>
                } title={car?.brand.brand} />
                <Typography  component={'span'} style={{color:"#90A3BF",
              fontSize:"14px",
              fontWeight:700,
              font:"Plus Jakarta Sans",
              ml:2
                }}>{car.category}</Typography>
                <Box sx={{role:'button', cursor:"pointer"}} onClick={()=>navigate("/carDetails" , {state : {car}})}>
                  <CardMedia
                    component="img"
                    image={car.images[0]?.url}
                    alt="Car image"
                    width="192px"
                    height="100px"

                    sx={{
                      marginTop: "15px",
                      marginBottom: "15px",
                    }}
                  />
                  <Box className={styles.shadow}></Box> 
                </Box>
              <CardContent>
                <Stack direction="row" spacing={2} color="#90A3BF">
                   <Box display="flex">

                     <EvStationIcon fontSize="small" />
                     <Typography>{car.tankCapacity} L</Typography>
                   </Box>
                <Box display="flex">
                     <AdjustIcon fontSize="small" />
                   <Typography>{car.transmission}</Typography>
                                      </Box>
                <Box display="flex">
                     <PersonIcon fontSize="small" />
                     <Typography>{car.capacity} persons</Typography>
                   </Box>
                 </Stack>
               </CardContent>
               <CardContent>
                 <Stack
                   direction="row"
                   spacing={2}
                   display="flex"
                   alignItems="center"
                   className={styles.priceAction}
                 >
                   <Box>
                    <Typography component={'span'} 
                    sx={{fontSize:'20px',
                    fontWeight:700,
                  font:"Plus Jakarta Sans"
                  }}
                    >EGP{car.priceForDay}/</Typography>day
                   </Box>
                   <Box>
                   {(car.status !== "available" )  ? (
  <Button variant="contained" disabled >
    Not Avail
  </Button>
) : (
  <Button variant="contained"  sx={{textTransform:"unset"}} onClick={() => navigate("/rentalInfo", { state: { car } })}>
 Rent
  </Button>
)}
                   </Box>
                 </Stack>
               </CardContent> 
                <CardActions disableSpacing></CardActions>
              </Card>
            </Grid>
          </Grid>
        </div>
      </>
  );
}

export default CarCard;
