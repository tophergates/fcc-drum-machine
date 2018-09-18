// Import project-level dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { darken, rgba } from 'polished';

// Import stateless components
import DrumPad from '../components/DrumPad';

// Import local dependencies
import { updateActiveSound } from '../redux/actions';
import api from '../data/api';

// Create a styled DrumPadContainer
const DrumPadContainer = styled.section`
  grid-area: pads;
`;

// Create a styled DrumPadList
const DrumPadList = styled.ul`
  display: flex;
  flex-flow: row wrap;
  height: 100%;
  justify-content: space-between;

  li {
    background: ${({ theme }) => theme.colors.darkGrey};
    border-radius: ${({ theme }) => theme.sizes.md};
    display: flex;
    flex: 1 1 27%;
    height: auto;
    margin-bottom: ${({ theme }) => theme.sizes.xs};

    :nth-child(3n-1) {
      margin-left: ${({ theme }) => theme.sizes.xs};
      margin-right: ${({ theme }) => theme.sizes.xs};
    }

    :nth-child(1n + 7) {
      margin-bottom: 0;
    }

    button {
      align-items: center;
      backface-visibility: hidden;
      background: ${({ theme }) => theme.colors.darkGrey};
      border: 1px solid ${({ theme }) => rgba(theme.colors.black, 0.5)};
      border-radius: ${({ theme }) => theme.sizes.md};
      box-shadow: ${({ theme }) =>
        `0 0 ${theme.sizes.md} ${rgba(theme.colors.black, 0.5)}`};
      color: ${({ theme }) => rgba(theme.colors.white, 0.15)};
      display: flex;
      flex: 1 0 auto;
      font-size: ${({ theme }) => theme.sizes.xl};
      justify-content: center;
      text-decoration: none;
      text-shadow: 0 0 1rem ${({ theme }) => rgba(theme.colors.black, 0.5)};
      transition: background 0.2s ease-in-out;

      ::before {
        content: '';
        float: left;
        padding-top: 35%;
      }

      :focus,
      :hover,
      :active {
        background: inherit;
        outline: none;
      }
    }

    &.on {
      background: ${({ theme }) => rgba(theme.colors.primaryLight, 0.65)};

      button {
        background: ${({ theme }) =>
          darken(0.2, rgba(theme.colors.primaryLight, 0.5))};
        color: ${({ theme }) => rgba(theme.colors.white, 0.85)};
        cursor: pointer;

        :focus,
        :hover {
          background: ${({ theme }) =>
            darken(0.3, rgba(theme.colors.primaryLight, 0.25))};
        }

        :active {
          background: radial-gradient(
            ${({ theme }) =>
              `${rgba(theme.colors.primaryLight, 0.25)} 5%, ${rgba(
                theme.colors.primaryDark,
                0.5
              )} 60%`}
          );
        }
      }
    }

    @media screen and (min-width: ${({ theme }) =>
        theme.sizes.breakpoints.horizontal}) {
      :nth-child(3n) {
        margin-right: ${({ theme }) => theme.sizes.lg};
      }
    }
  }
`;

// Create the DrumPads component
class DrumPads extends Component {
  // Hold the currently selected banka nd sounds in component state
  state = {
    currentBank: null,
    sounds: []
  };

  constructor(props) {
    super(props);

    // Create an empty array to hold references to audio elements
    this.audioRefs = [];
  }

  // Lifecycle hook for when the component mounts, occurs once
  componentDidMount() {
    const { bankId } = this.props;

    // Add an event listener to the document for 'keydown' events
    document.addEventListener('keydown', this.handleKeyDown);

    // Use the API to get an array of sounds for the currently selected bank
    const sounds = api.getSounds(bankId);

    // Set the component state with the current bank and sounds
    // This will force a rerender
    this.setState(() => ({ currentBank: bankId, sounds }));
  }

  // Lifecycle hook for when the component receives updated props
  // This will occur any time the props are updated through Redux
  componentWillReceiveProps(nextProps) {
    // Check if the updated bank is equal to the current bank
    if (nextProps.bankId !== this.state.currentBank) {
      // If so, then get an updated list of sounds
      const sounds = api.getSounds(nextProps.bankId);
      this.audioRefs = []; // reset the refs array

      // Set the new state of the component and rerender
      this.setState(() => ({ currentBank: nextProps.bankId, sounds }));
    }
  }

  // Given a node, add the node to the array of audioRefs
  setAudioRef = node => {
    if (node) {
      this.audioRefs = [...this.audioRefs, node];
    }
  };

  // Given a sound object, find the audio element for that sound and play it
  playAudio = sound => {
    const audio = this.audioRefs.filter(item => item.id === sound.key)[0];

    if (audio && this.props.isPowerOn) {
      audio.volume = this.props.volume / 100;
      audio.currentTime = 0.0;
      audio.play();
    }
  };

  // Handles the 'keydown' event
  handleKeyDown = event => {
    // Find the sound for the key that was pressed
    const sound = this.state.sounds.filter(
      ({ keyCode }) => keyCode === event.keyCode
    )[0];

    // if a sound was located, and that sound has a key
    if (sound && sound.key) {
      // Dispatch the action to update the active sound
      // and play the audio for that sound
      this.props.updateActiveSound(sound);
      this.playAudio(sound);
    }
  };

  // Handles the 'onClick' event
  handleClick = sound => {
    // Dispatch the action to update the active sound
    // and play the audio for that sound
    this.props.updateActiveSound(sound);
    this.playAudio(sound);
  };

  // Lifecycle hook for when the component unmounts
  componentWillUnmount() {
    // Remove the event listener for 'keydown' as it is no longer needed
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  // Render the component
  render() {
    const { sounds } = this.state;
    const onClass = this.props.isPowerOn ? 'on' : '';

    return (
      <DrumPadContainer>
        <DrumPadList>
          {sounds &&
            sounds.length > 0 &&
            sounds.map((sound, i) => (
              <DrumPad
                key={`${sound.name}-${i}`}
                sound={sound}
                onClick={this.handleClick}
                className={onClass}
              >
                <audio
                  src={sound.track}
                  id={sound.key}
                  className="clip"
                  ref={this.setAudioRef}
                />
              </DrumPad>
            ))}
        </DrumPadList>
      </DrumPadContainer>
    );
  }
}

// Define the expected props
DrumPads.propTypes = {
  bankId: PropTypes.number.isRequired,
  isPowerOn: PropTypes.bool.isRequired,
  updateActiveSound: PropTypes.func.isRequired,
  volume: PropTypes.number.isRequired
};

// Export the connected component
export default connect(
  ({ activeBank, isPowerOn, volume }) => ({
    bankId: activeBank.id,
    isPowerOn,
    volume
  }),
  { updateActiveSound }
)(DrumPads);
