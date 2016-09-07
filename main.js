import React from 'react';
import ReactDOM from 'react-dom';
import { Hello } from 'src/sample'; // This is tricky. See jspm.config.js packages for more information. Defines entry point and path configuration

let container = document.getElementById('container');
export let component = ReactDOM.render(React.createElement(Hello), container);
