import React from 'react'
import SearchBar from './SearchBar'
import { Link } from 'react-router-dom';
import Countries from './Countries'
import style from './Home.module.css';
 
function Home() {
    return (
        <div >
            <div className={style.firstContainer}>
                <Link to='/activity'>
                    <button className={style.a}>
                        <span>Add Activity</span>
                    </button>
                </Link>
                <SearchBar/>
            </div>
            <div className={style.secondContainer}>
                <div><Countries/></div>
            </div>    
        </div>
    )
}

export default Home
