import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from "./hello";
import Todo from "./components/Todo";
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Todo/>
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log res ults (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// test for git
// reportWebVitals();
