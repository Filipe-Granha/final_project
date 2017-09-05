import React from 'react';

class Property extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="property">
            <h4 className="propertyLocation"> { this.props.location } </h4>
            { this.props.children }
            </div>
    );
  }
}

module.exports = Property;