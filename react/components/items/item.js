import React from 'react';
import { Grid, Row, Col, Thumbnail, FormControl, Button,ButtonToolbar,ButtonGroup,Media,Form,FormGroup,ControlLabel} from 'react-bootstrap'
import Carousel from '../utils/carousel-item'
import Seller from '../utils/seller'
import Comments from '../utils/comments'
import Share from '../utils/share'
import Fa from 'react-fontawesome'
import { Link }   from 'react-router-dom'
import { ItemsMap } from '../../connect/items'

class Item extends React.Component {

    componentDidMount() {
      if(this.props.item.length == 0) {
          this.props.getItem()
      }
    }

    render() {
        var selected = "";
        if(this.props.item.length != 0) {
          selected = this.props.item.description
        }

        return (
            <div className="item">
                <Grid>
                  <Row>
                    <Col xs={12} sm={12} md={7}>
                        <Carousel />
                        <div className="iteminformation margintop5px">
                        <Seller username={ this.props.item.username } />
                        </div>
                    </Col>
                    <Col xs={12} sm={12} md={5}>
                        <div className="iteminformation">
                          <h3 className="color">{ this.props.item.title }</h3>
                          <div className="badge">{ this.props.item.condition }</div>
                          <h5><Fa name='user' className="color iteminfowidth" /><Link to="/"><span className="iteminfo">{ this.props.item.username }</span></Link></h5>
                          <h5><Fa name='tag' className="color iteminfowidth" /><span className="iteminfo grayedout">PHP{ this.props.item.price }</span> <span className="iteminfo linethrough">PHP{ this.props.item.oldprice }</span></h5>
                          <h5><Fa name='map-marker' className="color iteminfowidth" /><span className="iteminfo">{ this.props.item.location }</span></h5>
                          <h5><Fa name='truck' className="color iteminfowidth" /><span className="iteminfo">{ this.props.item.deal }</span></h5>
                          <h5><Fa name='plane' className="color iteminfowidth" /><span className="iteminfo">PHP{ this.props.item.shipping }</span></h5>
                          <h5><Fa name='cubes' className="color iteminfowidth" /><span className="iteminfo">{ this.props.item.stock } left</span></h5>
                          <hr/>
                          <Button bsStyle="primary" className="buybutton">Buy now</Button>

                          <p className="doublebutton">
                            <ButtonGroup justified>
                              <Button href="#"><Fa name='user-circle-o' className="color iteminfowidth" /> Contact Seller</Button>
                              <Button href="#"><Fa name='paw' className="color iteminfowidth" /> Paw</Button>
                            </ButtonGroup>
                          </p>
                        </div>
                        <div className="iteminformation margintop5px">
                          <h5>Share Me!</h5>
                          <Share />
                        </div>
                        <div className="iteminformation margintop5px">
                            <h5>Description</h5>
                            <p>
                                { this.props.item.description }
                            </p>
                        </div>
                        <div className="iteminformation margintop5px">
                          <Comments />
                        </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={12}>
                      <div className="iteminformation margintop5px">
                        <h4 className="color">Customers who bought this also bought</h4>
                        <ItemsMap />
                      </div>
                    </Col>
                  </Row>
                </Grid>
            </div>
        )
    }
}

export default Item;
