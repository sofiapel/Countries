import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { orderAsc, orderDsc, orderPop, setPage, orderArea } from '../../actions/index'
import style from './AscDscPop.module.css'

function AscDscPop() {
    const countries = useSelector(state => state.countriesLoaded)
    const dispatch = useDispatch()
    
    const handleChange = (e) => {
        switch(e.target.value){
            case 'population':
                {
                    dispatch(orderPop());
                    break
                }
            case 'asc':
                {
                    dispatch(orderAsc());
                    break

                }
            case 'area':
                {
                    dispatch(orderArea());
                    break
                };
            default:
                dispatch(orderDsc())
        }   
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
                    <option value='area'>Area</option>
                </select>
            </form>
        </div>
            
    )
}

export default AscDscPop
