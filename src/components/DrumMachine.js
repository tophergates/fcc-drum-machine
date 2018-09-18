// Import project-level dependencies
import React from 'react';
import styled from 'styled-components';

// Import stateless components
import Controls from './Controls';
import Header from './Header';

// Import container (connected) components
import DisplayScreen from '../containers/DisplayScreen';
import DrumPads from '../containers/DrumPads';
import PowerButton from '../containers/PowerButton';

// Define the style of the Container component
const Container = styled.main`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: ${({ theme }) => theme.sizes.breakpoints.maxWidth};
  min-width: calc(
    ${({ theme }) => theme.sizes.breakpoints.minWidth} -
      ${({ theme }) => theme.sizes.sm}
  );
  padding: ${({ theme }) => theme.sizes.sm};

  @media screen and (min-width: ${({ theme }) =>
      theme.sizes.breakpoints.horizontal}) {
    display: grid;
    grid-template-areas:
      'pads power'
      'pads display'
      'pads controls'
      'pads brand';
  }
`;

// Define the DrumMachine component
const DrumMachine = () => (
  <Container>
    <Header />
    <PowerButton />
    <DrumPads />
    <DisplayScreen />
    <Controls />
  </Container>
);

// Export the DrumMachine component
export default DrumMachine;
