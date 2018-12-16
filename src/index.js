import React from 'react';
import ReactDOM from 'react-dom';

import SimpleComponent from './components/SimpleComponent';
import SimplerComponent from './components/SimplerComponent';


const changeMood = () => {
  console.log('hi')
}
 
ReactDOM.render(
  <div>
    <SimpleComponent  />
    <SimplerComponent handleClick={changeMood} />
  </div>,
  document.getElementById('root')
);