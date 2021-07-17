import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCountries, getCountryById } from '../actions/index'


function CountryDetail() {
    const { countryId } = useParams();
    const country = useSelector(state => state.countryById)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getCountryById(countryId))
    }, [])

    console.log(country && country.activities)

    return (
        <div>
            <h1>{country && country.name}</h1>
            <h3>capital: {country && country.capital}</h3>
            <h3>population: { country && country.population}</h3>
            <h3>continent: {country && country.subregion}</h3>
            <h2>Activities</h2>
            {
                country && (country.activities.length > 0) ? 
                <h3>{country && country.activities.map(a => (
                    <div key={a.id}>
                        <p>name: { a.name}</p>
                        <p>difficulty: {a.difficulty}/5</p>
                        <p>duration: {a.duration}</p>
                        <p>season: {a.season}</p>
                        <hr/>

                    </div>
                ))}</h3> 
                : <h3>no hay activities </h3>
            
        }
        </div>
    )
}

export default CountryDetail
