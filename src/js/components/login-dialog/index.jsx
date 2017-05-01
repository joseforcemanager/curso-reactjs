import React from 'react';
import PropTypes from 'prop-types';
// Load SCSS
import './index.scss';

export default class LoginDialog extends React.Component {  
  static propTypes = {
    loginAction: PropTypes.func.isRequired,
  }

  login = () => {
      const {loginAction} = this.props;
      loginAction("joselito@pepe.com","nidecoña");
  }

  render() {
      return (
            <div className="dialog">
                <h2>Login</h2>
                <div>
                    <div className="row">Name: <input type="text"/></div>
                    <div className="row">Password: <input type="text"/></div>
                    <div className="row"><input type="submit" value="Submit" onClick={this.login}/></div>
                </div>
            </div>
      )
  }
}
