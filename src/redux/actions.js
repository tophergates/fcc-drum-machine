// Import the action types
import {
  CHANGE_SOUNDBANK,
  CHANGE_VOLUME,
  PLAY_SOUND,
  TOGGLE_POWER_ONOFF
} from './actionTypes';

// Action to toggle the power on/off
export const powerOnOff = () => ({
  type: TOGGLE_POWER_ONOFF
});

// Action to change the volume
export const updateVolume = volume => ({
  type: CHANGE_VOLUME,
  payload: volume
});

// Action to update the active bank
export const updateActiveBank = bank => ({
  type: CHANGE_SOUNDBANK,
  payload: bank
});

// Action to update the active sound
export const updateActiveSound = sound => ({
  type: PLAY_SOUND,
  payload: sound
});
