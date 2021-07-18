import React from 'react'
import SearchBar from './SearchBar'
import { Link } from 'react-router-dom';
import { useSelect } from 'react';
import Countries from './Countries'
import style from './Home.module.css';

function Home() {
    return (
        <div >
            <Link to='/activity'>Add Activity</Link>
            <hr/>
            <SearchBar/>
            <Countries/>    
        </div>
    )
}

export default Home
