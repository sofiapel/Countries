import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCountryById } from '../actions/index'
import style from './CountryDetail.module.css'
import Logo from '../img/mapa.png'


function CountryDetail(props) {
    const { countryId } = useParams();
    const country = useSelector(state => state.countryById)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getCountryById(countryId))
    }, [])

    function handleBack(e){
        props.history.push('/countries')

    }

    console.log(country && country.activities)

    return (
        <div className={style.container}>
            <div >
                <img className={style.mapp} onClick={handleBack} src={Logo} alt='image not found'/>
            </div>
            <div className={style.country}>
                <div>
                <h1>{country && country.name.replace(/\b\w/g, l => l.toUpperCase())}</h1>
                <h3>Capital: {country && country.capital}</h3>
                <h3>Population: { country && new Intl.NumberFormat().format(country.population)}</h3>
                <h3>Continent: {country && country.subregion}</h3>
                <h3>Area: {country && new Intl.NumberFormat().format(country.area)} km</h3>
                </div>
                <div>
                <img className={style.flag} src={country && country.flag} alt='no se encontró imagen' />
                </div>
            </div>
            <h2 className={style.activitiesTitle}>Activities</h2>
            {
                country && (country.activities.length > 0) ? 
                <div className={style.containerActivity}>{country && country.activities.map(a => (
                    <div key={a.id}>
                        <p>Name: { a.name}</p>
                        <p>Difficulty: {a.difficulty}/5</p>
                        <p>Duration: {a.duration}</p>
                        <p>Season: {a.season}</p>
                        <hr/>
                    </div>
                ))}</div> 
                : <p className={style.noActivities}>no activities yet</p>
            
        }
        </div>
    )
}

export default CountryDetail
