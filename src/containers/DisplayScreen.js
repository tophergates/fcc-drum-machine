// Import project-level dependencies
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { lighten, rgba } from 'polished';

// Create a styled container component
const Container = styled.section`
  background: ${({ theme }) => lighten(0.1, theme.colors.darkGrey)};
  border: 2px outset rgba(33, 33, 33, 0.15);
  border-radius: 0.35rem;
  box-shadow: ${({ theme }) =>
    `0 0 ${theme.sizes.md} ${rgba(theme.colors.black, 0.5)}`};
  color: rgba(33, 33, 33, 0.1);
  font-family: ${({ theme }) => theme.fonts.primaryMono};
  grid-area: display;
  margin: ${({ theme }) => `${theme.sizes.xs} 0 ${theme.sizes.md} 0`};
  min-height: 11.25rem;
  order: -1;
  padding: ${({ theme }) => theme.sizes.xs};
  text-shadow: 0 0 1rem ${({ theme }) => rgba(theme.colors.black, 0.5)};
  transition: background 0.4s, border 0.4s, color 0.2s;

  &.on {
    background: linear-gradient(
      180deg,
      rgba(10, 170, 210, 0.85),
      95%,
      rgba(125, 195, 255, 0.9)
    );
    border: 2px outset rgba(255, 255, 255, 0.25);
    color: rgba(205, 225, 255, 0.95);
    transition: background 0.4s, border 0.4s, color 0.2s;
  }
`;

// Create a styled DisplayTop component
const DisplayTop = styled.aside`
  align-items: center;
  display: flex;
  font-size: ${({ theme }) => theme.sizes.sm};
  justify-content: space-between;
  opacity: 0.9;

  span {
    ::before {
      font-family: 'Font Awesome 5 Free';
      font-size: inherit;
      font-weight: 900;
      position: relative;
      margin-right: 0.85rem;
    }

    :nth-child(-n + 1) {
      ::before {
        content: '\f07b';
      }
    }

    :nth-child(2n) {
      min-width: 4.8rem;
      text-align: right;

      ::before {
        content: '\f028';
        float: left;
        bottom: 0.2rem;
      }
    }
  }
`;

// Create a styled SoundDisplay component
const SoundDisplay = styled.div`
  font-size: ${({ theme }) => theme.sizes.lg};
  text-align: center;
`;

// Create the DisplayScreen component
const DisplayScreen = ({ bank, isPowerOn, sound, volume }) => (
  <Container className={isPowerOn ? 'on' : ''}>
    <DisplayTop>
      {isPowerOn && (
        <Fragment>
          <span>{bank}</span>
          <span>{volume}</span>
        </Fragment>
      )}
    </DisplayTop>
    <SoundDisplay id="display">
      <p>{isPowerOn && sound}</p>
    </SoundDisplay>
  </Container>
);

// Define the props that DisplayScreen receives from redux
DisplayScreen.propTypes = {
  bank: PropTypes.string.isRequired,
  isPowerOn: PropTypes.bool.isRequired,
  sound: PropTypes.string.isRequired,
  volume: PropTypes.number.isRequired
};

// Define the default props for DisplayScreen
DisplayScreen.defaultProps = {
  bank: 'Drums',
  isPowerOn: true,
  sound: "Let's Rock",
  volume: 50
};

// Export the connected component
export default connect(({ activeBank, activeSound, isPowerOn, volume }) => ({
  bank: activeBank.name,
  isPowerOn,
  sound: activeSound.name,
  volume
}))(DisplayScreen);
