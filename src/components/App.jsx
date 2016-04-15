import React from 'react';

import models from '../store/App.js';

export default React.createClass({

    renderSocialProfiles() {
        return models.map((item, idx) => {
            if (idx == 0) {
                return (
                    <div key={idx} className="col-sm-1 col-md-offset-3">
                        <a href={item.href}><img src={item.src}/></a>
                    </div>
                );
            } else {
                return (
                    <div key={idx} className="col-sm-1">
                        <a href={item.href}><img src={item.src}/></a>
                    </div>
                );
            }
        });
    },

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="jumbotron">
                        <div className="container">
                            <h1> Hi, I am Kavit Shah. </h1>
                        </div>
                    </div>
                </div>
                <div style={{maxWidth:'50px', margin: 'auto', paddingBottom: '25px'}}>
                    GoToMeeting@Citrix
                </div>
                <div className="row">
                    {this.renderSocialProfiles()}
                </div>
                <hr/>
            </div>
        )
    }
})
