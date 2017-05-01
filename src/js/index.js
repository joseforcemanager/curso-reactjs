import React from 'react';
import ReactDOM from 'react-dom';

// Load SCSS
import '../scss/app.scss';

class Main extends React.Component {
  state={
    date:new Date().toLocaleTimeString(),
  }

  componentDidMount(){
    setInterval(this.tick, 1000);
  }

  tick = () =>{
    this.setState({date:new Date().toLocaleTimeString()});
  }

  render() {
    let {name} = this.props;
    let {date} = this.state;
    return (
      <div className="main">
        <h1>Hola </h1>
        <p className="italic">{name}</p>
        <p >It is {date}.</p>
      </div>
    );
  }
}

// Render it to DOM
ReactDOM.render(
  <Main name="Jose Maria Compañy Garcia"/>,
  document.getElementById('root')
);
