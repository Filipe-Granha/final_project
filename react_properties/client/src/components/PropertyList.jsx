import React from 'react';
import Property from './Property.jsx'

class PropertyList extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const dataList = this.props.properties.map(function(property){
      return(
        <Property key = {property.id}>
        
        <div className="propertiesBody">
        <table className="tableBody">
        <thead className="tableHead-head">
          <tr>
            <th>Location</th>
            <th>Rooms</th> 
            <th>Council Tax</th>
            <th>Rent</th>
          </tr>
        </thead>
        <tbody className="tableBody-body">
          <tr>
            <td>{property.location}</td>
            <td>{property.rooms}</td> 
            <td>£{property.counciltax}</td>
            <td>£{property.rent}</td>
          </tr>
        </tbody>
        </table>
        </div>
        </Property>
        );
    });
    return (
      <div className="propertiesHead">
        { dataList }
      </div>
    );
  }
}

module.exports = PropertyList;