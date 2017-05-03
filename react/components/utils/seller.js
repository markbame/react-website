import React from 'react'
import { Link }   from 'react-router-dom'
import { Media,Form,FormGroup,ControlLabel } from 'react-bootstrap'
import Rating from '../utils/rating'

import Fa from 'react-fontawesome'
class Seller extends React.Component {

  renderSeller() { console.log(this.props.username)
          return (
            <div className="seller">
                <h5>Seller</h5>
                <Media>
                 <Media.Left>
                    <img width={64} height={64} src={ process.env.REACT_URL_UPLOADS+"1489192667_i3.JPG" } alt="Image"/>
                    <p><Link to="/">Level IX</Link></p>
                  </Media.Left>
                  <Media.Body>
                    <Media.Heading >
                        <Link to="/" className="color"> {this.props.username} </Link>
                    </Media.Heading>
                      <Rating  />
                      <h5 className="sellerdescription">
                          Selling brand new and pre-loved items! Cras sit amet nibh libero,
                          in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio,
                          vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi
                          vulputate fringilla. Donec lacinia congue felis in faucibus.
                      </h5>

                      <h5>Rate Me:</h5>
                      <Rating />
                  </Media.Body>
                </Media>
                </div>
          )
  }

  render() {
    return (
        <div>
          {this.renderSeller()}
        </div>
    )

  }
}
export default Seller;
