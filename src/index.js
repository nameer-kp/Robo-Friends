import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './Card.jsx'
import reportWebVitals from './reportWebVitals';
import {robots} from './robots';

ReactDOM.render(
  <div>
    <Card name={robots[0].name} id ={robots[0].id} email ={robots[0].email}/>
    <Card name={robots[1].name} id ={robots[1].id} email ={robots[1].email}/>
    <Card name={robots[2].name} id ={robots[2].id} email ={robots[2].email}/>
    <Card name={robots[3].name} id ={robots[3].id} email ={robots[3].email}/>


  </div>
  
  ,document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
