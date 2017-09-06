import React from 'react';
import PropertyForm from '../components/PropertyForm';
import PropertyList from '../components/PropertyList';
import Property from '../components/Property'

class PropertyContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      properties:[]
    };
    this.handlePropertyAdd = this.handlePropertyAdd.bind(this)

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

handlePropertyAdd(anything){
  const headers = new Headers();
  headers.append('Content-Type', 'application/json');
  const options = {
    method: "POST",
    headers,
    body: JSON.stringify(anything)
  };

  const requestAdd = new Request("http://localhost:5000/properties",options);
  const promise = fetch(requestAdd);
  promise.then((response) => {
    if(response.status === 200){
      response.json().then((data) => {
        this.state.properties.unshift(data)
        this.setState({properties: this.state.properties})
      })
    }
  })
}
  

handlePropertyEdit(){

}

handlePropertyDelete(){

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