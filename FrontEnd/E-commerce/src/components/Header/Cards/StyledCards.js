import styled from "styled-components";


export const Text = styled.h2`
    margin-top: 45px;
`

export const ContentCard = styled.div`
    width: 300px;
    height: 300px;
    margin-top: 30px;
    overflow: hidden;
    border-color: 3px black;

    &:hover{
        height: 350px;
        .Stock, .fav, .TextBtn{
            transition: .9s ease;
            opacity: 1;
        }
    }

    .Stock{
        margin-left: 3rem;
        padding-top: 10px;
        color: blue;
        opacity: 0;

    }
    .fav{
        text-align: right;
        margin-right: 30px;
        margin-top: 15px;
        opacity: 0;
    }

    .img{
        margin-bottom: 40px;
    }

    .Review{
        text-align: center;
        color: #ccc;
        margin-bottom: 40px;
    }

    .tittle{
        margin-left: 3rem;
        color: black;
        margin-bottom: 40px;
    }

    .priceOld{
        margin-left: 3rem;
        color: grey;
        text-decoration: line-through;
        margin-bottom: 10px;
    }

    .priceNew{
        margin-left: 3rem;
    }

    .btn{
        margin-top: 20px;
        display: block;
        padding-left: 70px;

    }

    .TextBtn{
        border-radius: 40%;
        border-color: #ccc;
        border: none;
        width: 200px;
        height: 40px;
        background: white;
        color: #ccc;
        font-size: 20px;
        line-height: 30px;
        opacity: 0;
        cursor: pointer;
        &:hover{
            border:2px #ccc;
        }
    }

`