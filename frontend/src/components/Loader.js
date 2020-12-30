import React from 'react';
import { Spinner } from 'react-bootstrap';
import styled from 'styled-components';

const StyledSpinner = styled(Spinner)`
  width: 100px;
  height: 100px;
  margin: 25% 50%;
  display: block;
`;

const Loader = () => {
  return (
    <StyledSpinner animation="border" role="status">
      <span className="sr-only">Loading...</span>
    </StyledSpinner>
  );
};

export default Loader;

// style={{
//   width: '100px',
//   height: '100px',
//   margin: 'auto',
//   display: 'block',
// }}
