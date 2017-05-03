import Formsy from 'formsy-react';
import React from 'react';
import { InputText } from './custominput';
import { Button, Form, FormGroup, ControlLabel } from 'react-bootstrap'
import Fa from 'react-fontawesome'
import { Redirect } from 'react-router'

const Login = React.createClass({
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
      this.props.loginUser(model.email, model.password)
    },
    render() {
      return (
        <Formsy.Form onValidSubmit={this.submit} onValid={this.enableButton} onInvalid={this.disableButton}>
            {this.props.user.login == 1 &&
                  <Redirect to={"/"+this.props.user.username} />}
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
          <Button type="submit" disabled={!this.state.canSubmit} bsStyle="primary">
            Login
          </Button>
        </Formsy.Form>
      );
    }
  });

export const LoginForm = Login;
