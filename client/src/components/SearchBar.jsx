import React from 'react'
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import Filters from './Filters/Filters'
import { getCountries, getCountriesByName, getCountryById } from '../actions/index'

function SearchBar() {
    const [country, setCountry] = useState('')
    const countries = useSelector(state => state.countriesLoaded)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getCountries())
    }, [])

    const handleChange = (e) => {
        setCountry(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(getCountriesByName(country))
      
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input placeholder="Search..." type="text" value={country} onChange={handleChange}></input>
                <button type="submit" value="Search" >BUSCAR</button>
            </form>
            <hr/>
            <Filters/>
        </div>
    )
}

export default SearchBar
