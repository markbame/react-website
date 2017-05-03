import React from 'react'
import { Link }   from 'react-router-dom'
import Fa from 'react-fontawesome'
import Search from '../../utils/search'
import { Grid, Row, Col, ButtonGroup, Button, DropdownButton, MenuItem } from 'react-bootstrap';

const Head = React.createClass({
  componentWillMount() {
    this.props.checkLocalStorage()
  },
  renderCategories() {
    return (
        <DropdownButton className="noborder noradius color" title="Categories" id="bg-nested-dropdown">
          <MenuItem eventKey="1">Dropdown link</MenuItem>
          <MenuItem eventKey="2">Dropdown link</MenuItem>
        </DropdownButton>
    );
  },
  renderGuestLink() {
    return (
        <ul className="pull-right">
          <li><Link to="/user/login"  className="primarynav">Login</Link></li>
          <li><Link to="/user/signup" className="primarynav">Sign Up</Link></li>
        </ul>
    );
  },
  renderLogedLink() {
    return (
      <ul className="pull-right">
         <li className="primarynav cursor"><Fa name='users' />&nbsp;&nbsp; Followers</li>
         <li className="primarynav cursor"><Fa name='envelope' />&nbsp;&nbsp; Messages</li>
         <li className="primarynav cursor"><Fa name='braille' />&nbsp;&nbsp; POS</li>
         <li className="categorynav"><Fa name='cogs' />{this.renderSettings()}</li>
      </ul>
    );
  },
  renderSettings() {
    return (
        <DropdownButton className="noborder noradius color" title="Settings" id="bg-nested-dropdown">
          <MenuItem ><Fa name='tag' />&nbsp; New Item</MenuItem>
          <MenuItem ><Fa name='user-circle-o' />&nbsp; Account</MenuItem>
          <MenuItem ><Fa name='area-chart' />&nbsp; Insights</MenuItem>
          <MenuItem onClick={ this.logout }><Fa name='sign-out' />&nbsp; Logout</MenuItem>
        </DropdownButton>
    );
  },
  logout() {
    this.props.logOut()
  },
   renderMenu() {
    return (
        <DropdownButton bsStyle="danger" pullRight className="menu" title="Menu"  id="bg-nested-dropdown-menu">
          <MenuItem eventKey="1">Login</MenuItem>
          <MenuItem eventKey="2">Sign Up</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey="4">Sell</MenuItem>
        </DropdownButton>
    );
  },
  render() {
    return (
      <div className="header">
          <Grid>
            <Row>
              <Col md={12}>
                <div className="navcontainer">
                  <Link to="/" ><img className="logo" src={'https://s3.us-east-2.amazonaws.com/petabenyu-app/logo-red.png'} /></Link>
                  <ul>
                    {this.props.user.login == 1 &&
                        <li ><Link to={"/"+this.props.user.username} className="primarynav cursor"><b className="cap-first">{this.props.user.username}&nbsp;&nbsp;</b></Link></li>}
                    <li ><Link to="/" className="primarynav cursor"> Home</Link></li>
                    <li className="categorynav">{ this.renderCategories() }</li>
                  </ul>
                  { this.renderMenu() }
                  <Link to="/markbame" ><Button bsStyle="danger" className="pull-right sell">Sell</Button></Link>
                      {this.props.user.login == 0 ?
                          (
                              this.renderGuestLink()
                          ):
                          (
                              this.renderLogedLink()
                          )}
                  <div className="pull-right">
                    <Search />
                  </div>
                </div>
              </Col>
          </Row>
        </Grid>
      </div>
    )
  }
});

export default Head;
