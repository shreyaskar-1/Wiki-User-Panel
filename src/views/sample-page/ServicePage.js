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
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

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

  const handleOpenAddModal = () => {
    setIsAddModalOpen(true);
  };

  const handleCloseAddModal = () => {
    setIsAddModalOpen(false);
  };

  const handleOpenViewModal = (service) => {
    setSelectedService(service);
    setIsViewModalOpen(true);
  };

  const handleCloseViewModal = () => {
    setSelectedService(null);
    setIsViewModalOpen(false);
  };

  const handleOpenEditModal = (service) => {
    setSelectedService(service);
    setIsEditModalOpen(true);
  };

  const handleCloseEditModal = () => {
    setSelectedService(null);
    setIsEditModalOpen(false);
  };

  const handleOpenDeleteModal = (service) => {
    setSelectedService(service);
    setIsDeleteModalOpen(true);
  };

  const handleCloseDeleteModal = () => {
    setSelectedService(null);
    setIsDeleteModalOpen(false);
  };

  const handleAddSubmit = (event) => {
    event.preventDefault();
    // Handle the form submission logic for adding a new service
  };

  const handleView = () => {
    // Handle view logic here
  };

  const handleEditSubmit = (event) => {
    event.preventDefault();
    // Handle the form submission logic for editing a service
  };

  const handleDelete = () => {
    // Handle delete logic here
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
          onClick={handleOpenAddModal}
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
                        onClick={(event) => {
                          handleMenuOpen(event);
                          setSelectedService(service);
                        }}
                        endIcon={<MoreVert />}
                      />
                      <Menu
                        id={`action-menu-${service.id}`}
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleMenuClose}
                      >
                        <MenuItem onClick={() => {
                          handleOpenViewModal(service);
                          handleMenuClose();
                        }}>
                          View
                        </MenuItem>
                        <MenuItem onClick={() => {
                          handleOpenEditModal(service);
                          handleMenuClose();
                        }}>
                          Edit
                        </MenuItem>
                        <MenuItem onClick={() => {
                          handleOpenDeleteModal(service);
                          handleMenuClose();
                        }}>
                          Delete
                        </MenuItem>
                      </Menu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>

      {/* Add Service Modal */}
      <Modal
        open={isAddModalOpen}
        onClose={handleCloseAddModal}
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
            onClick={handleCloseAddModal}
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
          <form onSubmit={handleAddSubmit} style={{ width: '100%' }}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Typography variant="subtitle1" sx={{ color: 'white' }}>
                  Name
                </Typography>
                <TextField
                  name="name"
                  value={'' /* Add your state value here */}
                  onChange={() => {} /* Add your change handler here */}
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
                  value={'' /* Add your state value here */}
                  onChange={() => {} /* Add your change handler here */}
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
                  value={'' /* Add your state value here */}
                  onChange={() => {} /* Add your change handler here */}
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
                      // Add your logic to handle file selection here
                    }}
                  />
                  <TextField
                    type="text"
                    value={'' /* Add your state value here */}
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

      {/* View Service Modal */}
      <Modal
        open={isViewModalOpen}
        onClose={handleCloseViewModal}
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
            onClick={handleCloseViewModal}
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
            View Service
          </Typography>
          <div style={{ padding: '1rem', color: 'white' }}>
            <Typography variant="subtitle1">Name:</Typography>
            <Typography>{selectedService ? selectedService.name : ''}</Typography>
            <Typography variant="subtitle1">Service URL:</Typography>
            <Typography>{selectedService ? selectedService.url : ''}</Typography>
            <Typography variant="subtitle1">Description:</Typography>
            <Typography>{selectedService ? selectedService.description : ''}</Typography>
            <Typography variant="subtitle1">Icon:</Typography>
            {/* Display the selectedService.icon here */}
          </div>
        </Paper>
      </Modal>

      {/* Edit Service Modal */}
      <Modal
        open={isEditModalOpen}
        onClose={handleCloseEditModal}
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
            onClick={handleCloseEditModal}
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
            Edit Service
          </Typography>
          <form onSubmit={handleEditSubmit} style={{ width: '100%' }}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Typography variant="subtitle1" sx={{ color: 'white' }}>
                  Name
                </Typography>
                <TextField
                  name="name"
                  value={selectedService ? selectedService.name : ''}
                  onChange={() => {} /* Add your change handler here */}
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
                  value={selectedService ? selectedService.url : ''}
                  onChange={() => {} /* Add your change handler here */}
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
                  value={selectedService ? selectedService.description : ''}
                  onChange={() => {} /* Add your change handler here */}
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
                  htmlFor="icon-upload-edit"
                  style={{ width: '100%', cursor: 'pointer' }}
                >
                  <input
                    id="icon-upload-edit"
                    name="Select"
                    type="file"
                    accept="image/*"
                    style={{ display: 'none' }}
                    onChange={(e) => {
                      const file = e.target.files[0];
                      // Add your logic to handle file selection here
                    }}
                  />
                  <TextField
                    type="text"
                    value={'' /* Add your state value here */}
                    fullWidth
                    readOnly
                    onClick={(e) => {
                      const fileInput = document.getElementById('icon-upload-edit');
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

      {/* Delete Service Modal */}
      <Modal
        open={isDeleteModalOpen}
        onClose={handleCloseDeleteModal}
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
            width: '500px',
            borderRadius: '18px',
          }}
        >
          <IconButton
            onClick={handleCloseDeleteModal}
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
            Delete Service
          </Typography>
          <Typography variant="subtitle1" sx={{ color: 'white' }}>
            Are you sure you want to delete this service?
          </Typography>
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
                background: 'red',
                color: 'white',
                marginRight: '10px',
                width: '110px',
              }}
              onClick={handleDelete}
            >
              Delete
            </Button>
            <Button
              variant="contained"
              sx={{
                background:
                  'linear-gradient(19.95deg, #131392 15.26%, #A310C0 154.02%)',
                color: 'white',
                width: '110px',
              }}
              onClick={handleCloseDeleteModal}
            >
              Cancel
            </Button>
          </div>
        </Paper>
      </Modal>
    </div>
  );
};

export default ServicePage;
