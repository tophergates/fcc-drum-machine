// Import project-level dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { lighten, rgba } from 'polished';

// Import local dependencies
import { updateVolume } from '../redux/actions';

// Define a styled container component
const VolumeContainer = styled.article`
  label {
    align-items: center;
    display: flex;

    ::before {
      font-family: 'Font Awesome 5 Free';
      font-size: inherit;
      font-weight: 900;
      position: relative;
      margin-bottom: 0.2rem;
      margin-right: 0.85rem;
      content: '\f028';
    }
  }

  input {
    appearance: none;
    background: ${({ theme }) => theme.colors.darkGrey};
    border-radius: ${({ theme }) => theme.sizes.xs};
    flex: 1 0 auto;
    height: ${({ theme }) => theme.sizes.sm};
    margin-left: ${({ theme }) => theme.sizes.xs};
    outline: none;
  }

  &.on {
    input::-webkit-slider-thumb {
      background: ${({ theme }) => rgba(theme.colors.primaryDark, 0.95)};
      cursor: ew-resize;
    }

    input::-moz-range-thumb {
      background: ${({ theme }) => rgba(theme.colors.primaryDark, 0.95)};
      cursor: ew-resize;
    }
  }

  input::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    background: ${({ theme }) => lighten(0.25, theme.colors.darkGrey)};
    border: 1px solid ${({ theme }) => rgba(theme.colors.black, 0.15)};
    border-radius: 100%;
    box-shadow: 0 0 0.5rem 0.1rem
      ${({ theme }) => rgba(theme.colors.black, 0.5)};
    cursor: auto;
    height: ${({ theme }) => theme.sizes.md};
    width: ${({ theme }) => theme.sizes.md};
  }

  input::-moz-range-thumb {
    background: ${({ theme }) => lighten(0.25, theme.colors.darkGrey)};
    border: 1px solid ${({ theme }) => rgba(theme.colors.black, 0.15)};
    border-radius: 100%;
    box-shadow: 0 0 0.5rem 0.1rem
      ${({ theme }) => rgba(theme.colors.black, 0.5)};
    cursor: auto;
    height: ${({ theme }) => theme.sizes.md};
    width: ${({ theme }) => theme.sizes.md};
  }
`;

// Define the VolumeControl component
class VolumeControl extends Component {
  // Define some static properties of the volume control
  static MAX_VOLUME = 100;
  static MIN_VOLUME = 0;

  // Handles the 'onChange' event
  handleChange = event => {
    let { value } = event.target;

    // Ensure the volume is within the boundary limits
    if (value >= VolumeControl.MAX_VOLUME) {
      value = VolumeControl.MAX_VOLUME;
    } else if (value <= VolumeControl.MIN_VOLUME) {
      value = VolumeControl.MIN_VOLUME;
    }

    // Dispatch the action to update the volume
    this.props.updateVolume(value);
  };

  // Render the component
  render() {
    const { isPowerOn, volume } = this.props;

    return (
      <VolumeContainer className={isPowerOn ? 'on' : ''}>
        <label htmlFor="volume" aria-label={`Current volume: ${volume}`}>
          <input
            onChange={this.handleChange}
            type="range"
            id="volume"
            name="volume"
            min={VolumeControl.MIN_VOLUME}
            max={VolumeControl.MAX_VOLUME}
            value={volume}
          />
        </label>
      </VolumeContainer>
    );
  }
}

// Define the props
VolumeControl.propTypes = {
  isPowerOn: PropTypes.bool.isRequired,
  updateVolume: PropTypes.func.isRequired,
  volume: PropTypes.number.isRequired
};

// Export the connected component
export default connect(
  ({ isPowerOn, volume }) => ({ isPowerOn, volume }),
  { updateVolume }
)(VolumeControl);
