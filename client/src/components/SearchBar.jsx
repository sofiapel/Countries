import React from 'react'
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import Filters from './Filters/Filters'
import { getCountries, getCountriesByName, setPage } from '../actions/index'
import { BiSearchAlt } from 'react-icons/bi';
import style from './SearchBar.module.css'

function SearchBar() {
    const [country, setCountry] = useState('')
    const page = useSelector((state) => state.pages)
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
        dispatch(getCountriesByName(country.trim()))
        dispatch(setPage(0))
    }

    return (

        <>
 
            <div >
                <form onSubmit={handleSubmit} className={style.container}>
                    <input 
                        className={style.searchTerm} 
                        placeholder="Search a country..." 
                        type="text" 
                        value={country} 
                        onChange={handleChange}
                    />
                    <button 
                        className={style.searchButton} 
                        type="submit"   
                        value="Search">
                            <BiSearchAlt/>
                    </button>
                </form>
            </div>
            <Filters/>
        </>
    )
}

export default SearchBar
