import React, { useState } from 'react';
import {
  Typography,
  Button,
  Grid,
  Checkbox,
  FormControl,
  Modal,
  Paper,
  Input,
} from '@mui/material';
import { DeleteOutline } from '@mui/icons-material';

const Appointments = () => {
  const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  const [appointments, setAppointments] = useState(weekdays.map((day) => ({
    day: day,
    open: '',
    close: '',
    isOpen: false,
  })));

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedToDelete, setSelectedToDelete] = useState(null);

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

  const handleAddTimeSlot = () => {
    const newAppointments = [...appointments];
    newAppointments.push({
      day: '',
      open: '',
      close: '',
      isOpen: false,
    });
    setAppointments(newAppointments);
  };

  const handleDeleteTimeSlot = () => {
    if (selectedToDelete !== null) {
      const newAppointments = appointments.filter((_, index) => index !== selectedToDelete);
      setAppointments(newAppointments);
      setSelectedToDelete(null);
      setIsModalOpen(false);
    }
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
                <Grid item xs={2}>
                  <Input
                    value={day.open}
                    onChange={handleTimeChange(index, 'open')}
                    sx={{ color: 'white', border: '1px solid #262626', padding: '6px' }}
                    placeholder="Open"
                    type="time" // Use type="time" for time input
                  />
                </Grid>
                <Grid item xs={1}>
                  <Typography variant="body1" sx={{ color: 'white' }}>
                    To
                  </Typography>
                </Grid>
                <Grid item xs={2}>
                  <Input
                    value={day.close}
                    onChange={handleTimeChange(index, 'close')}
                    sx={{ color: 'white', border: '1px solid #262626', padding: '6px' }}
                    placeholder="Close"
                    type="time" // Use type="time" for time input
                  />
                </Grid>
                <Grid item xs={1}>
                  <DeleteOutline
                    onClick={() => {
                      setSelectedToDelete(index);
                      setIsModalOpen(true);
                    }}
                    sx={{ color: 'white', cursor: 'pointer' }}
                  />
                </Grid>
              </Grid>
            </Grid>
          ))}
        </Grid>
        <div style={{ display: 'flex', marginTop: '20px' }}>
          <Button
            variant="contained"
            sx={{ background: 'linear-gradient(19.95deg, #131392 15.26%, #A310C0 154.02%)', color: 'white', marginRight: '10px', }}
            onClick={handleAddTimeSlot}
          >
            Add Time Slot
          </Button>
        </div>
      </FormControl>

      {/* Confirmation Modal */}
      <Modal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Paper
          style={{
            padding: '2rem',
            background: 'black',
            width: '400px',
            borderRadius: '18px',
          }}
        >
          <Typography
            variant="h6"
            style={{
              marginBottom: '1rem',
              color: 'white',
              display: 'relative',
              textAlign: 'center',
            }}
          >
            Confirm Deletion
          </Typography>
          <Typography variant="body1" sx={{ color: 'white', marginBottom: '1rem' }}>
            Are you sure you want to delete this time slot?
          </Typography>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Button
              variant="contained"
              sx={{ background: '#FF0000', color: 'white', marginRight: '10px' }}
              onClick={handleDeleteTimeSlot}
            >
              Delete
            </Button>
            <Button
              variant="outlined"
              sx={{ borderColor: 'linear-gradient(19.95deg, #131392 15.26%, #A310C0 154.02%)', color: '#131392' }}
              onClick={() => setIsModalOpen(false)}
            >
              Cancel
            </Button>
          </div>
        </Paper>
      </Modal>

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
