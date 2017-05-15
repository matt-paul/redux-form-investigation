import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { load as loadAccount } from '../reducers/account';

const email = value => {
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
  'Invalid email address' : undefined;
}

const noDonald = value => value == 'Donald' ? 'Sorry, no Donalds allowed' : undefined;

const required = value => value ? undefined : 'Required'

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type}/>
      {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
    </div>
  </div>
)

const data = {
  name: 'Scott Walker',
  email: 'scott@walker.com',
  contactNumber: '07975 144644'
}

class ContactForm extends Component {
  render() {
    const { handleSubmit, pristine, load, reset, submitting } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <button type="button" onClick={() => load(data)}>Load Default Profile</button>
        <div>
          <Field name="name"
            component={renderField}
            type="text"
            label="name"
            validate={[required, noDonald]} //causes submit to fail
            // warn={noDonald} allows submission
          />
        </div>
        <div>
          <Field name="email"
            component={renderField}
            type="text"
            label="email"
            validate={email}
            warn={email}
          />
        </div>
        <div>
          <Field
            name="contactNumber"
            component={renderField}
            label="contactNumber"
            type="text"/>
        </div>
        <button type="submit" disabled={submitting}>Submit</button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>Values</button>
      </form>
    )
  }
}

//Decorate form component
ContactForm = reduxForm({
  form: 'Banana Form' // a unique name for this form
})(ContactForm);

const mapStateToProps = state => {
  return {
    initialValues: state.account.data,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    load: loadAccount,
  }
}
ContactForm = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ContactForm)

export default ContactForm;
