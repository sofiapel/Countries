import React, { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { orderAsc, orderDsc, orderPop } from '../../actions/index'
import AscDscPop from './AscDscPop'
import ByContinent from './ByContinent'
import ActivityFilter from './ActivityFilter'

function Filters() {
    // const countries = useSelector(state => state.countriesLoaded)
    // const [value, setValue] = useState('')
    // const dispatch = useDispatch()

    // const handleChange = (e) => {
    //     setValue(e.target.value)
    // }
    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     console.log(value)
    //     value !== 'population'? value == 'asc'? dispatch(orderAsc()) : dispatch(orderDsc()) : dispatch(orderPop())
    //     setValue('')
    //     console.log(countries)
    // }


    return (
        <div>
            <label>Order by:</label>
            <AscDscPop/>
            <ByContinent/>
            <ActivityFilter/>

            {/* <label>Order by:</label>
            <form onSubmit={handleSubmit}>
                <select value={value} onChange={handleChange}>
                    <option defaultValue=''></option>
                    <option value='asc'>A-Z</option>
                    <option value='dsc'>Z-A</option>
                    <option value='population'>Population</option>
                </select>
                <button type='submit'>OK</button>
            </form> */}


            {/*<label>Filtrar por continente:</label>
            <select>
                <option>América</option>
                <option>Europa</option>
                <option>Asia</option>
                <option>África</option>
                <option>Oceania</option>
            </select>
            <label>Filtrar por actividad:</label>
            <input />*/}
           
            
        </div>
    )
}

export default Filters
