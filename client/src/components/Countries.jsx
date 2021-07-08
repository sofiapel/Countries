import React from 'react'
import { useState,useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { getCountries } from '../actions/index'
import Country from './Country.jsx'

function Countries() {
    const [country, setCountry] = useState('')
    const countries = useSelector(state => state.countriesLoaded)
    const dispatch = useDispatch();
    useEffect(() => {
        console.log('Funca?')
        dispatch(getCountries(1))
    }, [])

    function handleSubmit(e) {
        e.preventDefault();
        //dispatch(getCountries(0))
    }
    function handleChange(e){
        setCountry(e.target.value)
    }    
    //console.log(countries)
    return (
        <div>
            <form onSubmit={(e)=>handleSubmit(e)}>
                <input
                type='text'
                value={country}
                onChange={(e)=>handleChange(e)}

                />
            </form>
            prosimamente countries
            {
                //countries.map(c => (<Country/>))
                countries && countries.map(c => (<Country key={c.id} name={c.name} flag={c.flag} subregion={c.subregion}/>))
                //<Country/>
                //console.log(countries)
                
            }
        </div>
    )
}

export default Countries
