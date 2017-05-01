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

const Button = ({children}, context)=>(
  <button style={{background: context.color}}>
      {children}
  </button>
);

Button.contextTypes = {
  color: PropTypes.string,
};



const Message = ({text})=>(
    <div>
        {text} <Button>Delete</Button>
    </div>
);

Message.propTypes = {
  text: PropTypes.string.isRequired,
};



/*Este no porque no se puede setter el contexto desde una componente funcional*/
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
