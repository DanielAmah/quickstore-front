import React from 'react';
import { reduxForm, Field } from 'redux-form';
import * as actions from '../../../actions/authAction';
import { connect } from 'react-redux';


const renderField = ({ input, type, placeholder, meta: { touched, error } }) => (
  <div className={`${touched && error ? 'has-error' : ''}`}>
    <input type={type} placeholder={placeholder} {...input} />
    { touched && error && <div className="alert alert-danger">{error}</div> }
  </div>
);

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      registered: false,
      formCompleted:false,
      errorMessage:'',
      signUpMessage: ''
    };

    // this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }
  componentWillReceiveProps(nextProps){
    if(nextProps.registered){
      this.setState({
        registered:true,
        formCompleted:true,
        errorMessage:'',
        signUpMessage:nextProps.signUpMessage
      });
    }
    if(nextProps.errorMessage){
      this.setState({
        registered:false,
        formCompleted:true,
        signUpMessage:'',
        errorMessage:nextProps.errorMessage
      });
    }
  }
  handleFormSubmit=(formProps) =>{
    this.props.register(formProps);
  }

  render() {
    const { handleSubmit } = this.props;
    const {
      errorMessage,
      signUpMessage,
      formCompleted} = this.state;
    return (
      <div className="col-sm-4">
        <div className="signup-form">
        {formCompleted &&
          <div 
          className={`alert alert-${errorMessage ?'danger': 'success'}`}
          role="alert"
          >
          {signUpMessage &&
            <span>
            <strong>Well Done! </strong>
            {signUpMessage}
            </span>
          }
          {errorMessage &&
            <span>
            <strong>Oops! </strong>
            {errorMessage}
            </span>
          }
          </div>
        }
          <h2>New User Signup!</h2>
          <form onSubmit={handleSubmit(this.handleFormSubmit)}>
            <Field  name="name" component={renderField} type="text" placeholder="Name"/>
            <Field  name="email" component={renderField} type="email" placeholder="Email Address"/>
            <Field  name="password" component={renderField} type="password" placeholder="Password"/>
            <Field  name="phone_number" component={renderField} type="tel" placeholder="Phone Number"/>
            <Field  name="address" component={renderField} type="text" placeholder="Address"/>
            <Field name="city" component={renderField}  type="text" placeholder="City"/>
            <Field  name="state" component={renderField} type="text" placeholder="State"/>
            <Field  name="country" component={renderField} type="text" placeholder="Country"/>

          { /* <div>
            { this.props.errorMessage && this.props.errorMessage.register &&
                <div className="error-container">Oops! { this.props.errorMessage.register }</div> }
            </div>*/}
            <button type="submit" className="btn btn-default">Signup</button>
          </form>
        </div>
      </div>
    )
  }
}

const validate = props => {
  const errors = {};
  const fields = ['name', 'email', 'password', 'phone_number', 'address', 'city', 'state', 'country'];

  fields.forEach((f) => {
    if(!(f in props)) {
      errors[f] = `${f} is required`;
    }
  });

  if(props.name && props.name.length < 3) {
    errors.name = "minimum of 4 characters";
  }

  if(props.name && props.name.length > 100) {
    errors.name = "maximum of 100 characters";
  }

  if(props.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(props.email)) {
    errors.email = "please provide valid email";
  }

  if(props.password && props.password.length < 6) {
    errors.password = "minimum 6 characters";
  }

  if(props.phone_number && !/^\d{11}$/i.test(props.phone_number)) {
    errors.phone_number = "please provide valid phone number";
  }

  return errors;
}

function mapStateToProps(state) {
  return {
    registered:state.signUpReducer.registered,
    signUpMessage:state.signUpReducer.signUpMessage,
    errorMessage: state.signUpReducer.error.message
    };
}

Register = reduxForm({ form: 'register', validate })(Register);

export default connect(mapStateToProps, actions)(Register);
