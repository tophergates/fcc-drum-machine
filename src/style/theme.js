// Export the default theme used for the drum machine
export default {
  colors: {
    primaryDark: '#1cbc8d',
    primaryLight: '#57f3c7',
    secondaryLight: '#e08aa0',
    secondaryDark: '',
    white: '#e7e7e7',
    darkGrey: '#333333',
    black: '#000000'
  },
  fonts: {
    primarySans: 'sans-serif',
    primarySerif: 'serif',
    primaryMono: 'monospace'
  },
  sizes: {
    xxs: '0.5rem',
    xs: '0.85rem',
    sm: '1.25rem',
    md: '1.6rem',
    lg: '2.5rem',
    xl: '3.2rem',
    xxl: '4.8rem',
    breakpoints: {
      maxWidth: '96rem',
      minWidth: '32rem',
      horizontal: '645px' // Pixels are used in media queries on purpose! Relative units are buggy
    }
  }
};
