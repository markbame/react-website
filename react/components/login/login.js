import React from 'react'
import { Link }   from 'react-router-dom'
import { Grid, Row, Col, Button,Media, Form,FieldGroup, FormGroup,FormControl, ControlLabel } from 'react-bootstrap'
import Fa from 'react-fontawesome'

import ItroBanner from '../utils/introbanner'
import {LoginForm} from '../forms/login'

class Login extends React.Component {
  componentWillReceiveProps(nextProps) {
      this.setState({
          children: nextProps.children
      });
  }
  renderLogin() {
      return (
          <Grid>
            <Row>
                <Col xsHidden smHidden md={8} >
                    <ItroBanner />
                </Col>
                <Col sm={12} md={4} >
                    <div className="iteminformation margintop5px marginbottom5px">
                        <h4>Login</h4>
                        <LoginForm {...this.props} />
                    </div>
                </Col>
            </Row>
          </Grid>
      )
  }

  render() {
    return (
        <div>
          {this.renderLogin()}
        </div>
    )

  }
}
export default Login;
