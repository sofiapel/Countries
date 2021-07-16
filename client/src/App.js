import './App.css';
import { Route/*Switch*/ } from "react-router-dom";
import React from 'react';
import LandingPage from './components/LandingPage';
import Countries from './components/Countries'
import SearchBar from './components/SearchBar'
import CountryDetail from './components/CountryDetail';
import AddActivity from './components/AddActivity';
import Home from './components/Home';
import './normApp.css'

function App() {
  return (
    <React.Fragment>
      <Route exact path='/' component={LandingPage}/>
      <Route exact path='/countries' component={Home}/>
      <Route path='/activity' component={AddActivity}/>
      <Route path='/countries/:countryId' component={CountryDetail}/>  
    </React.Fragment>

  );
}

export default App;
