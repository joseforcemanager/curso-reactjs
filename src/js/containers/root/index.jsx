import React from 'react';
import LoginDialog from '../../components/login-dialog';
// Load SCSS
import './index.scss';
import 'es6-promise';


const loginAsync = (name,password) => {
  return new Promise(resolve => {
    setTimeout(() => {
      var re = /\S+@\S+\.\S+/;
      let error = "";
      let result = false;
      if(re.test(name)){
        result = true;
      }else{
        result = false;
        error = "El usuario es incorrecto";
      }
      resolve({success:result,error:error});
      
    }, (Math.random() * 1000) + 1000); // 1-2 seconds delay
  });
}

const LoggedContainer = ({name}) =>(
  <div> Bienvenido {name}</div>
);

class Main extends React.Component {
  state = {
    loginLoading:false,
    loginError:"",
    isLogin:false,
  }

  login = (name,password)=>{
    this.setState({loginLoading:true,loginError:"",isLogin:false});
    loginAsync(name,password)
      .then(result => this.setState({loginLoading:false,loginError:result.error,isLogin:result.success,name:name}))
      .catch(error => this.setState({loginLoading:false,loginError:"",isLogin:false}));
  }

  renderLogin = ()=>{
    const {loginLoading,loginError,isLogin } = this.state;
    return (
      <div className="main">
        <LoginDialog loginAction = {this.login} loading={loginLoading} error={loginError}/>
      </div>
    );
  }

  renderContainer = ()=>{
    const {loginLoading,loginError,isLogin,name } = this.state;
    return (
      <LoggedContainer name={name}/>
    );
  }

  render() {
    const {isLogin } = this.state;
    return isLogin?this.renderContainer():this.renderLogin();
  }
}

export default Main;