import React from "react";
import CapacityCheckBoxButton from '../CapacityCheckBoxButton/CapacityCheckBoxButton';
import PriceFliterButton from '../PriceFliterButton/PriceFliterButton';
import TypeSelectedCheckBoxButton from "../TypeSelectedCheckBoxButton/TypeSelectedCheckBoxButton"
import Box from '@mui/material/Box';
import styles from "./Sidebar.module.css"

export default function Sidebar({categories , handleChangeChecked, selectedPrice, handleChangePrice , capacities , handleChangeCheckedCapacities}){
    return (
    <Box sx={{ml:2}} className={styles.sidebar}>
    <TypeSelectedCheckBoxButton categories={categories} handleChangeChecked={handleChangeChecked}></TypeSelectedCheckBoxButton>
    <CapacityCheckBoxButton 
            capacities={capacities}
            handleChangeCheckedCapacities={handleChangeCheckedCapacities}>
    </CapacityCheckBoxButton>
    <PriceFliterButton
     selectedPrice={selectedPrice}
     handleChangePrice={handleChangePrice}
    >
    </PriceFliterButton> 
    </Box>
        )
}