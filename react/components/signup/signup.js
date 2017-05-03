import React from 'react'
import { Link }   from 'react-router-dom'
import { Grid, Row, Col } from 'react-bootstrap'
import Fa from 'react-fontawesome'
import ItroBanner from '../utils/introbanner'
import { SignUpForm } from '../forms/signup'

class SignUp extends React.Component {
  componentWillReceiveProps(nextProps) {
      this.setState({
          children: nextProps.children
      });
  }
  renderSignUp() {
      return (
          <Grid>
            <Row>
                <Col xsHidden smHidden md={8} >
                    <ItroBanner />
                </Col>
                <Col sm={12} md={4} >
                    <div className="iteminformation margintop5px marginbottom5px">
                        <h4>Join Us!</h4>
                    </div>
                </Col>
            </Row>
          </Grid>
      )
  }
  render() {
    return (
        <div>
          {this.renderSignUp()}
        </div>
    )

  }
}
export default SignUp;
