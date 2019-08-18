// Import project-level dependencies
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { rgba } from 'polished';

// Create the StyledBankItem component
const StyledBankItem = styled.li`
  flex: 1 0 auto;

  :nth-child(2n + 1) {
    margin: 0 0.25rem;
  }

  button {
    background: ${({ theme }) => rgba(theme.colors.black, 0.7)};
    border: 0;
    border-radius: ${({ theme }) => theme.sizes.md};
    box-shadow: 1px 2px ${({ theme }) => rgba(theme.colors.black, 0.35)};
    color: rgba(215, 215, 215, 0.75);
    cursor: pointer;
    min-height: ${({ theme }) => theme.sizes.xxl};
    min-width: ${({ theme }) => theme.sizes.xxl};
    outline: none;
    padding: 1rem;
    width: 100%;

    &:active {
      box-shadow: 0 0 ${({ theme }) => rgba(theme.colors.black, 0.5)};
      transform: translateY(2px);
    }
  }
`;

// BankItem component
const BankItem = ({ bank, onClick }) => {
  const handleClick = event => {
    event.preventDefault();
    event.stopPropagation();

    onClick(bank);
  };

  return (
    <StyledBankItem>
      <button onClick={handleClick}>{bank.name}</button>
    </StyledBankItem>
  );
};

// BankItem component props
BankItem.propTypes = {
  bank: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired,
  onClick: PropTypes.func.isRequired
};

// Export the BankItem component
export default BankItem;
