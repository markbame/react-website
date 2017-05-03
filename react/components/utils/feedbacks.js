import React from 'react'
import { Link }   from 'react-router-dom'
import { Button,Media, Form, FormGroup,FormControl, ControlLabel } from 'react-bootstrap'
import Fa from 'react-fontawesome'
class Feedbacks extends React.Component {

  renderFeedbacks() {
          return (
            <div className="feedback">
                <h5 className="color"><b><Fa name='comments' /> Feedbacks</b>
                  <p className="pull-right  cursor">
                     <Fa name='chevron-right' />
                  </p>
                </h5>
                  <Media>
                   <Media.Left>
                      <img width={64} height={64} src={ process.env.REACT_URL_UPLOADS+"1489192667_i3.JPG" } alt="Image"/>
                    </Media.Left>
                    <Media.Body>
                      <Media.Heading><Link to="/">markbame</Link></Media.Heading>
                      <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                    </Media.Body>
                  </Media>
                  <Media>
                     <Media.Left>
                        <img width={64} height={64} src={ process.env.REACT_URL_UPLOADS+"1489192667_i3.JPG" } alt="Image"/>
                      </Media.Left>
                      <Media.Body>
                        <Media.Heading><Link to="/">markbame</Link></Media.Heading>
                        <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                      </Media.Body>
                  </Media>
                <Form>
                   <FormGroup controlId="formControlsTextarea">
                      <ControlLabel className="graycolor">Feedback</ControlLabel>
                      <FormControl componentClass="textarea" placeholder="..." />
                   </FormGroup>
                  <Button >
                    Write a feedback
                  </Button>
                </Form>
            </div>
          )
  }

  render() {
    return (
        <div>
          {this.renderFeedbacks()}
        </div>
    )

  }
}
export default Feedbacks;
