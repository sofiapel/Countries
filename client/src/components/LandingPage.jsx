import React from 'react'
import { Link } from 'react-router-dom';
import style from './LandingPage.module.css'


function LandingPage() {
    return (
        <div className={style.div}>
            <Link to='/countries'><button className={style.button}>Come in!</button></Link>
            
        </div>
    )
}

export default LandingPage
