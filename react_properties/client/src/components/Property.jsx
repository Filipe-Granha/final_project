import React from 'react';
import PropertyContainer from '../containers/PropertyContainer.jsx'

class Property extends React.Component {
  constructor(props) {
    super(props);
    this.handlePropertyDelete = this.handlePropertyDelete.bind(this) 
  }

  handleEdit(event) {
    event.preventDefault();
  }

  handlePropertyDelete(id){
    const url = "http://localhost:5000/properties/id";
    const request = new XMLHttpRequest();
    request.open("DELETE", url)
    request.send();
  }

  render() {
    return (
      <div>
      <button className='buttondelete' onClick={this.handlePropertyDelete}>Delete</button>
      <button className='buttonedit' >Edit</button>
      { this.props.children }
      </div>
        
    );
  }
}

module.exports = Property;