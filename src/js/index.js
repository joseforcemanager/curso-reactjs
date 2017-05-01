import React from 'react';
import ReactDOM from 'react-dom';

// Load SCSS
import '../scss/app.scss';

class Main extends React.Component {
  state={
    date:new Date(),
  }

  shouldComponentUpdate(nextProps, nextState){
    //return true;
    //return false;
    let {date} = nextState;
    return date.getSeconds()%10===0;
  }

  componentDidMount(){
    setInterval(this.tick, 1000);
  }

  tick = () =>{
    this.setState({date:new Date()});
  }

  render() {
    let {name} = this.props;
    let {date} = this.state;
    return (
      <div className="main">
        <h1>Hola </h1>
        <p className="italic">{name}</p>
        <p >It is {date.toLocaleTimeString()}.</p>
      </div>
    );
  }
}

// Render it to DOM
ReactDOM.render(
  <Main name="Jose Maria Compañy Garcia"/>,
  document.getElementById('root')
);
