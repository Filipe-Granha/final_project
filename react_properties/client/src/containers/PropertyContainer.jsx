import React from 'react';
import PropertyForm from '../components/PropertyForm';
import PropertyList from '../components/PropertyList';

class PropertyContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      properties:[]
    };
    this.handlePropertyAdd = this.handlePropertyAdd.bind(this)
    this.handlePropertyDelete = this.handlePropertyDelete.bind(this)

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

handlePropertyDelete(id){
  const url = "http://localhost:5000/properties/" + id;
  const request = new XMLHttpRequest();
  request.open("DELETE", url)

  // request.onload = () => {
  //   if (request.status === 200) {
  //     const jsonString = request.responseText;
  //     const data = JSON.parse(jsonString);
  //     this.setState({properties: data})
  //   }
  // }
  request.send();
}

render(){
  return (
    <div>
        
        <PropertyForm onPropertyAdd={this.handlePropertyAdd}/>
        <PropertyList properties = {this.state.properties} onPropertyDelete = {this.handlePropertyDelete} />
        
    </div>
    );
  }
}

module.exports = PropertyContainer;