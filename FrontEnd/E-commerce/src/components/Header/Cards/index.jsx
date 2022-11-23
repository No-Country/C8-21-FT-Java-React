import React, { useState } from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Content } from '../../GlobalStyled'
import { ContentCard, Text } from './StyledCards'
import { AiOutlineShoppingCart, AiOutlineHeart, AiFillStar, AiFillHeart } from 'react-icons/ai'
import { TiTickOutline } from 'react-icons/ti'
import { DataDestacado } from '../../data/Destacado'



const index = () => {

    const [clickFav, setClickFav] = useState(false)


    const clicked = () => {
        setClickFav(!clickFav)
        console.log(setClickFav)
    }


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
                        <div className='fav'>

                            {
                                !clickFav ? <AiOutlineHeart size={25} color='grey' cursor='pointer' onClick={clicked} />
                                    : <AiFillHeart size={25} color='blue' cursor='pointer' onClick={clicked} />
                            }

                        </div>
                        <div className='img'>
                            <img className='editimg' src={item.Img} alt={item.altImg} />
                        </div>
                        <div className='Review'>
                            <div className='starts'>
                                <AiFillStar color='#E9A426' />
                                <AiFillStar color='#E9A426' />
                                <AiFillStar color='#E9A426' />
                                <AiFillStar color='#E9A426' />
                                <AiFillStar color='#CACDD8' />
                            </div>
                            <div className='textStarts'>
                                <p>Reviews ({item.review})</p>
                            </div>
                        </div>


                        <div className='Contentittle'>
                            <h2 className='tittle'>{item.title}</h2>
                        </div>
                        <div className='priceOld'>{item.priceOld}</div>
                        <div className='priceNew'>{item.priceNew}</div>

                        <div className='btn'>
                            <button className='TextBtn'>Ver mas </button>
                        </div>
                    </ContentCard>
                ))}
            </Slider>
        </Content >
    )
}

export default index