import React from 'react'
//import styled from 'styled-components'
import styled, { withTheme } from 'styled-components'

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

export default navbar
const NavContainer = styled.nav`
    h2 {
        color: white;
        font-weight: 200;
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
`
