import React from 'react';

const logProps = (WrappedComponent) => {
  return class extends React.Component {
    componentWillReceiveProps(nextProps) {
      console.log('Current props: ', this.props);
      console.log('Next props: ', nextProps);
    }
    render() {
      return <WrappedComponent {...this.props} />;
    }
  }
}

export default logProps;