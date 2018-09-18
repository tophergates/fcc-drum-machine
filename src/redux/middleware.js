// Import action type
import { TOGGLE_POWER_ONOFF } from './actionTypes';

// Middleware function to check if power is on or off
const powerCheck = store => next => action => {
  const isPowerOn = store.getState().isPowerOn;

  // If the action is to toggle the power, dispatch it
  if (action.type === TOGGLE_POWER_ONOFF) {
    return next(action);
  }

  // Otherwise, check if power is on and if it is dispatch the action
  isPowerOn && next(action);
};

// Export the middleware as an array
export default [powerCheck];
