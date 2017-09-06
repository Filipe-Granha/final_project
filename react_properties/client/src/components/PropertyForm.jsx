import React from 'react';

class PropertyForm extends React.Component {
  constructor(props){
    super(props);
    this.handleLocationChange = this.handleLocationChange.bind(this)
    this.handleRoomsChange = this.handleRoomsChange.bind(this)
    this.handleCounciltaxChange = this.handleCounciltaxChange.bind(this)
    this.handleRentChange = this.handleRentChange.bind(this)
    this.handleAdd = this.handleAdd.bind(this)
    this.state = {
      location:"",
      rooms:"",
      counciltax:"",
      rent:""
    };
  }

handleLocationChange(event) {
  this.setState({location: event.target.value})
}

handleRoomsChange(event){
  this.setState({rooms: event.target.value})
}

handleCounciltaxChange(event){
  this.setState({counciltax: event.target.value})
}

handleRentChange(event) {
  this.setState({rent: event.target.value})
}

handleAdd(event){
  event.preventDefault();
  const location = this.state.location.trim();
  const rooms = this.state.rooms.trim();
  const counciltax = this.state.counciltax.trim();
  const rent = this.state.rent.trim();
  if(!location || !rooms || !counciltax || !rent){
    return;
  }
  this.props.onPropertyAdd({location:location, rooms:rooms, counciltax:counciltax, rent:rent}) // adds to list 
  this.setState({location:"", rooms:"", counciltax:"", rent:""}) // sets form back to empty
}

  render(){
    return (
      <form className = "propertyForm" onSubmit = {this.handleAdd}>
      <input
      type="text"
      placeholder="Location"
      value={this.state.location}
      onChange={this.handleLocationChange}
      />
      <input
      type="text"
      placeholder="Number of Rooms"
      value={this.state.rooms}
      onChange={this.handleRoomsChange}
      />
      <input
      type="text"
      placeholder="Council Tax"
      value={this.state.counciltax}
      onChange={this.handleCounciltaxChange}
      />
      <input
      type="text"
      placeholder="Rent"
      value={this.state.rent}
      onChange={this.handleRentChange}
      />
      <input type="submit" value="Add New Property"/>
      </form>
    );
  }
}

module.exports = PropertyForm;
