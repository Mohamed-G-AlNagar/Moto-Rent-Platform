import React from 'react';
import TuneIcon from '@mui/icons-material/Tune';
import IconButton from '@mui/material/IconButton';

const FilterButton=()=>{
    return<>
    <IconButton aria-label="filter"

    sx={{ color: '#596780' }}
    >
<TuneIcon/>
</IconButton>
    </>
}

export default FilterButton