import React from 'react';
import LoginDialog from '../../components/login-dialog';
// Load SCSS
import './index.scss';

class Main extends React.Component {
  render() {
    return (
      <div className="main">
        <LoginDialog/>
      </div>
    );
  }
}

export default Main;