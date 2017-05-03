import React, { PropTypes } from 'react';
import FRC from 'formsy-react-components';
import Fa from 'react-fontawesome'

const { Checkbox, CheckboxGroup, Input, RadioGroup, Row, Select, File, Textarea } = FRC;
const NewItem = (props) => {

    const { disabledChoice, layoutChoice, validateOnSubmitChoice, validatePristineChoice } = props;

    let myform = null;
    let valid = false;

    const resetForm = () => {
        console.log('Reset called'); // eslint-disable-line no-console
        const formsy = myform.refs.formsy;
        formsy.reset();
    }

    const submitForm = (data) => {
        console.log("valid", data); // eslint-disable-line no-console
       // console.log(data); // eslint-disable-line no-console
    }

    const validateme = (istrue) => {
      valid = istrue;
    }

    return (
            <FRC.Form
                onValidSubmit={submitForm}
                layout={layoutChoice}
                disabled={disabledChoice}
                ref={(form) => { myform = form; }}
            >
            <fieldset>
              <div className="iteminformation ">
                <legend className="color font-size-15px"> <Fa name='tag' className="color iteminfowidth" />  New Listing</legend>
                <Input
                    name="title"
                    id="title"
                    value=""
                    label="Title"
                    type="text"
                    placeholder=""
                    help=""
                    required
                    validations="minLength:10"
                    validationErrors={{
                        minLength: 'Please provide at least 10 characters.'
                    }}
                />

                <Textarea
                    rows={3}
                    cols={30}
                    name="description"
                    label="Description"
                    placeholder=""
                    help=""
                    validations="minLength:10"
                    required
                    validationErrors={{
                        minLength: 'Please provide at least 10 characters.'
                    }}
                />
                <Select
                    name="category"
                    label="Category"
                    help=""
                    options={[
                        {value: 'bags', label: 'Bags'},
                        {value: 'electronics', label: 'Electronics'}
                    ]}
                />

                <Select
                    name="condition"
                    label="Condition"
                    help=""
                    options={[
                        {value: 'brandnew', label: 'Brandnew'},
                        {value: 'used', label: 'Used'}
                    ]}
                />
              </div>
              <div className="iteminformation margintop5px">
                <legend className="color font-size-15px"> <Fa name='handshake-o' className="color iteminfowidth" />  Pricing & Stock</legend>
                <Input
                    name="deal"
                    value=""
                    label="Deal"
                    type="text"
                    placeholder=""
                    help=""
                    required
                    validationErrors={{
                        minLength: 'Please provide at least 10 characters.'
                    }}
                />

                <Input
                    name="price"
                    value=""
                    label="Price"
                    type="text"
                    placeholder=""
                    help=""
                    required
                    validations="isNumeric"
                    validationErrors={{
                        isNumeric: 'Please provide a amount.'
                    }}
                />

                <Input
                    name="percentoff"
                    value=""
                    label="Percent off"
                    type="text"
                    placeholder=""
                    help=""
                    required
                    validations="isNumeric"
                    validationErrors={{
                        isNumeric: 'Please provide a number.'
                    }}
                />

                <Input
                    name="shipping"
                    value=""
                    label="Shipping"
                    type="text"
                    placeholder=""
                    help=""
                    required
                    validations="isNumeric"
                    validationErrors={{
                        isNumeric: 'Please provide an amount. 0 if shipping is free'
                    }}
                />

                <Input
                    name="stock"
                    value=""
                    label="Stock"
                    type="text"
                    placeholder=""
                    help=""
                    required
                    validations="isNumeric"
                    validationErrors={{
                        isNumeric: 'Please provide a number.'
                    }}
                />
              </div>
              <div className="iteminformation margintop5px">
                <legend className="color font-size-15px"> <Fa name='map-marker' className="color iteminfowidth" />  Location & Tags</legend>

                <Input
                    name="location"
                    value=""
                    label="Location"
                    type="text"
                    placeholder=""
                    help=""
                    required
                    validations="isAlphanumeric"
                    validationErrors={{
                        isAlphanumeric: ''
                    }}
                />

                <Input
                    name="tags"
                    value=""
                    label="Tags"
                    type="text"
                    placeholder=""
                    help=""
                    required
                    validations="isAlphanumeric"
                    validationErrors={{
                        isAlphanumeric: 'Add Tags.'
                    }}
                />

                <RadioGroup
                    name="status"
                    type="inline"
                    label="Status"
                    value="unpublished"
                    options={[
                      {value: 'published', label: 'Published'},
                      {value: 'unpublished', label: 'Unpublished'}
                    ]}
                />
                </div>
            </fieldset>
            <fieldset>
               <div className="iteminformation margintop5px">
                 <Row layout={layoutChoice} className="align-right">
                     <input className="btn btn-default" onClick={resetForm} type="reset" defaultValue="Reset"  />
                     {' '}
                     <input className="btn btn-primary" disabled={valid} formNoValidate={true} type="submit" defaultValue="Save" />
                 </Row>
               </div>
           </fieldset>
        </FRC.Form>
    );
}

NewItem.propTypes = {
    disabledChoice: PropTypes.bool.isRequired,
    layoutChoice: PropTypes.oneOf(['horizontal', 'vertical', 'elementOnly']).isRequired,
    validateOnSubmitChoice: PropTypes.bool.isRequired,
    disableButton: PropTypes.bool.isRequired,
    validatePristineChoice: PropTypes.bool.isRequired
};

export default NewItem;
