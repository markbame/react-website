import React from 'react'
import { Link }   from 'react-router-dom'
import { Media,Form,FormGroup,ControlLabel } from 'react-bootstrap'
import Rating from 'react-rating'
import Fa from 'react-fontawesome'
class Share extends React.Component {

  renderShare() { console.log(this.props.username)
          return (
            <div className="seller">
              <Fa name='facebook' className="color" /><span> Facebook </span>&nbsp;
              <Fa name='pinterest' className="color" /><span> Pinterest </span>&nbsp;
              <Fa name='twitter' className="color" /><span> Twitter</span>            
            </div>
          )
  }

  render() {
    return (
        <div>
          {this.renderShare()}
        </div>
    )

  }
}
export default Share;
