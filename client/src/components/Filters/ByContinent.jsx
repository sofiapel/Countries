import React, { useState,useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { orderContinent, resetContinent, setPage } from '../../actions'

function ByContinent() {
    //const [continent, setContinent] = useState('') 
    const dispatch = useDispatch()

    
    function Reset() {
        var dropDown = document.getElementById("filterActivity");
        dropDown.selectedIndex = 0;
    }
    
    const handleChange = (e) => {
        Reset()
        dispatch(orderContinent(e.target.value))
        dispatch(setPage(0))
    }
    return (
        <div>
            <form /*onSubmit={handleSubmit}*/>
                <select onChange={handleChange} id='filterContinent' >
                    <option defaultValue=''></option>
                    <option value='America'>America</option>
                    <option value='Europe'>Europe</option>
                    <option value='Asia'>Asia</option>
                    <option value='Oceania'>Oceania</option>
                    <option value='Africa'>Africa</option>:

                </select>
                {/*<button type='submit'>OK</button>*/}
            </form>
        </div>
    )
}

export default ByContinent
