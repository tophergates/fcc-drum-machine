// Import project-level dependencies
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { lighten } from 'polished';

// Style the Header component
const StyledHeader = styled.header`
  grid-area: brand;
  order: 1;
  padding: ${({ theme }) => theme.sizes.sm} 0;
  text-align: center;

  h1 {
    color: ${({ theme }) => theme.colors.secondaryLight};
    font-size: ${({ theme }) => theme.sizes.xl};
  }

  h2 {
    color: ${({ theme }) => lighten(0.35, theme.colors.darkGrey)};
    font-size: 1.8rem;
    padding-left: 6.1rem;
  }
`;

// Create the Header component
const Header = ({ credit, name }) => (
  <StyledHeader>
    <h1>{name}</h1>
    <h2>by {credit}</h2>
  </StyledHeader>
);

// The component accepts two props, both of which are stings
Header.propTypes = {
  credit: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

// Defines the default property values
Header.defaultProps = {
  credit: 'tophergates',
  name: 'DrumPad xD'
};

// Export the Header component
export default Header;
