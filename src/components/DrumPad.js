// Import project-level dependencies
import React from 'react';
import PropTypes from 'prop-types';

// DrumPad component
const DrumPad = ({ children, className, onClick, sound }) => {
  const handleClick = () => {
    onClick(sound);
  };

  return (
    <li className={className}>
      <button
        onClick={handleClick}
        className="drum-pad"
        id={`sound-${sound.id}`}
      >
        {sound.key}
        {children}
      </button>
    </li>
  );
};

// Define the props expected for the DrumPad component
DrumPad.propTypes = {
  children:
    PropTypes.node.isRequired || PropTypes.arrayOf(PropTypes.node).isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  sound: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    key: PropTypes.string.isRequired,
    keyCode: PropTypes.number.isRequired,
    track: PropTypes.string.isRequired
  }).isRequired
};

// Export the DrumPad component
export default DrumPad;
