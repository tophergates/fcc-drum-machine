// Import project-level dependencies
import React from 'react';
import ReactDOM from 'react-dom';

// Import local dependencies
import App from './components/App';

// Render the application
const MOUNT_NODE = document.getElementById('drum-machine');
ReactDOM.render(<App />, MOUNT_NODE);
