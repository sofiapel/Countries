import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getActivities } from '../../actions';
import { setPage } from '../../actions/index'
import style from './ActivityFilter.module.css'

function ActivityFilter() {
    const countries = useSelector(state => state.allCountries)
    const page = useSelector((state) => state.pages)
    const dispatch = useDispatch()
    

    function activities(){
        const activitiesName = countries.map(c =>{
            return c.activities && c.activities.map(a => a.name)
        })

        return [... new Set(activitiesName.toString().split(',').slice(0, activitiesName.length).filter(n => n !== '').map(n => n.charAt(0).toLowerCase() + n.slice(1)))]
    }

    const activitiesOptions = (activities().length !== 0) ? activities() : ['no activities yet']
    
    function Reset() {
        var dropDown = document.getElementById("filterContinent");
        dropDown.selectedIndex = 0;
    }

    const handleChange = (e) => {
        Reset()
        console.log(e.target.value)
        if(e.target.value !== ''){
            dispatch(getActivities(e.target.value))
        }else{
            return
        }
        dispatch(setPage(0))
    }
    return (
        <div>
            <form>
                <select className={style.select} onChange={handleChange} id='filterActivity'>
                    {
                        activitiesOptions[0] === 'no activities yet'?
                            <option disabled={true}>no activities yet</option>:
                            <option>activity</option>
                    }
                    {
                        activitiesOptions.map(a => <option value={a} key={a}>{a}</option>)

                    }
                </select>
            </form>   
        </div>
    )
}

export default ActivityFilter
