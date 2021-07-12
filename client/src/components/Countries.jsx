import React from 'react'
import { useState,useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { getCountries } from '../actions/index'
import Country from './Country.jsx'

function Countries({countries}) {
    const [page, setPage] = useState(0)
    function handleClick(number){
        if((page > 0 && number == -1) || (page < 9 && number == 1))
        setPage(page + number)
    }

    return (
        <div>
            <hr/>
            <button onClick={() => handleClick(-1)}>Prev</button>
            <button onClick={() => handleClick(1)}>Next</button>
            {
                countries && 
                countries.slice(page*10, page*10 + 10).map(c => (
                    <Country 
                        key={c.id} 
                        name={c.name} 
                        flag={c.flag} 
                        subregion={c.subregion} 
                        id={c.id}
                />))
            }
        </div>
    )
}

export default Countries
