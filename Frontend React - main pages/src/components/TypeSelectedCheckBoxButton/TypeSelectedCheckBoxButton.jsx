import Box from '@mui/material/Box';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';


export default function TypeSelectedCheckBoxButton({categories , handleChangeChecked}) {
  return (
    <>
    <Box sx={{ display: 'flex' }} component="form">
      <FormControl sx={{ m: 3 ,color:'#596780',font:"Plus Jakarta Sans",
        fontWeight:600, fontSize:"20px"
       }} component="fieldset" variant="standard">
        <FormLabel component="legend" sx={{color:'#90A3BF',font:"Plus Jakarta Sans",lineHeight:'30px',
            fontWeight:600, fontSize:"12px"}}>T Y P E</FormLabel>
        <FormGroup>
          {categories?.map(category =>
           <FormControlLabel key={category.id}
            control={
              <Checkbox checked={category.checked} onChange={()=>handleChangeChecked(category.id)} name={category.label} value={category.label} />
            }
            label={category.label}
          />)}
        </FormGroup>
      </FormControl>
    </Box>
    </>
  );
}