import React from 'react';
import PropTypes from 'prop-types';
// Load SCSS
import './index.scss';

export default class LoginDialog extends React.Component {  
  static propTypes = {
    loginAction: PropTypes.func.isRequired,
    loading:PropTypes.bool,
    error:PropTypes.bool,
  }

  login = () => {
      const {loginAction} = this.props;
      loginAction("joselito@pepe.com","nidecoña");
  }

  renderForm() {
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

  renderLoading() {
      return (
            <div className="dialog">
                <h2>Login</h2>
                <div>
                   Loading...
                </div>
            </div>
      )
  }

  renderError() {
      return (
            <div className="dialog">
                <h2>Login</h2>
                <div>
                    Error
                </div>
            </div>
      )
  }

  render() {
      const {loading,error} = this.props;
      return loading?this.renderLoading():error?this.renderError():this.renderForm();
  }
}
