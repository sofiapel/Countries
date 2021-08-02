import React from 'react'
import AscDscPop from './AscDscPop'
import ByContinent from './ByContinent'
import ActivityFilter from './ActivityFilter'
import style from './Filters.module.css'
 
function Filters() {
    return (
        <>         
            <div className={style.filters}>
                <div className={style.filters}>
                    <label>Filter by:</label>
                    <ByContinent/>
                    <ActivityFilter/>
                    <div className={style.order}>
                        <label className={style.text}>Order by:</label>
                        <AscDscPop />
                    </div>
                </div>    
            </div>
        </>
    )
}

export default Filters
