import React from 'react';
import { Grid, Row, Col, Thumbnail, FormControl, Button } from 'react-bootstrap'

import Carousel from '../utils/carousel'
import { ItemsMap } from '../../connect/items'

class Home extends React.Component {
    render() {
        return (
            <div className="home">
              <Grid>
                <Row>
                  <Col xs={12} sm={12} md={8}>
                    <Carousel />
                  </Col>
                  <Col xsHidden smHidden md={4}>
                    <div className="rightnavigation">
                      <img src={process.env.REACT_URL_APP+"totoro.png"} />
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col xsHidden sm={2} md={2}>
                    <div className="leftnavigation">
                    </div>
                  </Col>
                  <Col xs={12} sm={10} md={10}>
                    <ItemsMap {...this.props} />
                  </Col>
                </Row>
              </Grid>
            </div>
        )
    }
}
export default Home;
