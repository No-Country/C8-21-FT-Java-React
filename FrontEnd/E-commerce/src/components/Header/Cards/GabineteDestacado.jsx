import React, { useState } from 'react'
import { ContentCard, Text, ContentGrid, Card } from './StyledCards'
import { AiOutlineShoppingCart, AiOutlineHeart, AiFillStar, AiFillHeart } from 'react-icons/ai'
import { TiTickOutline } from 'react-icons/ti'
import { DestacadoGabinete } from '../../data/Destacado'
import GabineteMain from '../../../../public/GabineteMain.png'



const GabineteCard = () => {

    return (
        <>
            <ContentGrid>
                <img src={GabineteMain} className='firt' />
                {DestacadoGabinete.map(item => (
                    <Card key={item.id}>
                        <img src={item.Img} alt={item.altImg} className='img' />
                        <div className='Starts'>
                            <AiFillStar color='yellow' />
                            <AiFillStar color='yellow' />
                            <AiFillStar color='yellow' />
                            <AiFillStar color='yellow' />
                            <AiFillStar color='grey' />

                            <p className='review'>Review: {item.review}</p>
                        </div>
                        <h5 className='titleCard'>{item.title}</h5>
                        <p className='Old'> {item.priceOld}</p>
                        <p className='new'> {item.priceNew}</p>
                    </Card>
                ))}
            </ContentGrid>
        </>
    )
}

export default GabineteCard