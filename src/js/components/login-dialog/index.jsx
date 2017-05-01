import React from 'react';
import PropTypes from 'prop-types';
// Load SCSS
import './index.scss';

class LoginDialog extends React.Component {  
  render() {
      return (
            <div className="dialog">
                <h2>Login</h2>
                <div>
                    <div className="row">Name: <input type="text"/></div>
                    <div className="row">Password: <input type="text"/></div>
                    <div className="row"><input type="submit" value="Submit" /></div>
                </div>
            </div>
      )
  }
}

export default LoginDialog;