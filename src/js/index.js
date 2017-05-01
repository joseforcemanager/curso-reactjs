import React from 'react';
import ReactDOM from 'react-dom';

// Load SCSS
import '../scss/app.scss';

class Main extends React.Component {
  render() {
    return (
      <div className="main">
        <h1>Hola mundo</h1>
      </div>
    );
  }
}

// Render it to DOM
ReactDOM.render(
  <Main/>,
  document.getElementById('root')
);
