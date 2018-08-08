import React, { Component } from 'react';
import { connect } from 'react-redux';
import DetailsAccordion from '../components/DetailsAccordion.jsx';

const mapStateToProps = state => ({
 transactions: state.transactions,
 selectedTransactionIndex: state.selectedTransactionIndex
}); 

const mapDispatchToProps = dispatch => ({

});

export default class DetailsRequestContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div  className='flex-column' id='details-request-container'>
        Request
    </div>
    )
  }
}