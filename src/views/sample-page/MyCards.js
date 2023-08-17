import React, { useState, useRef } from 'react';
import { Typography, Tabs, Tab, CardContent, Button } from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';
import PersonalInformation from './PersonalInformation'; // Import the new component
import CardTemplate from './CardTemplate';
import BusinessHours from './BusinessHours';
import ServicePage from './ServicePage';
import Testimonials from './Testimonials';
import Appointments from './Appointments';
import SocialLinks from './SocialLinks';

const MyCards = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <PageContainer title="MyCards" description="This is a Sample page">
      <Typography variant="h4" sx={{ color: 'white', marginBottom: 2 }}>
        My Cards
      </Typography>
      <Tabs
        value={selectedTab}
        onChange={handleTabChange}
        textColor="primary"
        indicatorColor="primary"
      >
        <Tab label="Personal Information" />
        <Tab label="Card Template" />
        <Tab label="Business Hours" />
        <Tab label="Services" />
        <Tab label="Testimonials" />
        <Tab label="Appointments" />
        <Tab label="Social Media Links" />
      </Tabs>

      {selectedTab === 0 && <PersonalInformation />}
      {selectedTab === 1 && (
        <CardContent>
          <CardTemplate />
        </CardContent>
      )}
      {selectedTab === 2 && (
        <CardContent>
          <BusinessHours />
        </CardContent>
      )}
      {selectedTab === 3 && (
        <CardContent>
          <ServicePage />
        </CardContent>
      )}
      {selectedTab === 4 && (
        <CardContent>
          <Testimonials />
        </CardContent>
      )}
      {selectedTab === 5 && (
        <CardContent>
          <Appointments />
        </CardContent>
      )}
      {selectedTab === 6 && (
        <CardContent>
          <SocialLinks />
        </CardContent>
      )}
    </PageContainer>
  );
};

export default MyCards;
