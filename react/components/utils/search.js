import React from 'react'
import { Link }   from 'react-router-dom'
import { Navbar, FormGroup, FormControl } from 'react-bootstrap'
import Fa from 'react-fontawesome'

import { ButtonGroup, Button, DropdownButton, MenuItem } from 'react-bootstrap';

class Seach extends React.Component {
  render() {
      return (
          <div>
            <div className="search">
                <Navbar.Collapse>
                <Navbar.Form pullLeft>
                  <FormGroup>
                    <FormControl type="text" placeholder="Search" />
                    <div className="search-button"><Fa name='search' className="color"  /></div>
                  </FormGroup>
                  {' '}
                </Navbar.Form>
                </Navbar.Collapse>
            </div>
            <div className="search-button">
              <Button><Fa name='search' className="color"  /></Button>
            </div>
          </div>
      )
  }
}

export default Seach;
