// Import local dependencies
import data from './sounds.json';

// Export the api functions
export default {
  // Returns an array of banks
  getBanks: () =>
    data.soundBanks.reduce((acc, next) => {
      acc.push({ id: next.id, name: next.name });
      return acc;
    }, []),

  // Returns an array of sounds for a given bank
  getSounds: bankId => {
    const bank = data.soundBanks.filter(({ id }) => id === bankId)[0];
    return bank.sounds;
  }
};
