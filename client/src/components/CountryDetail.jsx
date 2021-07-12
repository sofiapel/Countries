import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCountryById } from '../actions/index'


function CountryDetail() {
    const { countryId } = useParams();
    const country = useSelector(state => state.countryById)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getCountryById(countryId))
    }, [])

    console.log('eeeee',country)

    return (
        <div>
            <h1>aaaaaaaaaaaaaaaaaa</h1>
            <h1>{country && country.name}</h1>
            <h3>{country && country.capital}</h3>
            <h3>{ country && country.population}</h3>
            <h3>{country && country.subregion}</h3>
        </div>
    )
}

export default CountryDetail
