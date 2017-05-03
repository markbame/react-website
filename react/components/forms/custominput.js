import Formsy from 'formsy-react';
import React from 'react';
import { FormControl } from 'react-bootstrap'

export const InputText = React.createClass({
    mixins: [Formsy.Mixin],
    changeValue(event) {
      this.setValue(event.currentTarget.value);
    },
    render() {
      const className = this.showRequired() ? 'required' : this.showError() ? 'error' : null;
      const errorMessage = this.getErrorMessage();
      return (
        <div className={className}>
          <FormControl type="text" onChange={this.changeValue} value={this.getValue()}/>
          <span className="color">{errorMessage}</span>
        </div>
      );
    }
 });
