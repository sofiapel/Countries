import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { orderAsc, orderDsc, orderPop, setPage } from '../../actions/index'
import style from './AscDscPop.module.css'

function AscDscPop() {
    const countries = useSelector(state => state.countriesLoaded)
    const dispatch = useDispatch()
    
    const handleChange = (e) => {
        e.target.value !== 'population'? 
            e.target.value == 'asc'? 
                dispatch(orderAsc()) : 
                dispatch(orderDsc()) 
        : dispatch(orderPop())

        
        dispatch(setPage(0))
    }

    return (
        <div>
            <form>
                <select className={style.select} onChange={handleChange}>
                    <option defaultValue=''></option>
                    <option value='asc'>A-Z</option>
                    <option value='dsc'>Z-A</option>
                    <option value='population'>Population</option>
                </select>
            </form>
        </div>
            
    )
}

export default AscDscPop
