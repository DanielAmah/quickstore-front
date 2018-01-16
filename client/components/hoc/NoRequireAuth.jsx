import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export default function (ComposedComponent) {
  class NotAuthentication extends Component {
    componentWillMount() {
      if (this.props.authenticated) {
        this.props.history.push('/secret');
      }
    }

    componentWillUpdate(nextProps) {
      if (nextProps.authenticated) {
        this.props.history.push('/secret');
      }
    }

    render() {
      return <ComposedComponent {...this.props} />;
    }
  }

  function mapStateToProps(state) {
    return { authenticated: state.auth.authenticated };
  }

  return connect(mapStateToProps)(NotAuthentication);

  NotAuthentication.propTypes = {
    router: PropTypes.object
  }

}

