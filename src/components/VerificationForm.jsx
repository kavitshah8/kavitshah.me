'use strict';

import React from 'react';
import request from 'superagent';
// import Spinner from 'react-spinkit';

import InputBox from './InputBox.jsx';

const unicode = {
      correct: '\u2713',
      cross: '\u274c'
};

export default React.createClass({
  getInitialState () {
    return {
      inputPassword: '',
      hashedPassword: '',
      isVerificationBoxVisible: false,
      showSpinner: false
    };
  },
  handleUserInput (inputPassword) {
    this.setState({inputPassword: inputPassword});
  },
  handleHashedPassword (hashedPassword) {
    this.setState({hashedPassword: hashedPassword});
  },
  onSubmit (e) {
    e.preventDefault();
    var self = this;
    var data = {
      inputPassword: this.state.inputPassword,
      hashedPassword: this.state.hashedPassword
    };
    this.setState({showSpinner: true});
    request
      .post('/api/hashedPassword')
      .send(data)
      .type('json')
      .end(function(err, res) {
        if (res.ok) {
          var res = JSON.parse(res.text);
          var verified = res.verified;
          self.setState({showSpinner: false});
          if (verified) {
            self.setState({isVerified: true});
          } else {
            self.setState({isVerified: false});
          }
        } else {
          console.error('/api/hashedPassword', status, err.toString());
          self.setState({isVerificationBoxVisible: false});
        }
        self.setState({isVerificationBoxVisible: true});
      });
  },
  renderVerificationBox () {
      if (this.state.showSpinner) {
        // return (<Spinner spinnerName='circle' />);
        return (<div> </div>);
      }
      if (this.state.isVerified === undefined) {
        return;
      }
      if (this.state.isVerified) {
        return (
          <button className="btn btn-success" >
            { unicode.correct + ' ' + 'Match.' }
          </button>
        );
      }
      return (
        <button className="btn btn-danger">
          { unicode.cross + ' ' + 'No match.' }
        </button>
      );
  },
  render () {
    return (
      <div className="col-md-4 col-md-offset-1">
        <form onSubmit={this.onSubmit}>
            <div className="form-group">
                <label>Verify</label>
                <InputBox
                    inputPassword={this.state.inputPassword}
                    placeholder='Enter plain text to verify'
                    onUserInput={this.handleUserInput} />
            </div>
            <div className="form-group">
                <InputBox
                    inputPassword={this.state.hashedPassword}
                    placeholder='Enter hashed password to check against plain text'
                    onUserInput={this.handleHashedPassword} />
            </div>
            <div className="form-group">
                <button className="btn btn-primary" type='submit'>Verify</button>
            </div>
            <div className="form-group">
                {this.renderVerificationBox()}
            </div>
        </form>
      </div>
    );
  }
});
