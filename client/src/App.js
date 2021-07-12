import './App.css';
import { Route/*Switch*/ } from "react-router-dom";
import React from 'react';
import LandingPage from './components/LandingPage';
import Countries from './components/Countries'
import SearchBar from './components/SearchBar'
import CountryDetail from './components/CountryDetail';
import './normApp.css'

function App() {
  return (
    <React.Fragment>
      <Route  exact path='/' component={LandingPage}/>
      <Route exact path='/countries' component={SearchBar}/>
      {/*<Route exact path='/countries' component={Countries}/>*/}
      <Route path='/countries/:countryId' component={CountryDetail}/>
      
    </React.Fragment>

  );
}

export default App;
