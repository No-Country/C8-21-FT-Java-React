import React from 'react'
import { ContentHeader } from './StyleHeader'
import { Content } from '../GlobalStyled'
import Cards from './Cards/index'


const index = () => {
    return (
        <Content>
            <ContentHeader>
                {/* Add Img or Slider */}
                IMG
            </ContentHeader>
            <Cards />
        </Content>
    )
}

export default index