import React, {useState} from 'react'
import styled, { withTheme } from 'styled-components'
import BurguerButton from '../BurguerButton'

import Logo from '../../assets/img/logo.png'


// Icono de Lupita 
import { AiOutlineSearch, AiOutlineShoppingCart } from 'react-icons/ai'
import index from '../Header'

/*
//Importar imagen
//<img src={} alt={} />

// Icono de Lupita 
// Se importa asi : <AiOutlineSearch />

// Icono del carrito 
// Se importa asi : <AiOutlineShoppingCart />

const index = () => {
    return (
        <>
            <NavContainer>
                <h2><span>TechWare</span> Nav</h2>
            </NavContainer>
            <div>
                <a href=""> Hardware</a>
                <a href=""> Periféricos</a>
                <a href=""> Monitores</a>
                <a href=""> Gabinetes</a>
                <a href=""> Notebooks</a>
                <a href=""> Contacto</a>
            </div>
        </>
    )
}
*/

//Funcion del Nav
function navbar() {
    
    const [clicked, setClicked] = useState(false)
    const handleClick = () => {
        // Cambia el estado del click y vicerversa
        setClicked(!clicked)
    }
    return (
        <>
         <NavContainer>
            <h2><span>TechWare</span></h2>
            <div className={`links ${clicked ? 'active' : ''}`}>
                <a onClick = {handleClick}href="#h"> Hardware</a>
                <a onClick = {handleClick}href="#h"> Periféricos</a>
                <a onClick = {handleClick}href="#h"> Monitores</a>
                <a onClick = {handleClick}href="#h"> Gabinetes</a>
                <a onClick = {handleClick}href="#h"> Notebooks</a>
                <a onClick = {handleClick}href="#h"> Contacto</a>
            </div>
            <div className='burguer'>
                <BurguerButton clicked={clicked} handleClick={handleClick}/>
            </div>
            <BgDiv className={`initial ${clicked ? 'active' : ''}`}></BgDiv>
         </NavContainer>
        </>
    )
}

export default navbar
const NavContainer = styled.nav `
    h2{
        color: white;
        font-weight: 400;
        span{
            font-weigth: bold;      
        }
    }
    padding: .4rem;
    background-color: #333;
    display: flex;
    align-items: center;
    justify-content: space-between;
    a{
        color: white;
        text-decoration: none;
        margin-rigth: 1rem;
    }

    //El siguiente codigo oculta el icono de menu hamburguesa cuando se reduce el tamaño de la ventana
    .burguer{
        @media(min-width: 768px){
            display: none;
        }
    }
    //Codigo para ocultar links de opciones del nav
    .links{
        position: absolute;
        top: -700px;
        left: -2000px;
        right: 0;
        margin-left: auto;
        margin-right: auto;
        text-align: center;
        transition: all .5s ease;
        a{
            color: white;
            font-size: 2rem;
            display: block;
        }
        @media(min-width: 768px){
            position: initial;
            margin: 0;
            a{
                font-size: 1rem;
                color: white;
                display: inline;
            }
        }
    }
    //Codigo para links cuando estan activos
    .links.active{
        width: 100%;
        display: block;
        position: absolute;
        margin-left: auto;
        margin-right: auto;
        top: 30%;
        left: 0;
        right: 0;
        text-align: center;
        a{
            font-size: 1.6rem;
            margin-top: 1rem; 
            color: white;
        }      
    }
`
const BgDiv =styled.div`
    background-color: #222;
    position: absolute;
    top: -1000px;
    left: -1000px;
    width: 100%;
    height: 100%;
    z-index: -1;
    transition: all.6s ease;
    &.active{
        border-radius: 0 0 80% 0;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
`