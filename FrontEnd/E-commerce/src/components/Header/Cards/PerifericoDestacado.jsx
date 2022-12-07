import React, { useState } from 'react'
import { ContentCard, Text, ContentGrid, Card } from './StyledCards'
import { AiOutlineShoppingCart, AiOutlineHeart, AiFillStar, AiFillHeart } from 'react-icons/ai'
import { TiTickOutline } from 'react-icons/ti'
import { DestacadoPeriferico } from '../../data/Destacado'
import PerifericoMain from '../../../../public/PerifericoMain.png'



const PerifericoCard = () => {

    return (
        <>
            <ContentGrid id="perifericos">
                <img src={PerifericoMain} className='firt' />
                {DestacadoPeriferico.map(item => (
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

export default PerifericoCard