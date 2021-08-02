import React from 'react'
import { Link } from 'react-router-dom';
import style from './LandingPage.module.css'
import gif from '../img/world.gif'
import { RiMapPinLine } from 'react-icons/ri'
import { IconContext } from 'react-icons/lib';

 
function LandingPage() {
    return (
        <>
        <div>
            <img className={style.img} src={gif} alt="This will display an animated GIF" />
        </div>
        <div>
            <Link to='/countries'>
                <button className={style.button}>
                    <IconContext.Provider value={{ size:'2rem'}}>
                        <RiMapPinLine/>
                    </IconContext.Provider>
                </button>
            </Link>           
        </div>
        </>
    )
}

export default LandingPage
