import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes  from 'prop-types';
// Load SCSS
import '../scss/app.scss';

/*
constructor(props, context)
componentWillReceiveProps(nextProps, nextContext)
shouldComponentUpdate(nextProps, nextState, nextContext)
componentWillUpdate(nextProps, nextState, nextContext)
componentDidUpdate(prevProps, prevState, prevContext)
*/

class Button extends React.Component {
  static contextTypes = {
    color: PropTypes.string
  };

  render() {
    return (
      <button style={{background: this.context.color}}>
        {this.props.children}
      </button>
    );
  }
}

class Message extends React.Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
  }

  render() {
    return (
      <div>
        {this.props.text} <Button>Delete</Button>
      </div>
    );
  }
}

class MessageList extends React.Component {
  static propTypes = {
    messages: PropTypes.array.isRequired,
  };

  static childContextTypes = {
    color: PropTypes.string
  };

  getChildContext() {
    return {color: "yellow"};
  }

  render() {
    const children = this.props.messages.map((message,index) =>
      <Message key={index} text={message.text}/>
    );
    return <div>{children}</div>;
  }
}

const messages = [{text:"uno"},{text:"dos"},{text:"tres"},{text:"cuatro"},{text:"cinco"},{text:"seis"}];

// Render it to DOM
ReactDOM.render(
  <MessageList messages={messages}/>,
  document.getElementById('root')
);
