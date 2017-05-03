import Formsy from 'formsy-react';
import React from 'react';
import { InputText } from './custominput';
import { Button, Form, FormGroup, ControlLabel } from 'react-bootstrap'
import Fa from 'react-fontawesome'
import { Redirect } from 'react-router'

const SignUp = React.createClass({
    getInitialState() {
      return {
        canSubmit: false
      }
    },
    enableButton() {
      this.setState({
        canSubmit: true
      });
    },
    disableButton() {
      this.setState({
        canSubmit: false
      });
    },
    submit(model) {
      this.props.addUser(model.username, model.email, model.password, null, null, null, null, null)
    },
    render() {
      return (
        <Formsy.Form onValidSubmit={this.submit} onValid={this.enableButton} onInvalid={this.disableButton}>
          {this.props.user.status == 201 &&
                  <Redirect to="/markbame" />}
          <FormGroup controlId="formInlineName">
            <ControlLabel className="graycolor normal"><Fa name='user-circle' className="color iteminfowidth" /> User name</ControlLabel>
            {' '}
            <InputText name="username" validations="isAlphanumeric" validationError="Invalid Display name" required/>
          </FormGroup>
          <FormGroup controlId="formInlineName">
            <ControlLabel className="graycolor normal"><Fa name='envelope' className="color iteminfowidth" /> Email</ControlLabel>
            {' '}
            <InputText name="email" validations="isEmail" validationError="Invalid email" required/>
          </FormGroup>
          <FormGroup controlId="formInlineName">
            <ControlLabel className="graycolor normal"><Fa name='lock' className="color iteminfowidth" /> Password</ControlLabel>
            {' '}
            <InputText name="password" validations="minLength:8" validationError="Password minimum of 8 characters" required/>
          </FormGroup>
          <FormGroup controlId="formInlineName">
            <ControlLabel className="graycolor normal"><Fa name='lock' className="color iteminfowidth" /> Repeat Password</ControlLabel>
            {' '}
            <InputText name="repeated_password" validations="equalsField:password" validationError="Password did not match" required/>
          </FormGroup>
          <Button type="submit" disabled={!this.state.canSubmit} bsStyle="primary">
            Sign Up
          </Button>
        </Formsy.Form>
      );
    }
  });

export const SignUpForm = SignUp;
