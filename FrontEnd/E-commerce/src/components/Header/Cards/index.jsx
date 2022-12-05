import React, { useState } from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Content } from '../../GlobalStyled'
import { ContentCard, Text, ContentGrid } from './StyledCards'
import { AiOutlineShoppingCart, AiOutlineHeart, AiFillStar, AiFillHeart } from 'react-icons/ai'
import { TiTickOutline } from 'react-icons/ti'
import MonitorCard from './MonitorCard';
import PerifericoCard from './PerifericoDestacado';
import GabineteCard from './GabineteDestacado';



const index = () => {

    return (
        <Content>
            <MonitorCard />
            <GabineteCard />
            <PerifericoCard />
        </Content >
    )
}

export default index