import React, { useState } from 'react';
import { Typography, TextField, Button, Grid, FormControl } from '@mui/material';

const SocialLinks = () => {
  const [formData, setFormData] = useState({
    website: '',
    twitter: '',
    instagram: '',
    facebook: '',
    youtube: '',
    linkedin: '',
    whatsapp: '',
    pinterest: '',
    tiktok: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSaveClick = () => {
    // Handle the save logic using formData
    console.log(formData); // Replace with your save logic
  };

  return (
    <div>
      <Typography variant="h4" sx={{ color: 'white', marginBottom: 2 }}>
        Social Links
      </Typography>
      <FormControl fullWidth>
        <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
            <Typography variant="subtitle1" sx={{ color: 'white' }}>Website:</Typography>
            <TextField
              name="website"
              fullWidth
              sx={{ background: '#262626', borderRadius: '12px', marginTop: '8px' }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="subtitle1" sx={{ color: 'white' }}>Twitter:</Typography>
            <TextField
              name="twitter"
              fullWidth
              sx={{ background: '#262626', borderRadius: '12px', marginTop: '8px' }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="subtitle1" sx={{ color: 'white' }}>Instagram:</Typography>
            <TextField
              name="instagram"
              fullWidth
              sx={{ background: '#262626', borderRadius: '12px', marginTop: '8px' }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="subtitle1" sx={{ color: 'white' }}>Facebook:</Typography>
            <TextField
              name="facebook"
              fullWidth
              sx={{ background: '#262626', borderRadius: '12px', marginTop: '8px' }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="subtitle1" sx={{ color: 'white' }}>YouTube:</Typography>
            <TextField
              name="youtube"
              fullWidth
              sx={{ background: '#262626', borderRadius: '12px', marginTop: '8px' }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="subtitle1" sx={{ color: 'white' }}>LinkedIn:</Typography>
            <TextField
              name="linkedin"
              fullWidth
              sx={{ background: '#262626', borderRadius: '12px', marginTop: '8px' }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="subtitle1" sx={{ color: 'white' }}>WhatsApp:</Typography>
            <TextField
              name="whatsapp"
              fullWidth
              sx={{ background: '#262626', borderRadius: '12px', marginTop: '8px' }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="subtitle1" sx={{ color: 'white' }}>Pinterest:</Typography>
            <TextField
              name="pinterest"
              fullWidth
              sx={{ background: '#262626', borderRadius: '12px', marginTop: '8px' }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="subtitle1" sx={{ color: 'white' }}>TikTok:</Typography>
            <TextField
              name="tiktok"
              fullWidth
              sx={{ background: '#262626', borderRadius: '12px', marginTop: '8px' }}
            />
          </Grid>
        </Grid>
        <div style={{ display: 'flex',justifyContent: 'center', marginTop: '20px' }}>
          <Button
            variant="contained"
            sx={{ background: 'linear-gradient(19.95deg, #131392 15.26%, #A310C0 154.02%)', color: 'white', marginRight: '10px', width: '110px',  }}
            onClick={handleSaveClick}
          >
            Save
          </Button>
        </div>
      </FormControl>
    </div>
  );
};

export default SocialLinks;
