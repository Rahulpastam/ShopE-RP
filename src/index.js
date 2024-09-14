import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createContext, useState } from 'react';

export const Context = createContext({loggedin: false});

const AppWrapper = () => {
  const [loggedin, setLoggedin] = useState(false);
  const [user, setUser] = useState("");

  return(
    <Context.Provider 
      value={{loggedin, setLoggedin, user, setUser}}
    >
      <App />
    </Context.Provider>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppWrapper/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
