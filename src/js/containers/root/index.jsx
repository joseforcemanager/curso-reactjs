import React from 'react';
import LoginDialog from '../../components/login-dialog';
// Load SCSS
import './index.scss';
import 'es6-promise';


const loginAsync = (name,password) => {
  return new Promise(resolve => {
    setTimeout(() => {
      var re = /\S+@\S+\.\S+/;
      resolve(re.test(name));
      
    }, (Math.random() * 1000) + 1000); // 1-2 seconds delay
  });
}


class Main extends React.Component {
  state = {
    loginLoading:false,
    loginError:false,
    isLogin:false,
  }

  login = (name,password)=>{
    this.setState({loginLoading:true,loginError:false,isLogin:false});
    loginAsync(name,password)
      .then(success => this.setState({loginLoading:false,loginError:!success,isLogin:success}))
      .catch(error => this.setState({loginLoading:false,loginError:true,isLogin:false}));
  }

  render() {
    const {loginLoading,loginError,isLogin } = this.state;
    return (
      <div className="main">
        <LoginDialog loginAction = {this.login} loading={loginLoading} error={loginError}/>
      </div>
    );
  }
}

export default Main;