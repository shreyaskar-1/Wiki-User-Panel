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
} from '@mui/material';
import { AddCircleOutline, MoreVert } from '@mui/icons-material';

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

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const services = [
    { id: 1, name: 'Branding1', url: 'https://example.com/service1' },
    { id: 2, name: 'Branding2', url: 'https://example.com/service2' },
    // Add more service data as needed
  ];

  const handleSearch = () => {
    const filtered = services.filter((service) =>
      service.name.toLowerCase().includes(searchInput.toLowerCase())
    );
    setFilteredServices(filtered);
  };

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
                      {/* <a href={service.url} target="_blank" rel="noopener noreferrer" style={{ color: 'blue', }}> */}
                      {service.url}
                      {/* </a> */}
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

    </div>
  );
};

export default ServicePage;
