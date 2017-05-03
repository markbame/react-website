import React from 'react';
import { Grid, Row, Col} from 'react-bootstrap'
import Fa from 'react-fontawesome'
import { Link }   from 'react-router-dom'
import { DropzoneMap, UploadedMap } from '../../connect/users'
import  NewItemForm from '../forms/newitem'

class NewItem extends React.Component{
  constructor(props) {
     super(props);

     // Default state
     this.state = {
         layout: 'horizontal',
         showingOptions: true,
         validateOnSubmit: true,
         validatePristine: true,
         disableButton: true,
         disabled: false
     };
   }

   handleChangeOption(name, value){
       var newState = {};
       newState[name] = value;
       this.setState(newState);
   }

   handleToggleOptions(){
       this.setState({showingOptions: !this.state.showingOptions});
   }

   render(){

      return (
					<div className="item">
							<Grid>
								<Row>
									<Col xs={12} sm={12} md={5}>
										<div className="iteminformation">
                      <legend className="color font-size-15px"> <Fa name='upload' className="color iteminfowidth" />  Listing images</legend>
                      <DropzoneMap />
                    </div>
                    <div className="iteminformation margintop5px">
                      <UploadedMap />
										</div>
									</Col>
									<Col xs={12} sm={12} md={7}>

                        <NewItemForm
                            layoutChoice={this.state.layout}
                            validateOnSubmitChoice={this.state.validateOnSubmit}
                            validatePristineChoice={this.state.validatePristine}
                            disableButton={this.state.disableButton}
                            disabledChoice={this.state.disabled}
                         />

									</Col>
								</Row>
							</Grid>
					</div>
      );
    }
};

export default NewItem;
