import './App.css';
import { Route } from "react-router-dom";
import React from 'react';
import Home from './components/Home';
import Countries from './components/Countries'
import './normApp.css'

function App() {
  return (
    <React.Fragment>
      <Route  exact path='/' component={Home}/>
      <Route path='/countries' component={Countries}/>
    </React.Fragment>

  );
}

export default App;
