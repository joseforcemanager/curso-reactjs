import React from 'react';
import PropTypes from 'prop-types';
// Load SCSS
import './index.scss';

export default class LoginDialog extends React.Component {  
  static propTypes = {
    loginAction: PropTypes.func.isRequired,
    loading:PropTypes.bool,
    error:PropTypes.string,
  }

  login = () => {
      const {loginAction} = this.props;
      const {inputName,inputPassword} = this;
      loginAction(inputName.value,inputPassword.value);
  }

  renderForm() {
      const{error}=this.props;
      return (
            <div className="dialog">
                <h2>Login</h2>
                <div>
                    <div className="row">Name: <input type="text" ref={(e)=>this.inputName = e}/></div>
                    <div className="row">Password: <input type="text" ref={(e)=>this.inputPassword = e}/></div>
                    <div className="row"><input type="submit" value="Submit" onClick={this.login}/></div>
                    <div className="row">{error}</div>
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

  render() {
      const {loading} = this.props;
      return loading?this.renderLoading():this.renderForm();
  }
}
