import React, { useRef, useState } from 'react';
import {
  Card,
  CardContent,
  FormGroup,
  TextField,
  Switch,
  FormControlLabel,
  Grid,
  Box,
  Typography,
  Button,
} from '@mui/material';
import { IconEdit } from '@tabler/icons';
import Icon1 from 'src/assets/images/icons/Icon 1.png';

const PersonalInformation = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    designation: '',
    description: '',
    email: '',
    alternateEmail: '',
    phone: '',
    alternatePhone: '',
    location: '',
    locationURL: '',
    dateOfBirth: '',
    jobTitle: '',
    defaultLanguage: '',
    enableLanguage: false,
  });

  const imageInputRef = useRef(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSwitchChange = (event) => {
    const { name, checked } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: checked,
    }));
  };

  const handleButtonClick = () => {
    if (imageInputRef.current) {
      imageInputRef.current.click();
    }
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    // Handle the selected image file, e.g., upload it or display it
  };

  return (
    <CardContent>
      <Card
        sx={{
          mt: 3,
          background: '#000000',
          borderRadius: '0.5rem',
          overflow: 'hidden',
          position: 'relative',
          border: formData.enableLanguage
            ? '2px solid linear-gradient(180deg, #290988 0%, #BD2BC3 100%)'
            : 'none',
        }}
      >
        <CardContent>
          <div
            style={{
              position: 'relative',
              marginBottom: '10px',
            }}
          >
            <div
              style={{
                width: '100%',
                height: '200px',
                borderRadius: '0.5rem',
                backgroundImage: 'linear-gradient(19.95deg, #131392 15.26%, #A310C0 154.02%)',
                position: 'relative',
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'flex-start',
              }}
            >
              <Button
                onClick={handleButtonClick}
                variant="contained"
                sx={{
                  background: 'linear-gradient(19.95deg, #131392 15.26%, #A310C0 154.02%)',
                  color: 'white',
                  m: 1,
                  boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                  overflow: 'hidden',
                  display: 'flex',
                  alignItems: 'center',
                  backdropFilter: 'blur(10px) saturate(100%) contrast(45%) brightness(130%)',
                  WebkitBackdropFilter: 'blur(10px) saturate(100%) contrast(45%) brightness(130%)',
                }}
              >
                <span style={{ flex: 1 }}>Add Cover</span>
                <span></span>
                <IconEdit sx={{ width: 18, height: 18, color: 'white', marginLeft: 50 }} />
              </Button>
            </div>
            <div
              style={{
                borderRadius: '50%',
                width: '140px',
                height: '140px',
                background: 'linear-gradient(19.95deg, #131392 15.26%, #A310C0 154.02%)',
                border: '1px solid white',
                position: 'absolute',
                bottom: '-60px',
                left: '30px',
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'center',
              }}
            >
              <div
                onClick={handleButtonClick}
                style={{
                  borderRadius: '50%',
                  width: '30px',
                  height: '30px',
                  background: 'white',
                  border: '4px solid #FFFFFF',
                  position: 'absolute',
                  bottom: '-16px',
                  left: '55px',
                  display: 'flex',
                  alignItems: 'flex-start',
                  justifyContent: 'center',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <img src={Icon1} alt="Icon 1" style={{ maxWidth: '100%', maxHeight: '100%' }} />
              </div>

              <input
                type="file"
                accept="image/*"
                ref={imageInputRef}
                style={{ display: 'none' }}
                onChange={handleImageChange}
              />
            </div>
          </div>
          <br />
          <br />
          <br />

          <FormGroup sx={{ mt: 2 }}>
            <Box style={{ marginTop: '20px' }}>
              <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                  <Typography variant="subtitle1" sx={{ color: 'white' }}>First Name</Typography>
                  <TextField
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    fullWidth
                    sx={{ background: '#262626', borderRadius: '12px' }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography variant="subtitle1" sx={{ color: 'white' }}>Last Name</Typography>
                  <TextField
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    fullWidth
                    sx={{ background: '#262626', borderRadius: '12px' }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography variant="subtitle1" sx={{ color: 'white' }}>Company</Typography>
                  <TextField
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    fullWidth
                    sx={{ background: '#262626', borderRadius: '12px' }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography variant="subtitle1" sx={{ color: 'white' }}>Designation</Typography>
                  <TextField
                    name="designation"
                    value={formData.designation}
                    onChange={handleChange}
                    fullWidth
                    sx={{ background: '#262626', borderRadius: '12px' }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="subtitle1" sx={{ color: 'white' }}>Description</Typography>
                  <TextField
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    fullWidth
                    multiline
                    rows={4}
                    sx={{ background: '#262626', borderRadius: '12px' }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography variant="subtitle1" sx={{ color: 'white' }}>Email</Typography>
                  <TextField
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    fullWidth
                    sx={{ background: '#262626', borderRadius: '12px' }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography variant="subtitle1" sx={{ color: 'white' }}>Alternate Email</Typography>
                  <TextField
                    name="alternateEmail"
                    value={formData.alternateEmail}
                    onChange={handleChange}
                    fullWidth
                    sx={{ background: '#262626', borderRadius: '12px' }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography variant="subtitle1" sx={{ color: 'white' }}>Phone</Typography>
                  <TextField
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    fullWidth
                    sx={{ background: '#262626', borderRadius: '12px' }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography variant="subtitle1" sx={{ color: 'white' }}>Alternate Phone</Typography>
                  <TextField
                    name="alternatePhone"
                    value={formData.alternatePhone}
                    onChange={handleChange}
                    fullWidth
                    sx={{ background: '#262626', borderRadius: '12px' }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography variant="subtitle1" sx={{ color: 'white' }}>Location</Typography>
                  <TextField
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    fullWidth
                    sx={{ background: '#262626', borderRadius: '12px' }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography variant="subtitle1" sx={{ color: 'white' }}>Location URL</Typography>
                  <TextField
                    name="locationURL"
                    value={formData.locationURL}
                    onChange={handleChange}
                    fullWidth
                    sx={{ background: '#262626', borderRadius: '12px' }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography variant="subtitle1" sx={{ color: 'white' }}>Date Of Birth</Typography>
                  <TextField
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleChange}
                    fullWidth
                    sx={{ background: '#262626', borderRadius: '12px' }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography variant="subtitle1" sx={{ color: 'white' }}>Job Title</Typography>
                  <TextField
                    name="jobTitle"
                    value={formData.jobTitle}
                    onChange={handleChange}
                    fullWidth
                    sx={{ background: '#262626', borderRadius: '12px' }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography variant="subtitle1" sx={{ color: 'white' }}>Default language</Typography>
                  <TextField
                    name="defaultLanguage"
                    value={formData.defaultLanguage}
                    onChange={handleChange}
                    fullWidth
                    sx={{ background: '#262626', borderRadius: '12px' }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography variant="subtitle1" sx={{ color: 'white' }}>Enable Language</Typography>
                  <FormControlLabel
                    control={
                      <Switch
                        name="enableLanguage"
                        checked={formData.enableLanguage}
                        onChange={handleSwitchChange}
                        sx={{
                          mt: 2,
                          '& .Mui-checked': {
                            color: 'linear-gradient(180deg, #290988 0%, #BD2BC3 100%)',
                          },
                        }}
                      />
                    }
                  />
                </Grid>
              </Grid>
            </Box>
          </FormGroup>
          <Button
            variant="contained"
            sx={{
              background: 'linear-gradient(19.95deg, #131392 15.26%, #A310C0 154.02%)',
              color: 'white',
              mt: 3,
              mx: 'auto',
              display: 'block',
              border: formData.enableLanguage
                ? '2px solid linear-gradient(180deg, #290988 0%, #BD2BC3 100%)'
                : 'none',
            }}
          >
            Save
          </Button>
        </CardContent>
      </Card>
    </CardContent>
  );
};

export default PersonalInformation;
