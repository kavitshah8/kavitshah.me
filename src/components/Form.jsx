'use strict';

import React from 'react';
import VerificationForm from './VerificationForm.jsx';
import EncryptForm from './EncryptForm.jsx';

export default React.createClass({
  render () {
    return (
        <div>

            <nav className="navbar navbar-default">
              <div className="container-fluid">
                <div className="navbar-header">
                    <a className="navbar-brand" href="/"><span className="glyphicon glyphicon-home" aria-hidden="true"></span></a>
                </div>
                <ul className="nav navbar-nav">
                    <li className="active">
                        <p className="navbar-text"><a href="/tools/bcrypt-verify/" className="navbar-link">Bcrypt And Verify</a></p>
                    </li>
                </ul>
              </div>
            </nav>

            <div className="row">
                <EncryptForm />
                <VerificationForm />
            </div>
        </div>
    );
  }
});
