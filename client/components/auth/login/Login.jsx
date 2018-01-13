import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { loginAction } from '../../../actions/authAction';
import { connect } from 'react-redux';

class Login extends React.Component {

  submit = (values) => {
    this.props.loginAction(values, this.props.history);
  }

  errorMessage() {
    if (this.props.errorMessage) {
      return (
        <div className="alert alert-danger">
          {this.props.errorMessage}
        </div>
      );
    }
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <div className="col-sm-4 col-sm-offset-1">
        <div className="login-form">
          <h2>Login to your account</h2>
            {this.errorMessage()}
          <form onSubmit={ handleSubmit(this.submit) }>
           <Field type="email" placeholder="Email" name="email" component="input" />
             <Field type="password" placeholder="Password" name="password"  component="input" />
             <span>
              <Field type="checkbox" className="checkbox"  name="remember-me"  component="input" /> 
              Keep me signed in
            </span>
            <button type="submit" className="btn btn-default">Login</button>
          </form>
        </div>
      </div>
    )
  }
}
function mapStateToProps(state) {
  return { errorMessage: state.auth.error };
}

const reduxFormLogin = reduxForm({
  form: 'login'
})(Login);

export default connect(mapStateToProps, {loginAction})(reduxFormLogin);