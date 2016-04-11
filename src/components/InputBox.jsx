'use strict';

import React from 'react';

export default React.createClass({
    handleChange () {
        this.props.onUserInput(this.refs.inputPassword.value);
    },
    componentDidMount () {
      if (this.props.autoFocus) {
        this.refs.inputPassword.focus();
      }
    },
    render () {
      return (
        <input
          type='text'
          value={this.props.inputPassword}
          placeholder={this.props.placeholder}
          ref='inputPassword'
          className='form-control'
          onChange={this.handleChange}
          required />
      );
    }
});
