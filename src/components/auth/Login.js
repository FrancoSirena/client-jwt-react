import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { compose } from 'redux';
import actions from '../../actions';
import '../../styles/SignUp.scss';

class Login extends React.Component {
  componentDidMount = () => {
    this.clearAuth();
  }
  onSubmit = (formProps) => {
    this.props.login(formProps, () => this.props.history.push('/my-area'));
  }
  clearAuth = () => {
    this.props.clearAuth();
  }
  render = () => {
    const { handleSubmit } = this.props;
    return (
      <div className="signup-form">
      <h1> Please Login </h1>
      {this.props.errorMessage ?
        <div className="signup-error">
          {this.props.errorMessage}
        </div>
        : ''}
        <form 
          onSubmit={handleSubmit(this.onSubmit)}>
          <fieldset className="signup-fieldset">
            <label className="signup-label"> Email </label>
            <Field 
              className="signup-field input"
              name="email"
              type="text"
              component="input"
              autoComplete="none"
              onChange={this.clearAuth}
            />
          </fieldset>
          <fieldset className="signup-fieldset">
            <label className="signup-label"> Password </label>
            <Field 
              className="signup-field input"
              name="password"
              type="password"
              component="input"
              autoComplete="none"
              onChange={this.clearAuth}
            />
          </fieldset>
          <div className="signup-button-container">
            <button type="button" className="signup-button is-cancel">Cancel</button>
            <button className="signup-button is-submit">Sign In</button>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProp = (state) => ({ errorMessage: state.auth.errorMessage });

export default compose(
  connect(mapStateToProp, actions),
  reduxForm({ form: 'signin' })
)(Login);