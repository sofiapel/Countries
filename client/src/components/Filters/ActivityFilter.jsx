import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getActivities, orderAsc } from '../../actions';

function ActivityFilter() {
    const [activity, setActivity] = useState('')
    const countries = useSelector(state => state.countriesLoaded)
    const dispatch = useDispatch()

    const handleChange = (e) => {
        setActivity(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(getActivities(activity))
        setActivity('')
    }
    //console.log('dfdsffds', countries)


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input value={activity} onChange={handleChange}/> 
                <button type='submit'>Ok</button>
            </form>   
        </div>
    )
}

export default ActivityFilter
