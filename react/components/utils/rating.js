import React from 'react'
import { Link }   from 'react-router-dom'
import { Media,Form,FormGroup,ControlLabel } from 'react-bootstrap'
import ReactRating from 'react-rating'
import Fa from 'react-fontawesome'
class Rating extends React.Component {

  renderRating() { console.log(this.props.username)
          return (
            <div className="rating">
                <ReactRating
                    empty={ <Fa name='star-o' className="color iteminfowidth" /> }
                    full={ <Fa name='star' className="color iteminfowidth" /> }
                    initialRate={2.5}
                    readonly
                  />
            </div>
          )
  }

  render() {
    return (
        <div>
          {this.renderRating()}
        </div>
    )

  }
}
export default Rating;
