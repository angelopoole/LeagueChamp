import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  position: relative;
  bottom: 0;
  width: 100%;
  height: 2.5rem;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <div> this be a footer</div>
    </StyledFooter>
  );
};

export default Footer;
