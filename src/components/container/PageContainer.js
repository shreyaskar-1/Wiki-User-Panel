import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

const PageContainer = ({ title, description, children }) => (
  <div className="page-container">
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
    {children}
    <style>
      {`
        .page-container {
          background-color: #000000;
        }
      `}
    </style>
  </div>
);

PageContainer.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  children: PropTypes.node,
};

export default PageContainer;
