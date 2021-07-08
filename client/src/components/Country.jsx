import React from 'react'
//import { Link } from 'react-router-dom'
export default function Country({name, flag,subregion}) {
    return (
        <div>
            <h3>{name}</h3>
            <img src={flag} alt='no se encontró imagen' />
            
        </div>
    )
}

//export default Country;
