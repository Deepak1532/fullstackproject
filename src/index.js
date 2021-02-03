import React from 'react';

import ReactDOM from 'react-dom';

import './form.css';
import './signup.css'
import './index.css';
import './contactus.css'
// import './productcard.css';
// import App from './App';
// import Navbar from './components/layouts/Navbar';
// import Login from './components/layouts/Login';
import reportWebVitals from './reportWebVitals';
import Routes from './Routes';

ReactDOM.render(
  <React.StrictMode>
    <Routes/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// filters
// const numbers=[5,6,10,12,15]

// const newNumbers=numbers.filter(x=> x>6)

// console.log(newNumbers)

// find
// const numbers=[1,2,4,5,6,7,8]
// const newNumbers=numbers.find(x=>x>6)
// console.log(newNumbers)

// reduce
// const numbers=[1,2,4,5,6,7,8]
// const newNumbers=numbers.reduce(function(x,y){
//   console.log('currentvalue'+y)
//   console.log('accumulator'+x)
//   return x+y
// })
 
// console.log(newNumbers)

// conditional rendering with ternary operator and using AND logical gate