import React from 'react'
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import Filters from './Filters/Filters'
import { getCountries, getCountriesByName, setPage } from '../actions/index'

function SearchBar() {
    const [country, setCountry] = useState('')
    const page = useSelector((state) => state.pages)
    const countries = useSelector(state => state.countriesLoaded)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getCountries())
        //dispatch(setPage(0))
    }, [])

    const handleChange = (e) => {
        setCountry(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(getCountriesByName(country.trim()))
        dispatch(setPage(0))
        console.log('aaaaaaaaa',page)
      
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
