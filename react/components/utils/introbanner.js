import React from 'react'
import { Link }   from 'react-router-dom'
import { Navbar, FormGroup, FormControl } from 'react-bootstrap'
import Fa from 'react-fontawesome'
import Share from './share'
import { ButtonGroup, Button, DropdownButton, MenuItem } from 'react-bootstrap';

class IntroBanner extends React.Component {
  render() {
      return (
            <div className="iteminformation margintop5px marginbottom5px">
              <h2 className="center graycolor normal"><Fa name='sign-in' className="color iteminfowidth" /> JOIN US NOW 100% FREE!</h2>
              <img src={process.env.REACT_URL_APP+"buysellabenyu.png"} />
              <Share />
            </div>
      )
  }
}

export default IntroBanner;
