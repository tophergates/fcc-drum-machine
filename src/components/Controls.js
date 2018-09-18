// Import project-level dependencies
import React from 'react';
import styled from 'styled-components';
import { lighten, rgba } from 'polished';

// Import container (connected) components
import BankList from '../containers/BankList';
import VolumeControl from '../containers/VolumeControl';

// Defined the Container component (styled)
const Container = styled.section`
  background: ${({ theme }) => lighten(0.5, rgba(theme.colors.darkGrey, 0.75))};
  border-radius: 0.35rem;
  color: ${({ theme }) => theme.colors.darkGrey};
  grid-area: controls;
  margin: ${({ theme }) => `${theme.sizes.sm} ${theme.sizes.xs}`};
  padding: ${({ theme }) => theme.sizes.md};
`;

// Define the Controls component
const Controls = () => (
  <Container>
    <BankList />
    <VolumeControl />
  </Container>
);

// Export the Controls component
export default Controls;
