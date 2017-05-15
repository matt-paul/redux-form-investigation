import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class ContactForm extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">First Name</label>
          <Field name="firstName" component="input" type="text"/>
        </div>
        <div>
          <label htmlFor="contactNumber">Contact number</label>
          <Field name="contactNumber" component="input" type="number"/>
        </div>
        <button type="submit">Submit</button>
      </form>

    )
  }
}

//Decorate form component
ContactForm = reduxForm({
  form: 'Banana Form' // a unique name for this form
})(ContactForm);

export default ContactForm;
