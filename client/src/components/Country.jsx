import React from 'react'
import { Link } from 'react-router-dom'
import style from './Country.module.css'

export default function Country({name, flag,subregion, id}) {
    return (
        <div className={style.container}>
            <Link to={`/countries/${id}`}>
                <h3 className={style.title}>{name}</h3>
            
            <img className={style.img} src={flag} alt='no se encontró imagen' />
            <div style={{marginLeft: '15%',marginBottom: '5%'}}>{subregion}</div>
            </Link>
        </div>
    )
}

