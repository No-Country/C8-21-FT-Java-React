import React, { useState } from 'react'
import { ContentCard, Text, ContentGrid, Card } from './StyledCards'
import { AiOutlineShoppingCart, AiOutlineHeart, AiFillStar, AiFillHeart } from 'react-icons/ai'
import { TiTickOutline } from 'react-icons/ti'
import { DestacadoMonitores } from '../../data/Destacado'
import Monitor from '../../../../public/MonitorMain.png'



const MonitorCard = () => {

    return (
        <>
            <Text>Productos Destacados</Text>
            <ContentGrid id='monitor'>
                <img src={Monitor} className='firt' />
                {DestacadoMonitores.map(item => (
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

export default MonitorCard