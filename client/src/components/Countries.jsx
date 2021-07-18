import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import {  setPage } from '../actions/index'
import Country from './Country.jsx'
import style from './Countries.module.css'
import { IoAirplane } from "react-icons/io5";
import { IconContext } from 'react-icons/lib';

function Countries() {
    //const [page, setPage] = useState(0)
    const page = useSelector((state) => state.pages)
    const countries = useSelector(state => state.countriesLoaded)
    const dispatch = useDispatch()
    // useEffect(() => {
    //     dispatch(setPage(0))
    // },[])
    //console.log(page)
    function handleClick(number){
        const limitSup = Number.isInteger(countries.length/10) ? 
            Math.floor(countries.length/10)-1 :
            Math.floor(countries.length/10)
        if((page > 0 && number == -1) || (page < limitSup && number == 1))
        dispatch(setPage(page + number))
    }
    console.log(countries[0])

    return (
        <div /*className={style.containerdelcontainer}*/>
            <hr/>
            <div className={style.buttons}>
            { page >0 ?
            <IconContext.Provider value={{ size:'2rem', className:`${style.ayuda}`}}>
                <IoAirplane onClick={() => handleClick(-1)}>Prev</IoAirplane>
            </IconContext.Provider> 
            :<IconContext.Provider value={{ size:'2rem', className:`${style.ayudaa}`}}>
                <IoAirplane onClick={() => handleClick(-1)}>Prev</IoAirplane>
            </IconContext.Provider>  }
            
            { countries && page*10 +10 < (countries.indexOf(countries[countries.length-1]))?
                <IconContext.Provider value={{size:'2rem'}}>
                    <IoAirplane onClick={() => handleClick(1)}>Next</IoAirplane>
                </IconContext.Provider>:
                <IconContext.Provider value={{size:'2rem', color:'rgb(90, 90, 90)'}}>
                    <IoAirplane onClick={() => handleClick(1)}>Next</IoAirplane>
                </IconContext.Provider>            
            }

            </div>
            {
                
                (countries[0] && countries[0].msg)?<h3>{countries[0].msg}</h3>:
                <div className={style.containerr}>{
                countries && 
                countries.slice(page*10, page*10 + 10).map(c => (
                    <Country 
                        key={c.id} 
                        name={c.name} 
                        flag={c.flag} 
                        subregion={c.subregion} 
                        id={c.id}
                    />
                    ))}
                </div>
            }

        </div>
    )
}

export default Countries
