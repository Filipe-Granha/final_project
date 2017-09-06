import React from 'react';
///import PropertyContainer from '../containers/PropertyContainer.jsx'

class Property extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this) 
  }

  handleEdit(event) {
    event.preventDefault();
  }

  handleDelete() {
    this.props.onPropertyDelete()
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