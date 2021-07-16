import React, { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { orderAsc, orderDsc, orderPop } from '../../actions/index'

function AscDscPop() {
    const countries = useSelector(state => state.countriesLoaded)
    const [value, setValue] = useState('')
    const dispatch = useDispatch()

    const handleChange = (e) => {
        setValue(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        //setValue(e.target.value)
        console.log('target',e.target.value)
        console.log('eeeee',value)
        value !== 'population'? value == 'asc'? dispatch(orderAsc()) : dispatch(orderDsc()) : dispatch(orderPop())
        setValue('')
        console.log(countries)
    }

    return (
        <div>
            <form onSubmit={handleSubmit} >
                <select value={value} onChange={handleChange}>
                    <option defaultValue=''></option>
                    <option value='asc'>A-Z</option>
                    <option value='dsc'>Z-A</option>
                    <option value='population'>Population</option>
                </select>
                <button type='submit'>OK</button>
            </form>


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

export default AscDscPop
