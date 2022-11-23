import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Content } from '../../GlobalStyled'
import { ContentCard, Text } from './StyledCards'
import { AiOutlineShoppingCart, AiOutlineHeart, AiFillStar } from 'react-icons/ai'
import { TiTickOutline } from 'react-icons/ti'
import { DataDestacado } from '../../data/Destacado'



const index = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        swipeToSlide: true,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <Content>
            <Text>Productos Destascados</Text>
            <Slider {...settings}>
                {DataDestacado.map(item => (
                    <ContentCard key={item.id}>
                        <div className='Stock'>In Stock <TiTickOutline color='blue' /></div>
                        <div className='fav'><AiOutlineHeart /></div>
                        <div className='img'>Imagen</div>
                        <div className='Review'>
                            <AiFillStar color='yellow' />
                            <AiFillStar color='yellow' />
                            <AiFillStar color='yellow' />
                            <AiFillStar color='yellow' />
                            <AiFillStar />

                            Reviews {item.review}
                        </div>
                        <div className='tittle'>{item.title}</div>
                        <div className='priceOld'>{item.priceOld}</div>
                        <div className='priceNew'>{item.priceNew}</div>

                        <div className='btn'>
                            <button className='TextBtn'><AiOutlineShoppingCart size={30} /> Agregar </button>
                        </div>
                    </ContentCard>
                ))}
            </Slider>
        </Content >
    )
}

export default index