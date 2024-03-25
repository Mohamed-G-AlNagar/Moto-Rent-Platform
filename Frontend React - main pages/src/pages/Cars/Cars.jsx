import styles from "./Cars.module.css";
import { Box, Grid, Hidden } from "@mui/material";
import Navbar from "../../components/NavBar/NavBar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Location from "../../components/Location/Location";
import CarCard from "../../components/CarCard/CarCard";
import Footer from "../../components/Footer/Footer";
import useCars from "./useCars";
import { useState, useEffect } from "react";
import LoadingIndicator from "../../ui/LoadingIndicator";

function Cars() {
  const { data, isLoading: loadingCars } = useCars();
  if(data){
  console.log(data.data)
  }
  const [categories, setCategories] = useState([
    { id: 1, checked: false, label: 'CONVERTIBLE' },
    { id: 2, checked: false, label: 'COUPE' },
    { id: 3, checked: false, label: 'HATCHBACK' },
    { id: 4, checked: false, label: 'SEDAN' },
    { id: 5, checked: false, label: 'SUV' },
    { id: 6, checked: false, label: 'WAGON' },
  ]);
  const [capacities , setCapacities] = useState([
    { id: 1, checked: false, label: 1 },
    { id: 2, checked: false, label: 2 },
    { id: 3, checked: false, label: 3 },
    { id: 4, checked: false, label: 4 },
    { id: 5, checked: false, label: 5 },
    { id: 6, checked: false, label: 6 },
    { id: 7, checked: false, label: 7 },
  ])
  const [selectedPrice, setSelectedPrice] = useState([100, 2500]);
  const [filteredCars, setFilteredCars] = useState([]);
  
  const handleChangeCheckedCategories = (id) => {
    setCategories((prevCategories) =>
    prevCategories.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };
  const handleChangeCheckedCapacities = (id) => {
    setCapacities((prevCapacities) =>
      prevCapacities.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  const handleChangePrice =(event ,value)=>{
    setSelectedPrice(value)
  }

  function applyFilters() {
    let updatedCars = data?.data;
    const categoriesChecked = categories
      .filter((item) => item.checked)
      .map((item) => item.label);

    if (categoriesChecked.length) {
      updatedCars = updatedCars.filter((item) =>
      categoriesChecked.includes(item.category)
      );
    }

    const capacityChecked = capacities
    .filter(item => item.checked)
    .map(item => item.label)

    if(capacityChecked.length) {
      updatedCars = updatedCars.filter(item => capacityChecked.includes(item.capacity))
    }

    const minPrice = selectedPrice[0]
    const maxPrice = selectedPrice[1]

    if(updatedCars){
      updatedCars = updatedCars.filter(
        (item) => item.priceForDay >= minPrice && item.priceForDay <= maxPrice
        );
      }

    setFilteredCars(updatedCars);
  }

  useEffect(() => {
    applyFilters();
  }, [categories, capacities, data , selectedPrice]);

  return (
    <Box>
      {loadingCars && <LoadingIndicator />}
      <Grid container justifyContent="space-between" spacing={2}>
        <Grid item xs={12}>
          <Navbar cars={data}/>
        </Grid>
        <Hidden xsDown>
          <Grid item xs={3}>
            <Sidebar
            categories={categories}
            handleChangeChecked={handleChangeCheckedCategories}
            capacities={capacities}
            handleChangeCheckedCapacities={handleChangeCheckedCapacities}
            selectedPrice={selectedPrice}
            handleChangePrice={handleChangePrice}
             />
          </Grid>
        </Hidden>
        <Grid item xs={12} sm={9} className={styles.carspage}>
          <Grid container className={styles.locationContainer} sx={{ mt: 2 }}>
            <Grid container rowGap={1}>
              {filteredCars?.map((car) => (
                <Grid item xs={12} ms={6} md={4} key={car.id}>
                  <CarCard car={car} LoadingCars={loadingCars} />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Footer />
      </Grid>
    </Box>
  );
}

export default Cars;
