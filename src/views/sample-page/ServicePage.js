import React, { useState } from 'react';
import {
  Typography,
  Button,
  TextField,
  Grid,
  Card,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Menu,
  MenuItem,
  Select,
  Box,
  Modal,
  Paper,
  IconButton,
} from '@mui/material';
import { AddCircleOutline, MoreVert, Close } from '@mui/icons-material';
import { IconX } from '@tabler/icons';

const TableCells = ({ borderRadius, color, type, data }) => (
  <TableCell
    sx={{
      backgroundColor: type === 'Heading' ? '#262626' : 'black',
      color: color,
      borderRadius: borderRadius,
    }}
  >
    {data}
  </TableCell>
);

const ServicePage = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [searchInput, setSearchInput] = useState('');
  const [filteredServices, setFilteredServices] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    serviceUrl: '',
    description: '',
    icon: null,
  });

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleSearch = () => {
    const filtered = services.filter((service) =>
      service.name.toLowerCase().includes(searchInput.toLowerCase())
    );
    setFilteredServices(filtered);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle the form submission logic here
    console.log(formData);
  };

  const services = [
    { id: 1, name: 'Branding1', url: 'https://example.com/service1' },
    { id: 2, name: 'Branding2', url: 'https://example.com/service2' },
    // Add more service data as needed
  ];


  return (
    <div>
      <Typography variant="h4" style={{ color: 'white', marginBottom: '1rem' }}>
        Services
      </Typography>
      <Grid container justifyContent="space-between">
        <Box
          component="input"
          type="text"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          placeholder="Search"
          sx={{
            width: '282px',
            height: '48px',
            borderRadius: '5px',
            border: '1px solid #262626',
            backgroundColor: 'black',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: '#262626',
            fontWeight: 'bold',
            fontSize: '16px',
            cursor: 'pointer',
            paddingLeft: 1,
            marginRight: '1rem', // Add right margin for spacing
          }}
        />

        <Button
          variant="contained"
          startIcon={<AddCircleOutline />}
          style={{
            background: 'linear-gradient(19.95deg, #131392 15.26%, #A310C0 154.02%)',
            color: 'white',
            marginRight: '1rem',
          }}
          onClick={handleOpenModal}
        >
          Add Service
        </Button>
      </Grid>
      <Card style={{ marginTop: '2rem', backgroundColor: 'black' }}>
        <CardContent>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow
                  sx={{
                    background: '#6174DD',
                  }}
                >
                  <TableCells
                    borderRadius={'10px 0 0 0'}
                    color={'white'}
                    type={'Heading'}
                    data={'Icon'}
                  />
                  <TableCells
                    color={'white'}
                    type={'Heading'}
                    data={'Branding'}
                  />
                  <TableCells
                    color={'white'}
                    type={'Heading'}
                    data={'Service URL'}
                  />
                  <TableCells
                    borderRadius={'0px 10px 10px 0'}
                    color={'white'}
                    type={'Heading'}
                    data={'Action'}
                  />
                </TableRow>
              </TableHead>
              <TableBody>
                {services.map((service) => (
                  <TableRow key={service.id}>
                    <TableCell>
                      <img
                        src="/path/to/your/icon/image.png"
                        alt="Icon"
                        style={{ width: '24px', height: '24px' }}
                      />
                    </TableCell>
                    <TableCell style={{ color: 'white' }}>{service.name}</TableCell>
                    <TableCell style={{ color: 'blue' }}>
                      {service.url}
                    </TableCell>
                    <TableCell>
                      <Button
                        aria-controls={`action-menu-${service.id}`}
                        aria-haspopup="true"
                        onClick={handleMenuOpen}
                        endIcon={<MoreVert />}
                      />
                      <Menu
                        id={`action-menu-${service.id}`}
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleMenuClose}
                      >
                        <MenuItem onClick={handleMenuClose}>View</MenuItem>
                        <MenuItem onClick={handleMenuClose}>Edit</MenuItem>
                        <MenuItem onClick={handleMenuClose}>Delete</MenuItem>
                      </Menu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>
      <div style={{ display: 'flex', alignItems: 'center', marginTop: '2rem' }}>
        <Typography
          sx={{
            color: '#FFFFFF80',
            fontWeight: 'bold',
            fontSize: '16px',
            paddingLeft: 1,
            marginRight: '0.5rem',
          }}
        >
          Show
        </Typography>
        <Select
          variant="outlined"
          value={10}
          sx={{
            background: 'black',
            color: '#FFFFFF80',
            borderColor: 'white',
            border: '1px solid #262626',
          }}
        >
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={20}>20</MenuItem>
          <MenuItem value={30}>30</MenuItem>
          <MenuItem value={40}>40</MenuItem>
        </Select>
        <Typography
          sx={{
            color: '#FFFFFF80',
            fontWeight: 'bold',
            fontSize: '16px',
            paddingLeft: 1,
            marginRight: '0.5rem',
          }}
        >
          Showing 1 Results
        </Typography>
      </div>

      {/* Modal for adding a new service */}
      <Modal
  open={isModalOpen}
  onClose={handleCloseModal}
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
      width: '800px',
      borderRadius: '18px',
    }}
  >
    <IconButton
      onClick={handleCloseModal}
      sx={{ position: 'absolute', top: 0, right: 0 }}
    >
      <IconX />
    </IconButton>
    <Typography
      variant="h6"
      style={{
        marginBottom: '1rem',
        color: 'white',
        display: 'relative',
        textAlign: 'center', // Center-align the text
      }}
    >
      Add New Service
    </Typography>
    <form onSubmit={handleSubmit} style={{ width: '100%' }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="subtitle1" sx={{ color: 'white' }}>
            Name
          </Typography>
          <TextField
            name="name"
            value={formData.name}
            onChange={handleChange}
            fullWidth
            sx={{ background: '#262626', borderRadius: '12px' }}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="subtitle1" sx={{ color: 'white' }}>
            Service URL
          </Typography>
          <TextField
            name="serviceUrl"
            value={formData.serviceUrl}
            onChange={handleChange}
            fullWidth
            sx={{ background: '#262626', borderRadius: '12px' }}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="subtitle1" sx={{ color: 'white' }}>
            Description
          </Typography>
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
        <Grid item xs={12}>
          <Typography variant="subtitle1" sx={{ color: 'white' }}>
            Icon
          </Typography>
          <label
            htmlFor="icon-upload"
            style={{ width: '100%', cursor: 'pointer' }}
          >
            <input
              id="icon-upload"
              name="Select"
              type="file"
              accept="image/*"
              style={{ display: 'none' }}
              onChange={(e) => {
                const file = e.target.files[0];
                setFormData((prevData) => ({
                  ...prevData,
                  icon: file,
                }));
              }}
            />
            <TextField
              type="text"
              value={formData.icon ? formData.icon.name : ''}
              fullWidth
              readOnly
              onClick={(e) => {
                const fileInput = document.getElementById('icon-upload');
                if (fileInput) {
                  fileInput.click();
                }
              }}
              sx={{
                background: '#262626',
                borderRadius: '12px',
                marginBottom: '1rem',
                cursor: 'pointer',
              }}
            />
          </label>
        </Grid>
      </Grid>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '20px',
        }}
      >
        <Button
          variant="contained"
          sx={{
            background:
              'linear-gradient(19.95deg, #131392 15.26%, #A310C0 154.02%)',
            color: 'white',
            marginRight: '10px',
            width: '110px',
          }}
          type="submit"
        >
          Save
        </Button>
      </div>
    </form>
  </Paper>
</Modal>

    </div>
  );
};

export default ServicePage;
