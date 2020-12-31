import React from 'react';
import { Spinner } from 'react-bootstrap';
// import styled from 'styled-components';

// const StyledSpinner = styled(Spinner)`
//   width: 100%;
//   height: 100%;
//   margin: auto;
//   display: block;
// `;

const Loader = () => (
  <Spinner
    animation="border"
    role="status"
    style={{
      left: '50%',
      marginLeft: '-4em',
    }}>
    <span className="sr-only">Loading...</span>
  </Spinner>
);

export default Loader;

// style={{
//   width: '100px',
//   height: '100px',
//   margin: 'auto',
//   display: 'block',
// }}
