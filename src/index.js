import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const mainElement = document.getElementById("root");

const Message = (props) => <div className="message">{props.children}</div>
const element = (
  <div className="container">
    <Message>hello</Message>
    <Message>worlds</Message>
  </div>
)
// const element = <React.Fragment>
//   <span>hello</span>
//   <span>world</span>
// </React.Fragment>
ReactDOM.render(element,mainElement)
// console.log(mainElement)
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
