import React, { useState } from 'react';
import { Typography, Button, Grid, Checkbox, FormControl, InputLabel, Select, MenuItem, TextField } from '@mui/material';

const BusinessHoursTab = () => {
  const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  const [businessHours, setBusinessHours] = useState(weekdays.map((day) => ({
    day: day,
    open: '',
    close: '',
    isOpen: false,
  })));

  const handleCheckboxChange = (index) => (event) => {
    const newBusinessHours = [...businessHours];
    newBusinessHours[index].isOpen = event.target.checked;
    setBusinessHours(newBusinessHours);
  };

  const handleTimeChange = (index, field) => (event) => {
    const newBusinessHours = [...businessHours];
    newBusinessHours[index][field] = event.target.value;
    setBusinessHours(newBusinessHours);
  };

  const handleSaveClick = () => {
    // Handle the save logic here
  };

  const handleDiscardClick = () => {
    // Handle the discard logic here
  };

  return (
    <div>
      <Typography variant="h4" sx={{ color: 'white', marginBottom: 2 }}>
        Business Hours
      </Typography>
      <FormControl fullWidth>
        <Grid container spacing={2}>
          {businessHours.map((day, index) => (
            <Grid item xs={6} key={index}>
              <Grid container alignItems="center">
                <Grid item xs={1}>
                  <Checkbox
                    checked={day.isOpen}
                    onChange={handleCheckboxChange(index)}
                    color="primary"
                    sx={{ color: 'white' }}
                  />
                </Grid>
                <Grid item xs={2}>
                  <Typography variant="body1" sx={{ color: 'white' }}>
                    {day.day}
                  </Typography>
                </Grid>
                <Grid item xs={3}>
                  <Select
                    value={day.open}
                    disabled={!day.isOpen}
                    onChange={handleTimeChange(index, 'open')}
                    sx={{ color: 'white', border: '1px solid #262626' }}
                  >
                    {/* Replace with your timing options */}
                    <MenuItem value="8:00 AM">8:00 AM</MenuItem>
                    <MenuItem value="9:00 AM">9:00 AM</MenuItem>
                    {/* ... */}
                  </Select>
                  </Grid>
                  <Grid item xs={1}>
                  <Typography variant="body1" sx={{ color: 'white' }}>
                    To
                  </Typography>
                  </Grid>
                  <Grid item xs={1}>
                  <Select
                    value={day.close}
                    disabled={!day.isOpen}
                    onChange={handleTimeChange(index, 'close')}
                    sx={{ color: 'white' , border: '1px solid #262626' }}
                  >
                    {/* Replace with your timing options */}
                    <MenuItem value="5:00 PM">5:00 PM</MenuItem>
                    <MenuItem value="6:00 PM">6:00 PM</MenuItem>
                    {/* ... */}
                  </Select>
                  </Grid>
              </Grid>
            </Grid>
          ))}
        </Grid>
      </FormControl>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        <Button
          variant="contained"
          sx={{ background: 'linear-gradient(19.95deg, #131392 15.26%, #A310C0 154.02%)', color: 'white', marginRight: '10px' }}
          onClick={handleSaveClick}
        >
          Save
        </Button>
        <Button
          variant="outlined"
          sx={{ borderColor: 'linear-gradient(19.95deg, #131392 15.26%, #A310C0 154.02%)', color: '#131392' }}
          onClick={handleDiscardClick}
        >
          Discard
        </Button>
      </div>
    </div>
  );
};

export default BusinessHoursTab;
