import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import DatePicker from '@mui/lab/DatePicker';

const MyDateSelectComponent = () => {
  const [selectedDate, setSelectedDate] = React.useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <DatePicker
      label="Select a Date"
      value={selectedDate}
      onChange={handleDateChange}
      renderInput={(params) => (
        <FormControl fullWidth>
          <InputLabel id="select-date-label">Select a Date</InputLabel>
          <Select
            labelId="select-date-label"
            label="Select a Date"
            value=""
            {...params}
          >
            <MenuItem value="" disabled>
              <em>None</em>
            </MenuItem>
          </Select>
        </FormControl>
      )}
      adapter={AdapterDateFns}
    />
  );
};

export default MyDateSelectComponent;
