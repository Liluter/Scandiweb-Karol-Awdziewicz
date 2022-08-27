import React, { Component } from 'react'

function logProps(WrappedComponent) {
  return class extends React.Component {
    
    componentDidUpdate(prevProps) {
      console.log('Aktualne właściwości: ', this.props);
      console.log('Poprzednie właściwości: ', prevProps);
    }
    render() {
      // Opakowuje otrzymany komponent w kontener, bez jego zmieniania. Dobrze!
      return <WrappedComponent {...this.props} />;
    }
  }
}


class New extends Component {
  render() {
    return (
      <div>
        New.js
      </div>
    )
  }
}

export default logProps(New)
