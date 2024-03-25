import React, { useState } from 'react';
import {Typography,  Box, Button, Grid, Avatar, Rating, TextField, Stack } from '@mui/material';
import {  deepPurple } from '@mui/material/colors';

import { useForm } from 'react-hook-form';
import useUser from "../../Auth/useUser"
import useAddReview from "./useAddReview"
import useGetAllReviews from './useGetAllReviews';
import LoadingIndicator from '../../ui/LoadingIndicator';
import { MdDelete } from "react-icons/md";
import useDeleteReview from './useDeleteReview';
import { BsPencilSquare } from "react-icons/bs";
import { getReviewById } from '../../service/reviewApi';
import useUpdatedReview from './useUpdatedReview';


const Review = ({carDetails}) => {
  const {data : user} = useUser()
  const {register , handleSubmit , reset  , watch} = useForm()
  const [rating , setRating] = useState(1);
  const {addReview , creatingReview} = useAddReview()
  const {data : reviews , isLoading : loadingReviews} = useGetAllReviews(carDetails?._id)
  const {deleteReview , deletingReview} = useDeleteReview()
  const [showUpdateForm , setShowUpdateForm] = useState(false)
  const [updatedReview , setUpdatedReview] = useState(null)
  const {updateReview , updatingReview} = useUpdatedReview()
  const [change , setChange] = useState(false)

  const reviewField = watch("review")
  const reviewFieldUpdate = watch("updatedreview")

  async function handleDeleteReview(id){
    try {
      await deleteReview(id)
      setChange(!change)
    }catch(error){
      console.log(error)
    }
  }

  async function handlegetReview(id){
    try {
      const res = await getReviewById(id)
      setShowUpdateForm(true)
      setUpdatedReview(res)
      console.log("*******",updatedReview.data.id)
    } catch(error) {
      console.log(error)
    }
  }

  const [updatedRating , setUpdatedRating] = useState(updatedReview?.rating);


  async function submit(val) {
    const values = {
      car : carDetails?._id,
      review : val.review,
      rating,
    }
    try {
      await addReview(values)
      reset()
    } catch(error) {
      console.log(error)
    }
  }

  function onError(errors){
    console.log(errors)
  }

  async function submitUpdate(val){
    const values = {
      reviewId : updatedReview.data.id,
      review : val.updatedreview,
      rating : updatedRating, 
    }
    
    try {
      await updateReview(values)
      reset()
      setShowUpdateForm(false)
    } catch(error) {
      console.log(error)
    }
  }

  function UpdateErrors(errors) {
    console.log(errors)
  }

return<>
  {(loadingReviews || deletingReview || updatingReview) && <LoadingIndicator load={loadingReviews} />}
  <>
  <Box sx={{ p: 5,  }} component="form" onSubmit={handleSubmit(submit , onError)}>
      <Box display="inline"  >
        <Typography  variant="body1" component="span" sx={{fontSize:"22px",fontWeight:600,
        font:"Plus Jakarta Sans",color:"#1A202C",}} >
        Reviewes
        </Typography>
        <Button variant="contained"  disabled size='small' sx={{fontSize:"16px",fontWeight:600,
        font:"Plus Jakarta Sans",ml:2,color:"#fff", backgroundColor:"#3563E9" ,border:"1px #3563E9 ",borderRadius:"8px", 
        }} >{reviews?.data.length}
        </Button>
      </Box>
        <Grid container display={'flex'}  >
        {user?.data?.rentedCars?.filter(car => car.id === carDetails?._id).length > 0 ?
        <>
        <Grid item xs={6} sm={10} direction={'row'}  justifyContent={'flex-start'}>
        <Avatar sx={{ bgcolor: deepPurple[500], display:"inline",p:1 }} >{user?.data.firstName.split("")[0]}{user?.data.lastName.split("")[0]}</Avatar>
        <Typography component="span" fontSize={"20px"} ml={2} fontWeight={700}  color={"#1A202C"}>{user?.data.firstName}{" "}{user?.data.lastName}</Typography>
        </Grid>
        <Grid item xs={6} sm={2}  flexDirection={'column'} justifyContent={'end'}>
        <Typography component="legend" fontSize={"14px"} fontWeight={500}  color={"#90A3BF"}>{}</Typography>

        <Rating
        name="rating"
        id = "rating"
        label = "rating"
        value={rating}
        onChange={(e)=>setRating(e.target.value)}
        />

        </Grid>
        <Grid item sm={12}>
        <TextField 
        id="review"
        name="review"
        multiline
        rows={3}
        variant="outlined"
        fullWidth
        sx={{border:"1px #90A3BF",borderRadius:"20px",m:2}}
        placeholder="Type your review here..."
        {...register("review")}
       />
        </Grid>
        <Grid sm={12} item display={"flex"}  flexDirection={'row'} justifyContent={'flex-end'}>
        <Button size="medium" type="submit" disabled={!reviewField} sx={{ml:2,mr:2,font:"Plus Jakarta Sans",
            fontWeight:600, backgroundColor:'#3563E9',textTransform:"unset"}} variant="contained" >
            Add Review 
        </Button>
        </Grid>
        </> : 
          
          <Box>You have to rent The Car First , to add a review on it</Box>
          
        }
    </Grid>
  </Box>
  </>
  {showUpdateForm ?
        <>
        <Box component="form" sx={{ p: 5,  }} onSubmit={handleSubmit(submitUpdate , UpdateErrors)} fullWidth>

          <Stack>

        <Grid item xs={6} sm={10} direction={'row'}  justifyContent={'flex-start'} mt={2}>
        <Avatar sx={{ bgcolor: deepPurple[500], display:"inline",p:1 }} >{user?.data.firstName.split("")[0]}{user?.data.lastName.split("")[0]}</Avatar>
        <Typography component="span" fontSize={"20px"} ml={2} fontWeight={700}  color={"#1A202C"}>{user?.data.firstName}{" "}{user?.data.lastName}</Typography>
        </Grid>
        <Grid item xs={6} sm={2}  flexDirection={'column'} justifyContent={'end'}>
        <Typography component="legend" fontSize={"14px"} fontWeight={500}  color={"#90A3BF"}>{}</Typography>

        <Rating
        name="updatedRating"
        id = "updatedRating"
        label = "updatedRating"
        value={updatedRating}
        defaultValue={updatedReview.data.rating}
        onChange={(e)=>setUpdatedRating(e.target.value)}
        />

        </Grid>
          </Stack>
        <Grid item sm={12}>
        <TextField 
        id="updatedreview"
        name="updatedreview"
        multiline
        rows={3}
        variant="outlined"
        defaultValue={updatedReview.data.review}
        fullWidth
        sx={{border:"1px #90A3BF",borderRadius:"20px",m:2}}
        placeholder="Type your review here..."
        {...register("updatedreview")}
        />
        </Grid>
        <Grid sm={12} item display={"flex"}  flexDirection={'row'} justifyContent={'flex-end'}>
        <Box fullWidth  display="flex" justifyContent="space-between">
        <Stack direction="row">
        <Button onClick={(e)=> { e.preventDefault();
                                setShowUpdateForm(false) }} sx={{ml:2,mr:2,font:"Plus Jakarta Sans",
                                fontWeight:600, backgroundColor:'#3563E9',textTransform:"unset"}} variant="contained" size="medium">Back</Button>
        <Button size="medium" disabled={!reviewFieldUpdate} type="submit" sx={{ml:2,mr:2,font:"Plus Jakarta Sans",
            fontWeight:600, backgroundColor:'#3563E9',textTransform:"unset"}} variant="contained" >
            Update Your Review 
        </Button>
        </Stack>
        </Box>
        </Grid>
    </Box>
        </> :
        <Box sx={{ p: 5,  }}>
         {

           reviews?.data.map(rev => 
            <Grid container display={'flex'}mt={4} key={rev.id}>
        <Grid item xs={6} sm={10} direction={'row'}  justifyContent={'flex-start'}>
        <Avatar sx={{ bgcolor: deepPurple[500], display:"inline",p:1 }} >{rev.user.firstName.split("")[0]}{rev?.user.lastName.split("")[0]}</Avatar>
        <Typography component="span" fontSize={"20px"} ml={2} fontWeight={700}  color={"#1A202C"}>{rev?.user.firstName}{" "}{rev?.user.lastName}</Typography>
        </Grid>
        <Grid item xs={6} sm={2}  flexDirection={'column'} justifyContent={'end'}>
        <Typography component="legend" fontSize={"14px"} fontWeight={500}  color={"#90A3BF"}>{new Date(rev?.createdAt).getDate()}-{new Date(rev?.createdAt).getMonth()}-{new Date(rev.createdAt).getFullYear()}</Typography>
        <Rating name="read-only" value={rev?.rating} readOnly />
        {
          rev?.user.id === user?.data.id &&  
        <>
        <Stack direction="row">
        <Button size='large' onClick={()=>handleDeleteReview(rev?.id)}>
            <MdDelete />
        </Button>
        <Button size='large' onClick={()=>handlegetReview(rev?.id)}>
        <BsPencilSquare />
        </Button>
        </Stack>
        </>
        }
        </Grid>
        <Grid item sm={12}>
        <Typography  component="legend" ml={8} fontSize={"16px"} lineHeight={"28px"} fontWeight={400}  color={"#596780"}>
          {rev.review}
        </Typography>
        </Grid>
        </Grid>)}
        </Box>
      } 
  </>
}

export default Review