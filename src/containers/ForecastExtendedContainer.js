import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ForecastExtended from '../components/ForecastExtended';

export class ForecastExtendedContainer extends Component {
    render() {
        return (
          this.props.city &&
          <ForecastExtended city={this.props.city} />
        );
    }
}

ForecastExtendedContainer.propTypes = {
  city: PropTypes.string.isRequired,
};

// const mapStateToProps = state => ({ city: state.city });
const mapStateToProps = ({ city }) => ({ city });

export default connect(mapStateToProps, null)(ForecastExtendedContainer);