import React from 'react'
import { Link } from 'react-router-dom'
export default function Country({name, flag,subregion, id}) {
    return (
        <div>
            <Link to={`/countries/${id}`}><h3>{name}</h3></Link>
            <img src={flag} alt='no se encontró imagen' />
            
        </div>
    )
}

//export default Country;
