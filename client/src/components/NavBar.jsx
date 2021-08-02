import React from 'react'
import Logo from '../img/mapa.png'
import style from './NavBar.module.css'
 
function NavBar(props) {
    function handleClick(){
        props.history.push('/countries')
    }
    return (
        <header className={style.container}>
            <div>
                <img className={style.img} onClick={handleClick} src={Logo} alt='image not found'/>
            </div>
            
        </header>
    )
}

export default NavBar
