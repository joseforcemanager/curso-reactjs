import React from 'react';
import LoginDialog from '../../components/login-dialog';
// Load SCSS
import './index.scss';

class Main extends React.Component {

  login = (name,password)=>{
    debugger
  }


  render() {
    return (
      <div className="main">
        <LoginDialog loginAction = {this.login}/>
      </div>
    );
  }
}

export default Main;