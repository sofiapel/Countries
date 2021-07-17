import React from 'react'
import { useState,useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { getCountries, setPage } from '../actions/index'
import Country from './Country.jsx'

function Countries() {
    //const [page, setPage] = useState(0)
    const page = useSelector((state) => state.pages)
    const countries = useSelector(state => state.countriesLoaded)
    const dispatch = useDispatch()
    // useEffect(() => {
    //     dispatch(setPage(0))
    // },[])
    console.log(page)
    function handleClick(number){
        const limitSup = Number.isInteger(countries.length/10) ? 
            Math.floor(countries.length/10)-1 :
            Math.floor(countries.length/10)
        if((page > 0 && number == -1) || (page < limitSup && number == 1))
        dispatch(setPage(page + number))
    }

    return (
        <div>
            <hr/>
            { page >0 ? <button onClick={() => handleClick(-1)}>Prev</button>: null}
            <button onClick={() => handleClick(1)}>Next</button>
            {
                (countries[0] && countries[0].msg)?<h3>no country was founded</h3>:
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
