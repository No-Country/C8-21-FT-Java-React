import React, { useState } from 'react'
import styled, { withTheme } from 'styled-components'
import BurguerButton from './BurguerButton'

import Logo from '../../../public/Logo.png'

// Icono de Lupita 
import { AiOutlineUserAdd, AiOutlineShoppingCart } from 'react-icons/ai'
import index from '../Header'

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
                <img className='img' src={Logo} alt='Logo' />
                <div className={`links ${clicked ? 'active' : ''}`}>
                    <a onClick={handleClick} href="#h"> Periféricos</a>
                    <a onClick={handleClick} href="#h"> Monitores</a>
                    <a onClick={handleClick} href="#h"> Gabinetes</a>
                    <a onClick={handleClick} href="#h"> Contacto</a>
                </div>
                <div className='iconos'>
                    <AiOutlineShoppingCart color='grey' className='shop' />
                    <AiOutlineUserAdd color='blue' className='user' />
                </div>
                <div className='burguer'>
                    <BurguerButton clicked={clicked} handleClick={handleClick} />
                </div>
                <BgDiv className={`initial ${clicked ? 'active' : ''}`}></BgDiv>
            </NavContainer>
        </>
    )
}

export default navbar
const NavContainer = styled.nav`
    .img{
        width:65px;
        height: 65px;
    }
    h2{
        color: black;
        font-weight: 400;
        span{
            font-weight: bold;      
        }
    }
    padding: .4rem;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 80px;

    .iconos{
        display: flex;
        gap: 20px;

        .shop, .user{
            width: 23px;
            height: 23px;
        }
    }
    a{
        color: black;
        text-decoration: none;
        margin-right: 1rem;
        font-weight:600;
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
        display: flex;
        top: -700px;
        left: -2000px;
        right: 0;
        margin-left: auto;
        margin-right: auto;
        text-align: center;
        transition: all .5s ease;
        color: black;
        a{
            color: black;
            font-size: 2rem;
            display: block;
            justify-content: center;
        }
        @media(min-width: 768px){
            position: initial;
            margin: 0;
            a{
                font-size: 1rem;
                color: black;
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
            color: black;
            z-index: 10;
        }      
    }
`
const BgDiv = styled.div`
    background-color: #222;
    position: absolute;
    top: -1000px;
    left: -1000px;
    width: 100%;
    height: 100%;
    z-index: 1;
    transition: all.6s ease;
    &.active{
        border-radius: 0 0 80% 0;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 10;
    }
`