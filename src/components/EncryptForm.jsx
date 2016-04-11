'use strict';

import React from 'react';
import request from 'superagent';
// import Spinner from 'react-spinkit';

import InputBox from './InputBox.jsx';
import Select from './Select.jsx';

const SALT_WORK_FACTOR = [
    { value: 8, label: '8' },
    { value: 9, label: '9' },
    { value: 10, label: '10' },
    { value: 11, label: '11' },
    { value: 12, label: '12' },
    { value: 13, label: '13' },
    { value: 14, label: '14' }
];

export default React.createClass({
  getInitialState () {
    return {
      inputPassword: '',
      hashedPassword: '',
      showOutputBox: false,
      options: [
        { value: 8, label: '8' }
      ],
      matchPos: 'any',
      matchValue: true,
      value: '',
      matchLabel: true,
      multi: false,
      showSpinner: false
    };
  },

  handleUserInput (inputPassword) {
    this.setState({inputPassword: inputPassword});
  },
  handleUserSelect (value) {
    this.setState({value: value});
  },
  updateOutputBox (data) {
    this.setState({hashedPassword: data.hash, showOutputBox: true});
  },
  onSubmit (e) {
    e.preventDefault();
    var data = {
      inputPassword: this.state.inputPassword,
      SALT_WORK_FACTOR: this.state.value,
    };
    this.setState({showSpinner: true});
    if (data.inputPassword === '') {
      return;
    }
    if (data.SALT_WORK_FACTOR === '') {
      data.SALT_WORK_FACTOR = 12;
    }
    var self = this;
    request
      .post('/api/inputPassword')
      .send(data)
      .type('json')
      .end(function(err, res){
        if (res.ok) {
          self.updateOutputBox(JSON.parse(res.text));
          self.setState({showSpinner: false});
        } else {
          console.error('/api/inputPassword', status, err.toString());
        }
      });
  },
  renderOutputBoxOrSpinner () {
    var ret;
    if (this.state.showSpinner)
        // ret = <Spinner spinnerName='circle' />;
      ret = <div />;
    else if (this.state.showOutputBox) {
      ret = <input className="form-control" value={this.state.hashedPassword} readOnly></input>;
    } else {
      ret = null;
    }
    return ret;
  },

    renderSelect () {
        let { options, value } = this.state;
        return (
            <select className="form-control" onSelect={this.handleUserSelect} required>
                {
                    SALT_WORK_FACTOR.map((opt) => {
                        return (<option value={opt.value}>{opt.label}</option>);
                    })
                }
            </select>
        );
    },

  render () {
    return(
      <div className="col-md-4 col-md-offset-1">
        <form onSubmit={this.onSubmit}>
            <div className="form-group">
                <label>Bcrypt</label>
                <InputBox
                    inputPassword={this.state.inputPassword}
                    placeholder='Enter a password to bcrypt'
                    onUserInput={this.handleUserInput}
                />
            </div>
            <div className="form-group">
                {this.renderSelect()}
            </div>
            <div className="form-group">
                <button className="btn btn-primary" type='submit'>Bcrypt</button>
            </div>
            <div className="form-group">
                {this.renderOutputBoxOrSpinner()}
            </div>
        </form>
      </div>
    );
  }
});
