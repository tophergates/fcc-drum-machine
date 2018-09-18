// Import project-level dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';

// Import stateless components
import BankItem from '../components/BankItem';

// Import local dependencies
import api from '../data/api';
import { updateActiveBank } from '../redux/actions';

/* STYLED COMPONENTS */
// Container component
const Container = styled.article`
  margin-bottom: ${({ theme }) => theme.sizes.md};
`;

// StyledBankList component
const StyledBankList = styled.ul`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
`;

// Title component (the first LI)
const Title = styled.li`
  flex: 1 0 100%;
  padding-bottom: ${({ theme }) => theme.sizes.sm};
`;

/* BANKLIST COMPONENT */

// Define the BankList component
class BankList extends Component {
  constructor(props) {
    super(props);

    // Get an array of available banks from the API
    this.banks = api.getBanks();
  }

  // When a bank button is clicked, dispatch an action
  // that updates the active bank in the state tree
  handleClick = bank => {
    this.props.updateActiveBank(bank);
  };

  // Render the component
  render() {
    return (
      <Container>
        <StyledBankList>
          <Title>Sound Banks</Title>
          {this.banks &&
            this.banks.length > 0 &&
            this.banks.map((bank, i) => (
              <BankItem
                key={`bank-${i + 1}`}
                bank={bank}
                onClick={this.handleClick}
              />
            ))}
        </StyledBankList>
      </Container>
    );
  }
}

// BankList props received from the redux store
BankList.propTypes = {
  updateActiveBank: PropTypes.func.isRequired
};

// Export the connected BankList component
export default connect(
  null,
  { updateActiveBank }
)(BankList);
