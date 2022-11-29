import styled from "styled-components";


export const Text = styled.h2`
    margin-top: 45px;
`

export const ContentCard = styled.div`
    width: 234px;
    background-color: red;
    height: 340px; 
    padding: 15px, 25px, 15px, 25px;
    margin-top: 30px;
    box-shadow: 0px 1px 2px #CACDD8, 1px 2px 2px #CACDD8, 2px 3px 2px #CACDD8 , 3px 4px 2px #CACDD8 ;
    background-color: white;
    margin-bottom: 100px;

    &:hover{
        height: 400px;
        .Stock, .fav,{
            transition: .9s ease;
            opacity: 1;
        }

        .btn{
            opacity: 1;
        }

    }

    .fav{
        display: flex;
        justify-content: flex-end ;
        margin-top: 22px;
        margin-right: 30px;

    }

        .editimg{
            width: 190px;
            height: 100px;
            margin: 0px auto;
            margin-bottom: 20px;
        }
    

    .Review{
        width: 180px;
        display:flex;
        color: #ccc;
        justify-content: center; 
        margin-left: 3rem;
        .starts{
            display: flex;
            flex-direction: row; 
            margin-top: 6px ;
        }
        .textStarts{
            margin-left: 20px;
            color: #ccc;
        }
    }


    .Contentittle{
        width: 300px;
        height: 60px;
        font-style: normal;
        display: flex;
        align-items: center;
        margin-left: 3rem;
        font-family: 'Poppins'; 
        color: #000000;
        font-weight: 400;
        font-size: 13px;
        .tittle{
            line-height: 20px;
        }
    }

    .priceOld{
        margin-left: 3rem;
        color: grey;
        text-decoration: line-through;
        margin-bottom: 10px;
        font-family: 'Poppins';
        font-size: 20px;
        font-weight: 600;
    }

    .priceNew{
        margin-left: 3rem;
        font-family: 'Poppins';
        color: black;
        font-size: 30px;
        font-weight: 600;
    }

    .btn{
        width: 234px;
        height: 90px;
        display: block;
        opacity:0;
        margin: 0px auto;

    }

    button{
        border-radius: 20px;
        border-color: #004DFF;
        width: 200px;
        height: 40px;
        background: white;
        color: #004DFF;
        font-size: 20px;
        line-height: 30px;
        cursor: pointer;
    }

`