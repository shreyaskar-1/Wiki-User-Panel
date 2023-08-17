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

const Testimonials = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [searchInput, setSearchInput] = useState('');
  const [filteredTestimonials, setFilteredTestimonials] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    image: null,
  });

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const testimonials = [
    { id: 1, name: 'Branding1', url: 'https://example.com/testimonial1' },
    { id: 2, name: 'Branding2', url: 'https://example.com/testimonial2' },
    // Add more testimonial data as needed
  ];

  const handleSearch = () => {
    const filtered = testimonials.filter((testimonial) =>
      testimonial.name.toLowerCase().includes(searchInput.toLowerCase())
    );
    setFilteredTestimonials(filtered);
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

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      image: file,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle the form submission logic here
    console.log(formData);
  };

  return (
    <div>
      <Typography variant="h4" style={{ color: 'white', marginBottom: '1rem' }}>
        Testimonials
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
          Add Testimonial
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
                    data={'Testimonial URL'}
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
                {filteredTestimonials.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={4} style={{ color: 'white' }}>
                      No data available.
                    </TableCell>
                  </TableRow>
                ) : (
                  filteredTestimonials.map((testimonial) => (
                    <TableRow key={testimonial.id}>
                      <TableCell>
                        <img
                          src="/path/to/your/icon/image.png"
                          alt="Icon"
                          style={{ width: '24px', height: '24px' }}
                        />
                      </TableCell>
                      <TableCell style={{ color: 'white' }}>{testimonial.name}</TableCell>
                      <TableCell style={{ color: 'blue' }}>{testimonial.url}</TableCell>
                      <TableCell>
                        <Button
                          aria-controls={`action-menu-${testimonial.id}`}
                          aria-haspopup="true"
                          onClick={handleMenuOpen}
                          endIcon={<MoreVert />}
                        />
                        <Menu
                          id={`action-menu-${testimonial.id}`}
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
                  ))
                )}
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
          Showing {filteredTestimonials.length} Results
        </Typography>
      </div>

      {/* Modal for adding a new testimonial */}
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
              textAlign: 'center',
            }}
          >
            Add New Testimonial
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
                  sx={{ background: '#262626', borderRadius: '12px', width: '100%' }}
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
                  sx={{ background: '#262626', borderRadius: '12px', width: '100%' }}
                />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="subtitle1" sx={{ color: 'white' }}>
                  Image
                </Typography>
                <label htmlFor="image-upload" style={{ width: '100%', cursor: 'pointer' }}>
                  <input
                    id="image-upload"
                    name="Select"
                    type="file"
                    accept="image/*"
                    style={{ display: 'none' }}
                    onChange={handleImageChange}
                  />
                  <TextField
                    type="text"
                    value={formData.image ? formData.image.name : ''}
                    fullWidth
                    readOnly
                    onClick={(e) => {
                      const fileInput = document.getElementById('image-upload');
                      if (fileInput) {
                        fileInput.click();
                      }
                    }}
                    sx={{ background: '#262626', borderRadius: '12px', marginBottom: '1rem', cursor: 'pointer', width: '100%' }}
                  />
                </label>
              </Grid>
              <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                <Button
                  variant="contained"
                  sx={{ background: 'linear-gradient(19.95deg, #131392 15.26%, #A310C0 154.02%)', color: 'white', marginRight: '10px', width: '110px' }}
                  type="submit"
                >
                  Save
                </Button>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Modal>
    </div>
  );
};

export default Testimonials;
