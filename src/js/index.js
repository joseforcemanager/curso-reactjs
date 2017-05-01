import React from 'react';
import ReactDOM from 'react-dom';

// Load SCSS
import '../scss/app.scss';

class Main extends React.Component {
  render() {
    let {name} = this.props;
    return (
      <div className="main">
        <h1>Hola </h1>
        <p className="italic">{name}</p>
        <p >It is {new Date().toLocaleTimeString()}.</p>
      </div>
    );
  }
}

// Render it to DOM
ReactDOM.render(
  <Main name="Jose Maria Compañy Garcia"/>,
  document.getElementById('root')
);
