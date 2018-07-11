import React from 'react';
import { connect } from 'react-redux';

export default ChildComponent => {
  class SecuredComponent extends ChildComponent {
    componentDidMount = () => this.handleNotLoggedIn()
    componentDidUpdate = () => this.handleNotLoggedIn()
    handleNotLoggedIn = () => {
      if (!this.props.authenticated) {
        this.props.history.push('/');
      }
    }
    render = () => <ChildComponent {...this.props} />
  }
  const mapStateToProps = (state) => ({ authenticated: state.auth.authenticated })

  return connect(mapStateToProps)(SecuredComponent);
}
