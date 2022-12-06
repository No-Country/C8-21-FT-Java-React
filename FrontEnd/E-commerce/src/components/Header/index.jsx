import React from 'react'
import { ContentHeader } from './StyleHeader'
import { Content } from '../GlobalStyled'
import Cards from './Cards/index'
import Img from './ImgHeader.jpeg'
import Navbar from '../Navbar/index'
import Empresas from './Empresas/index'


const index = () => {
    return (
        <Content>
            <Navbar />
            <img style={{ marginTop: '20px' }} src={Img} />
            <Cards />
            <Empresas />
        </Content>
    )
}

export default index