import React from 'react';

class Property extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="property">
            { this.props.children }
            <input type="submit" value="Edit"/>
            <input type="submit" value="Delete"/>
            </div>
    );
  }
}

module.exports = Property;