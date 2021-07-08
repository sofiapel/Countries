import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
//import style from './Home.module.css'
/*const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 200px;
border: 3px solid green; 

`*/
const Button = styled.button `
margin:auto;
display:block;
  

`

function Home() {
    return (
        <div>
            <Button><Link to='/countries'>Come in!</Link></Button>
            
        </div>
    )
}

export default Home
