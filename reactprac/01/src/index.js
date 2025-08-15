import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App'; //commenting this out to implement another use case of usestate
import reportWebVitals from './reportWebVitals';
import Data from "./Data"
import Form from "./Form"
import Useeffect from "./Useeffect"
import Fetch from "./Fetch"
import Multireturn from "./Multireturn"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {// commented app out so as to not make it interfere with second example
    /* <App /> */} 
    {/* <Data/> */}
    {/* {<Form/>} this was for handling multiple use states*/  }
    {/* {<Useeffect/>} covered useState and useEffect */}
    {/* {<Fetch/>} used api to getch data from a site then return it and used use state and stuff to display it*/}
    <Multireturn/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
