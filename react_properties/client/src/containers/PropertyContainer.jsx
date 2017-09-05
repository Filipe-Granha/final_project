import React from 'react';
import PropertyForm from '../components/PropertyForm';
import PropertyList from '../components/PropertyList';

class PropertyContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      properties:[]
    };
  }

componentDidMount() {
  const url = "http://localhost:5000/properties";
  const request = new XMLHttpRequest();
  request.open("GET", url)

  request.onload = () => {
    if (request.status === 200) {
      const jsonString = request.responseText;
      const data = JSON.parse(jsonString);
      this.setState({properties: data})
    }
  }
  request.send();
}

handlePropertyAdd(property){

}

handlePropertyEdit(property){

}

handlePropertyDelete(property){

}

  render(){
    return (
      <div>
        <h2>Property Management App</h2>
        <PropertyForm onPropertyAdd={this.handlePropertyAdd}/>
        <PropertyList properties = {this.state.properties}/>
      </div>
    );
  }
}

module.exports = PropertyContainer;