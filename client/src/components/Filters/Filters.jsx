import React, { useState } from 'react'
import AscDscPop from './AscDscPop'
import ByContinent from './ByContinent'
import ActivityFilter from './ActivityFilter'
import style from './Filters.module.css'

function Filters() {


    return (
        <>
            <label className={style.text}>Order by:</label>
            <div className={style.filters}>
                <ByContinent/>
                <AscDscPop />
                <ActivityFilter/>
            </div>
        </>
    )
}

export default Filters
