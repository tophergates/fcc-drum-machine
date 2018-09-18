// Import project-level dependencies
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { lighten, rgba } from 'polished';

// Import local dependencies
import { powerOnOff } from '../redux/actions';

// Create a styled container
const PowerContainer = styled.section`
  backface-visibility: hidden;
  grid-area: power;
  order: -1;
  padding: ${({ theme }) => `0 ${theme.sizes.xs} ${theme.sizes.xs} 0`};
  text-align: right;
`;

// Create a styled Label
const Label = styled.label`
  display: inline-block;
  height: ${({ theme }) => theme.sizes.lg};
  position: relative;
  width: ${({ theme }) => theme.sizes.xxl};
`;

// Create a styled SwitchControl component
const SwitchControl = styled.input.attrs({ type: 'checkbox' })`
  display: none;
`;

// Create a styled OnOffSwitch component
const OnOffSwitch = styled.span`
  background-color: ${({ isPowered, theme }) =>
    isPowered
      ? rgba(theme.colors.primaryLight, 0.75)
      : lighten(0.2, theme.colors.darkGrey)};
  border-radius: ${({ theme }) => theme.sizes.xl};
  bottom: 0;
  cursor: pointer;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  transition: 300ms;

  ::before {
    background-color: ${({ theme }) => theme.colors.darkGrey};
    border-radius: 50%;
    bottom: 0.2rem;
    content: '';
    height: 2rem;
    left: 0.3rem;
    position: absolute;
    transform: ${({ isPowered }) =>
      isPowered ? 'translateX(2.3rem)' : 'translateX(0)'};
    transition: 300ms;
    width: 2rem;
  }
`;

// Define the PowerButton component
const PowerButton = ({ isPowerOn, powerOnOff }) => (
  <PowerContainer>
    <Label>
      <SwitchControl checked={isPowerOn} onChange={powerOnOff} />
      <OnOffSwitch isPowered={isPowerOn} />
    </Label>
  </PowerContainer>
);

// Define the props
PowerButton.propTypes = {
  isPowerOn: PropTypes.bool.isRequired,
  powerOnOff: PropTypes.func.isRequired
};

// Export the connected component
export default connect(
  ({ isPowerOn }) => ({ isPowerOn }),
  { powerOnOff }
)(PowerButton);
