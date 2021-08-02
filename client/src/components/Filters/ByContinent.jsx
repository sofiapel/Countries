import React from 'react'
import { useDispatch } from 'react-redux'
import { orderContinent, setPage } from '../../actions'
import style from './ByContinent.module.css'

function ByContinent() {
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
            <form>
                <select className={style.select} onChange={handleChange} id='filterContinent' >
                    <option defaultValue=''>continent</option>
                    <option value='America'>America</option>
                    <option value='Europe'>Europe</option>
                    <option value='Asia'>Asia</option>
                    <option value='Oceania'>Oceania</option>
                    <option value='Africa'>Africa</option>:

                </select>
            </form>
        </div>
    )
}

export default ByContinent
