import CarWishList from "../../components/CarWishlist/CarWishlist";
import { Accordion, AccordionSummary, Box, Button, Typography } from "@mui/material";
import useUser from "../Auth/useUser";
import LoadingIndicator from "../../ui/LoadingIndicator";
import useClearWishList from "./useClearWishList";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FavoriteIcon from '@mui/icons-material/Favorite';
import "./style.css"


const Wishlist=()=>{
    const {data : user, isLoading} = useUser()
    const {clearWishList , clearingWishList} = useClearWishList();
    async function handleClearWishlist(){
      try {
        await clearWishList()
      } catch(error) {
        console.log(error)
      }
    }
    return (
      <>
        {clearingWishList && <LoadingIndicator load={clearingWishList} />}
        <div>
        {isLoading && <LoadingIndicator load={isLoading}/>}
        <Box  >
          <Accordion
            disableGutters
            defaultExpanded
            sx={{ border: "none !important" ,width:"100%",ml:3,mt:1}}
          >
            <AccordionSummary
              className="accordion-summary"
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Box className="accordion-header">
                <FavoriteIcon sx={{color:"#3563E9"}}></FavoriteIcon>
                <Typography variant="h6" fontSize="20px" fontWeight={700} color="primary">Wish List</Typography>
              </Box>
            </AccordionSummary>
            {user?.data?.wishlist.map(car => 
               <CarWishList  car={car}></CarWishList>)}
          </Accordion>
          {
        user?.data?.wishlist.length > 0 &&
        <Box sx={{width : "fitContent" , ml : "20px ",mb:'20px',mt:'10px'}}>
      <Button variant='contained'  sx={{textTransform:'unset',backgroundColor:'red'}} onClick={handleClearWishlist} >Clear WishList</Button>
      </Box>   
      }
      </Box>
    </div>
    </>
)
}
export default Wishlist

