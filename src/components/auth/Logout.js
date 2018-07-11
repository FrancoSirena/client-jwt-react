import React from 'react';
import { connect } from 'react-redux';
import actions from '../../actions';

class Logout extends React.Component {
  componentDidMount = () => this.props.logout(() => setTimeout(() => this.props.history.push('/'), 1000));
  render = () => <div> Hope to see you soon! </div>
}

export default connect(null, actions)(Logout);