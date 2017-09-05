import React from 'react';
import ReactDOM from 'react-dom';
import PropertyContainer from './containers/PropertyContainer.jsx';

window.onload = function () {
  ReactDOM.render(
    <PropertyContainer />,
    document.getElementById('app')
  );
};
