// Import project dependencies
import { createStore, applyMiddleware, compose } from 'redux';

// Import local dependencies
import middlewares from './middleware';
import rootReducer from './reducers';

// Preloaded application state
const INITIAL_STATE = {
  // Power can either be on (true) or off (false)
  isPowerOn: true,

  // Volume level can be between 0 (min) and 100 (max)
  volume: 50,

  // The active, or most recently selected, sound bank
  activeBank: { id: 1, name: 'Drums' },

  // The active, or most recent, sound
  activeSound: { name: "Let's Rock" }
};

// Setup Redux Devtools Extension
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Create the Redux store and export it
export default createStore(
  rootReducer,
  INITIAL_STATE,
  composeEnhancers(applyMiddleware(...middlewares))
);
