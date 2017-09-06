import React from 'react';

class Property extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="property">
            { this.props.children }
        </div>
    );
  }
}

module.exports = Property;