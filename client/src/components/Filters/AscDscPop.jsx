import React, { useState,useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { orderAsc, orderDsc, orderPop, resetContinent, setPage } from '../../actions/index'
import style from './AscDscPop.module.css'

function AscDscPop() {
    const countries = useSelector(state => state.countriesLoaded)
    //const [value, setValue] = useState('')
    const dispatch = useDispatch()
    
    const handleChange = (e) => {
        e.target.value !== 'population'? 
            e.target.value == 'asc'? 
                dispatch(orderAsc()) : 
                dispatch(orderDsc()) 
        : dispatch(orderPop())

        
        dispatch(setPage(0))
        //setValue('')
    }
    const handleSubmit = (e) => {
        /*e.preventDefault()
        console.log('target',e.target.value)
        setValue(e.target.value)
        console.log('eeeee',value)
        value !== 'population'? value == 'asc'? dispatch(orderAsc()) : dispatch(orderDsc()) : dispatch(orderPop())
        setValue('')
        console.log(countries)
        dispatch(setPage(0))*/
    }

    return (
        <div>
            <form /*onSubmit={handleSubmit}*/ >
                <select className={style.select} onChange={handleChange}>
                    <option defaultValue=''></option>
                    <option value='asc'>A-Z</option>
                    <option value='dsc'>Z-A</option>
                    <option value='population'>Population</option>
                </select>
                {/*<button type='submit'>OK</button>*/}
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
