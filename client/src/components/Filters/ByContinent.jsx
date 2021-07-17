import React, { useState,useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { orderContinent, setPage } from '../../actions'

function ByContinent() {
    const [continent, setContinent] = useState('') 
    const dispatch = useDispatch()

    
    const handleChange = (e) => {
        dispatch(orderContinent(e.target.value))
        dispatch(setPage(0))
    }
    const handleSubmit = (e) => {
        /*e.preventDefault()
        console.log(continent)
        dispatch(orderContinent(continent))
        dispatch(setPage(0))*/


    }
    return (
        <div>
            <form /*onSubmit={handleSubmit}*/>
                <select onChange={handleChange} >
                    <option defaultValue=''></option>
                    <option value='America'>America</option>
                    <option value='Europe'>Europe</option>
                    <option value='Asia'>Asia</option>
                    <option value='Oceania'>Oceania</option>
                    <option value='Africa'>Africa</option>
                </select>
                {/*<button type='submit'>OK</button>*/}
            </form>
        </div>
    )
}

export default ByContinent
