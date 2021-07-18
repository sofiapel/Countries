import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getActivities, resetContinent } from '../../actions';
import { setPage } from '../../actions/index'

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
        e.target.value !== ''? 
            console.log('xq no funciona'):
            console.log('ternario hdp')
        if(e.target.value !== ''){
            console.log('ola')
            dispatch(getActivities(e.target.value))
        }else{
            return
        }
        //     dispatch(getActivities(e.target.value)) :
        //     null 
        dispatch(setPage(0))
    }

    console.log('OOOOOOOOOO', activitiesOptions[0])


    return (
        <div>
            <form>
                <select onChange={handleChange} id='filterActivity'>
                    {
                        activitiesOptions[0] === 'no activities yet'?
                            <option disabled={true}>no activities yet</option>:
                            <option>select an activity</option>
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
