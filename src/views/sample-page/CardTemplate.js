import React, { useState } from 'react';
import { Typography, Card, CardContent, Button, Switch, Grid } from '@mui/material';

const CardTemplates = () => {
  const [active, setActive] = useState(false);

  const handleToggleChange = () => {
    setActive((prevActive) => !prevActive);
  };

  const handleSaveClick = () => {
    // Handle the save logic here
  };

  const handleDiscardClick = () => {
    // Handle the discard logic here
  };

  const cardTemplateStyles = {
    width: '250px',
    height: '400px',
    borderRadius: '12px',
    background: '#262626',
    margin: '8px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const cardTemplates = Array.from({ length: 10 }, (_, index) => (
    <div key={index} style={cardTemplateStyles}>
      {/* You can customize the content of each empty card */}
      Empty Card {index + 1}
    </div>
  ));

  return (
    <div>
      <Typography variant="h4" sx={{ color: 'white', marginBottom: 2 }}>
        Select Template:
      </Typography>
      
      <Grid container spacing={2}>
        {cardTemplates.map((template, index) => (
          <Grid item key={index}>
            {template}
          </Grid>
        ))}
      </Grid>
      <Switch
        name="active"
        checked={active}
        onChange={handleToggleChange}
      />
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

export default CardTemplates;
