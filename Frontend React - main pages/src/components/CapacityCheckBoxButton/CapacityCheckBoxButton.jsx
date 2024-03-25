import * as React from 'react';
import Box from '@mui/material/Box';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function CapacityCheckBoxButton({ capacities , handleChangeCheckedCapacities}) {

  return (
    <Box sx={{ display: 'flex' }}>
      <FormControl sx={{ m: 3 ,color:'#596780',font:"Plus Jakarta Sans",
    fontWeight:600, fontSize:"20px "
    }}component="fieldset" variant="standard">
        <FormLabel component="legend" sx={{color:'#90A3BF',font:"Plus Jakarta Sans",lineHeight:'30px',
        fontWeight:600, fontSize:"12px"}}>C A P A C I T Y</FormLabel>
        <FormGroup>
          {capacities.map(capacity =>
           <FormControlLabel
            control={
              <Checkbox checked={capacity.checked} onChange={()=>handleChangeCheckedCapacities(capacity.id)} name={capacity.label} value={capacity.label} />
            }
            label={capacity.label === "1" ? `${capacity.label} Person` : `${capacity.label} Persons`}
          />)}
        </FormGroup>
      
      </FormControl>
  
    
    </Box>
  );
}