import React from 'react';
import { Container, Spinner } from 'react-bootstrap';
import styled from 'styled-components';

const StyledContainer = styled(Container)`
  width: 100%;
  height: 100%;
  margin: auto;
  display: block;
`;

const Loader = () => (
  <StyledContainer>
    <Spinner
      animation="grow"
      variant="info"
      role="status"
      style={{ width: '15rem', height: '15rem', justifyContent: 'center' }}>
      <span className="sr-only">Loading...</span>
    </Spinner>
  </StyledContainer>
);

export default Loader;

// style={{
//   width: '100px',
//   height: '100px',
//   margin: 'auto',
//   display: 'block',
// }}
