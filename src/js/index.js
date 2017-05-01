import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes  from 'prop-types';
// Load SCSS
import '../scss/app.scss';

class Button extends React.Component {
  
  static propTypes = {
    color: PropTypes.string.isRequired,
  }

  render() {
    return (
      <button style={{background: this.props.color}}>
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
        {this.props.text} <Button color={this.props.color}>Delete</Button>
      </div>
    );
  }
}

class MessageList extends React.Component {
  static propTypes = {
    messages: PropTypes.array.isRequired,
  }

  render() {
    const color = "red";
    const children = this.props.messages.map((message) =>
      <Message text={message.text} color={color} />
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
