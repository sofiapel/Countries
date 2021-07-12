import React from 'react'
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { getCountries, getCountriesByName, getCountryById } from '../actions/index'
import Countries from './Countries'
function SearchBar() {
    const [country, setCountry] = useState('')
    const countries = useSelector(state => state.countriesLoaded)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getCountries())
    }, [])

    // function handleSubmit(e){
    //     console.log('aaaaaaaaaa')
    //     e.prevent.default()
        
    // }
    const handleChange = (e) => {
        setCountry(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(getCountriesByName(country))
      
    }
    console.log('eeeeeeeeeee')

    return (
        <div>
            {/*<label>Buscar:</label>
            <form onSubmit ={(e) => handleSubmit(e)}>
                <input
                    placeholder='Ingresa el nombre de un país'
                    type='text'
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                />
            <button type='submit'>Search</button>
            </form>*/}
            <form onSubmit={handleSubmit}>
                <input placeholder="Search..." type="text" value={country} onChange={handleChange}></input>
                <button type="submit" value="Search" >BUSCAR</button>
            </form>
            <hr/>
            {/* Los filtros tendrían q ir en otro componente?? */}
            <label>Filtrar por continente:</label>
            <select>
                <option>América</option>
                <option>Europa</option>
                <option>Asia</option>
                <option>África</option>
                <option>Oceania</option>
            </select>
            <label>Filtrar por actividad:</label>
            <input />
            <label>Ordenar de manera:</label>
            <select>
                <option>ascendente</option>
                <option>descendente</option>
                <option>por poblacion</option>
            </select>
            <Countries countries ={countries}/>    
        </div>
    )
}

export default SearchBar
