// Import the action types
import {
  CHANGE_SOUNDBANK,
  CHANGE_VOLUME,
  PLAY_SOUND,
  TOGGLE_POWER_ONOFF
} from './actionTypes';

// Create the drum machine reducer
const drumsReducer = (state, action) => {
  // Determine which action to handle
  // Notice that a new state object is always returned,
  // unless the state remains unchanged.
  switch (action.type) {
    case TOGGLE_POWER_ONOFF:
      return {
        ...state,
        ...{ isPowerOn: !state.isPowerOn }
      };
    case CHANGE_VOLUME:
      return {
        ...state,
        ...{ volume: action.payload }
      };
    case CHANGE_SOUNDBANK:
      return {
        ...state,
        ...{ activeBank: action.payload }
      };
    case PLAY_SOUND:
      return {
        ...state,
        ...{ activeSound: action.payload }
      };
    default:
      return state;
  }
};

// Export the drum machine reducer
export default drumsReducer;
