import React, { useState } from 'react';
import { Typography, Button, Grid, Checkbox, FormControl, Select, MenuItem } from '@mui/material';
import Icon1 from 'src/assets/images/icons/delete.png';
import Icon2 from 'src/assets/images/icons/add.png';
import { IconPlus } from '@tabler/icons';

const Appointments = () => {
  const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  const [appointments, setAppointments] = useState(weekdays.map((day) => ({
    day: day,
    open: '',
    close: '',
    isOpen: false,
  })));

  const handleCheckboxChange = (index) => (event) => {
    const newAppointments = [...appointments];
    newAppointments[index].isOpen = event.target.checked;
    setAppointments(newAppointments);
  };

  const handleTimeChange = (index, field) => (event) => {
    const newAppointments = [...appointments];
    newAppointments[index][field] = event.target.value;
    setAppointments(newAppointments);
  };

  const handleFreeClick = () => {
    // Handle the free logic here
  };

  const handlePaidClick = () => {
    // Handle the paid logic here
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
        Appointments
      </Typography>
      <FormControl fullWidth>
        <Grid container spacing={2}>
          {appointments.map((day, index) => (
            <Grid item xs={12} key={index}>
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
                <Grid item xs={1}>
                  <Select
                    value={day.open}
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
                    onChange={handleTimeChange(index, 'close')}
                    sx={{ color: 'white', border: '1px solid #262626' }}
                  >
                    {/* Replace with your timing options */}
                    <MenuItem value="5:00 PM">5:00 PM</MenuItem>
                    <MenuItem value="6:00 PM">6:00 PM</MenuItem>
                    {/* ... */}
                  </Select>
                </Grid>
                <Grid item xs={1}>
                  <img src={Icon1} alt="Icon 1" style={{ maxWidth: '20%', maxHeight: '20%' }} />
                </Grid>
                <Grid item xs={5}>
                  <img src={Icon2} alt="Icon 1" style={{ maxWidth: '12%', maxHeight: '12%' }} />
                </Grid>
              </Grid>
            </Grid>
          ))}
        </Grid>
        <div style={{ display: 'flex', marginTop: '20px' }}>
          <Button
            variant="contained"
            sx={{ background: 'linear-gradient(19.95deg, #131392 15.26%, #A310C0 154.02%)', color: 'white', marginRight: '10px', }}
            onClick={handleFreeClick}
          >
            Free
          </Button>
          <Button
            variant="outlined"
            sx={{ borderColor: 'linear-gradient(19.95deg, #131392 15.26%, #A310C0 154.02%)', color: '#131392', }}
            onClick={handlePaidClick}
          >
            Paid
          </Button>
        </div>
      </FormControl>
      <div style={{ display: 'flex', marginTop: '20px' }}>
        <Button
          variant="contained"
          sx={{ background: 'linear-gradient(19.95deg, #131392 15.26%, #A310C0 154.02%)', color: 'white', marginRight: '10px', width: '110px' }}
          onClick={handleSaveClick}
        >
          Save
        </Button>
        <Button
          variant="outlined"
          sx={{ borderColor: 'linear-gradient(19.95deg, #131392 15.26%, #A310C0 154.02%)', color: '#131392',width: '110px' }}
          onClick={handleDiscardClick}
        >
          Discard
        </Button>
      </div>
    </div>
  );
};

export default Appointments;
