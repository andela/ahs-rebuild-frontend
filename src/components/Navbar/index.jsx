import React, { Component, Fragment } from 'react';
import './Navbar.scss';
import logo from '../../assets/images/andels.png';
import slackIcon from '../../assets/images/slack-logo-icon.svg';
import feedbackIcon from '../../assets/images/feedback.svg';

class Navbar extends Component {
  state = {
    language: "javascript"
  };

  handleChangeLanguage = event => {
    event.preventDefault();
    this.setState({ language: event.target.id });
  };

  render() {
    const { language } = this.state;

    const javascriptActive = language === "javascript" ? "-active" : "";
    const pythonActive = language === "python" ? "-active" : "";
    return (
      <Fragment>
        <div className="navbar-parent">
          <div className="navbar-parent-logo">
            <img src={logo} alt="andela-logo" id="navbar-logo" />
            <span id="navbar-logo-title">Andela Home Study</span>
          </div>
          <div className="navbar-parent-spacer" />
          <div className="navbar-parent-languages">
            <div
              type="button"
              id="javascript"
              onClick={this.handleChangeLanguage}
              className={`navbar-parent-languages-js${javascriptActive}`}
            >
              Javascript
            </div>
            <div
              role="button"
              id="python"
              onClick={this.handleChangeLanguage}
              className={`navbar-parent-languages-python${pythonActive}`}
            >
              Python
            </div>
          </div>
          <div className="navbar-parent-links">
            <div className="navbar-parent-links-slack">
              <div className="navbar-parent-links-slack-feedback">
                <div className="navbar-parent-links-slack-feedback-inner">
                  <img id="feedback-logo" src={feedbackIcon} alt="feedback" />
                </div>
              </div>
            </div>
            <div className="navbar-parent-links-slack">
              <img id="slack-logo" src={slackIcon} alt="slack" />
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Navbar;
