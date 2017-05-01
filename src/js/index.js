import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

// Load SCSS
import '../scss/app.scss';

class Main extends React.Component {
  state = {
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
    let {name,surname} = this.props;
    let {date} = this.state;
    surname = surname ? surname : '';
    let fullName = `${ name } ${ surname }`;
    return (
      <div className="main">
        <h1>Hola </h1>
        <p className="italic">{fullName}</p>
        <p >It is {date.toLocaleTimeString()}.</p>
      </div>
    );
  }
}

Main.propTypes = {
  name:PropTypes.string.isRequired,
  surname:PropTypes.string,
}

// Render it to DOM
ReactDOM.render(
  <Main name="Jose Maria" surname="Compañy Garcia"/>,
  document.getElementById('root')
);
