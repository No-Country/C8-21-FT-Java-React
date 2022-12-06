import React from 'react'
import { EmpresaConfian } from '../../data/Destacado'
import { ContentGrid } from '../Cards/StyledCards'
import { CardEmpresa } from './StyleEmpresa'

const index = () => {
    return (
        <ContentGrid>
            {EmpresaConfian.map(item => (
                <CardEmpresa key={item.id}>
                    <img src={item.Img} alt={item.altImg} className='img' />
                </CardEmpresa>
            ))}
        </ContentGrid>
    )
}

export default index