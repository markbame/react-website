import React from 'react'
import { Link }   from 'react-router-dom'
import Fa from 'react-fontawesome'
import { Grid, Row, Col, Thumbnail, FormControl, Button } from 'react-bootstrap'

class Item extends React.Component {
  renderitem() {
      if(this.props.itemlist.length == 0) {
          return (
            <h1 className="grayedout center">Sorry no items available</h1>
          )
      }
      return this.props.itemlist.map((prod) => {
          return (
            <Col xs={12} sm={4} md={3} key={prod._id}>
              <Thumbnail src={ process.env.REACT_URL_UPLOADS+"1489192667_i3.JPG" } alt={prod.title}>
                 <h5 className="itemtitle">{ prod.title }</h5>
                  <p>
                    <span className="color price bold pull-right">$US { prod.price }</span><span className="grayedout price linethrough">$US { prod.oldprice }</span>
                  </p>
                  <p>
                  <Link to="/item/1"  className="btn itembuybutton pull-right" onClick={ () => this.props.getItem(prod) }>Buy me!</Link>
                  <Fa name='heart' className="heart lightcolor cursor"/>&nbsp;<span className="lightcolor">(300)</span>
                  </p>
              </Thumbnail>
            </Col>
          )
      })
  }
  componentDidMount() {
    this.props.getItems(1)
  }
  render() {
    return (
        <div>
          {this.renderitem()}
          {this.props.user.login == 1 &&
          <Link to={"/"+this.props.user.username+"/newitem"} className="btn whitebutton pull-right"><Fa name='tag' className="heart lightcolor cursor"/>&nbsp; New Item</Link>}
        </div>
    )

  }
}
export default Item;
