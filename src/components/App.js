// Import project-level dependencies
import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

// Import local components
import DrumMachine from './DrumMachine';
import GlobalStyle from './GlobalStyle';

// Import local dependencies
import store from '../redux/store';
import theme from '../style/theme';

// Scaffold the application with the
// redux store, application theme, and glboal styles.
const App = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Fragment>
        <GlobalStyle />
        <DrumMachine />
      </Fragment>
    </ThemeProvider>
  </Provider>
);

// Export the App component
export default App;
