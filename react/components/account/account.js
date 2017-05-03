import React from 'react';
import { Image, Grid, Row, Col, Thumbnail, FormControl, Button } from 'react-bootstrap'
import Fa from 'react-fontawesome'
import Feedback from '../utils/feedbacks'
import Posts from '../utils/posts'
import Share from '../utils/share'
import Rating from '../utils/rating'
import { ItemsMap } from '../../connect/items'
import { Link }   from 'react-router-dom'
class Account extends React.Component {
    render() {
        return (
            <div className="account">
              <Grid>
                <Row>
                  <Col xs={12} sm={4} md={4}>
                      <div className="iteminformation margintop5px">
                          <Image className="width50percent" src={ process.env.REACT_URL_UPLOADS+"1489192667_i3.JPG" } rounded />
                          <div className="width50percent padding-left-5px">
                              <h5 className="color padding-left-5px"><Fa name='user-circle' className="heart lightcolor iteminfowidth"/>&nbsp;markbame</h5>
                              <h5 className="graycolor padding-left-5px"><Fa name='calendar-check-o' className="heart lightcolor iteminfowidth"/>&nbsp;Joined Jan 2015</h5>
                              <h5 className="graycolor padding-left-5px"><Fa name='map-marker' className="heart lightcolor iteminfowidth"/>&nbsp;Philippines</h5>
                              <h5 className="graycolor padding-left-5px"><Fa name='smile-o' className="heart lightcolor iteminfowidth"/>&nbsp;97% Positive</h5>
                              {this.props.user.login == 0 &&
                                <p className="padding-left-5px">
                                    <Button className="margintop5px"><Fa name='envelope' className="heart lightcolor iteminfowidth"/>&nbsp; Message</Button>
                                </p>}
                          </div>
                          <div className="margintop5px">
                            <Share />
                          </div>
                      </div>
                      <div className="iteminformation margintop5px">
                          <Posts />
                      </div>
                      <div className="iteminformation margintop5px">
                          <Feedback />
                      </div>
                  </Col>
                  <Col xs={12} sm={8} md={8}>
                    <div className="iteminformation margintop5px">
                        <h5 className="color"><b>Welcome to my shop!</b>
                         {this.props.user.login == 1 &&
                           <div className="pull-right cursor"><Fa name='pencil' /></div>}
                        </h5>
                        <Rating/>
                        <p className="justify">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                          in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                          occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        <Link to="/feedbacks">Feedbacks</Link>
                        {this.props.user.login == 0 &&
                        <Button className="margintop5px color pull-right"><Fa name='star' />&nbsp; Rate me!</Button>}
                    </div>
                    <div className="iteminformation margintop5px">
                      <h5 className="color"><Fa name='shopping-bag' />&nbsp; Order Now!</h5>
                      <ItemsMap {...this.props} />
                    </div>
                  </Col>
                </Row>
            </Grid>
            </div>
        )
    }
}
export default Account;
