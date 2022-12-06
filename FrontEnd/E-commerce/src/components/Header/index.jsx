import React from 'react'
import { ContentHeader } from './StyleHeader'
import { Content } from '../GlobalStyled'
import Cards from './Cards/index'
import Img from './ImgHeader.jpeg'


const index = () => {
    return (
        <Content>
            <img style={{ marginTop: '20px' }} src={Img} />
            <Cards />
        </Content>
    )
}

export default index