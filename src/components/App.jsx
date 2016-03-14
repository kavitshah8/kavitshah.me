import React from 'react';

export default React.createClass({
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
            <div className="col-sm-1 col-sm-offset-3">
                <a href="https://github.com/kavitshah8">
                <img src="https://accumulo.apache.org/images/GitHub-Mark-32px.png" />
                </a>
            </div>
            <div className="col-sm-1">
                <a href="https://www.linkedin.com/pub/kavit-shah/20/4b0/946">
                <img src="http://career.opcd.wfu.edu/files/2011/06/LinkedIn-Image.png" />
                </a>
            </div>
            <div className="col-sm-1">
                <a href="https://developer.mozilla.org/en-US/profiles/kavitshah8">
                <img src="https://developer.cdn.mozilla.net/media/img/favicon32.png" />
                </a>
            </div>
            <div className="col-sm-1">
                <a href="mailto:kavit.shah8@gmail.com?Subject=Hello from Web!">
                <img src="assets/images/email.png" />
                </a>
            </div>
            <div className="col-sm-1">
                <a href="/tools/bcrypt-verify">
                <img src="https://d262ilb51hltx0.cloudfront.net/fit/c/32/32/1*T1b83o47E1AI0lTpwzHVvA.png" />
                </a>
            </div>
            <div className="col-sm-1">
                <a href="http://javascript.tutorialhorizon.com/author/kavit/">
                <img src="http://www.alternativepedia.com/3_icons/javascript-399.jpg" />
                </a>
            </div>
            <div className="col-sm-1">
                <a href="http://tips.tutorialhorizon.com/author/algos-in-js/">
                <img src="http://icons.iconarchive.com/icons/dtafalonso/ios8/32/Tips-icon.png" />
                </a>
            </div>
        </div>
        </div>
    )
  }
})
