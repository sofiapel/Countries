import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { orderContinent } from '../../actions'

function ByContinent() {
    const [continent, setContinent] = useState('') 
    const dispatch = useDispatch()
    
    const handleChange = (e) => {
        setContinent(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(continent)
        dispatch(orderContinent(continent))


    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <select value={continent} onChange={handleChange} >
                    <option defaultValue=''></option>
                    <option value='America'>America</option>
                    <option value='Europe'>Europe</option>
                    <option value='Asia'>Asia</option>
                    <option value='Oceania'>Oceania</option>
                    <option value='Africa'>Africa</option>
                </select>
                <button type='submit'>OK</button>
            </form>
        </div>
    )
}

export default ByContinent
