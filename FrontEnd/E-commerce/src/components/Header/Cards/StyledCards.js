import styled from "styled-components";


export const Text = styled.h2`
    margin-top: 45px;
    font-weight: bold;
    font-size: 24px;
`

export const ContentCard = styled.div`
    display: grid;
    width: 100%;
    grid-template-columns: 1fr 1fr 1fr;
    justify-content: center;
    background: red;
`

export const ContentGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    width: 100%;
    gap: 15px;
    margin-top: 20px;
    margin-bottom: 40px;
    margin-right: 30px;

    
    @media (max-width: 770px){
        grid-template-columns: 1fr 1fr 1fr; 
    }

    @media (max-width: 540px){
        grid-template-columns: 1fr 1fr; 
    }
    @media (max-width: 420px){
        grid-template-columns: 1fr 1fr; 
        gap: 10px;
    }


    .firt{
        margin-right: 20px;
        width: 430px;
        height: 330px;

        @media (max-width: 770px){
            width: 200px;
            height: 330px;
        }

        @media (max-width: 420px){
            width: 170px;
            height: 330px;
        }
    }
`


export const Card = styled.div`
    width: 200px;
    height: 310px;
    background: white;
    box-shadow: 0px -2px 2px #ccc, 0px -1px 2px #ccc, 0px 1px 1px #ccc, 0px 2px 2px #ccc, 0px 3px 3px #ccc, 0px 4px 4px #ccc, 0px 5px 5px #ccc;

    @media (max-width: 420px){
        width: 180px;
        height: 310px;
    }

    .img{
        padding:20px;
        width: 200px;
        height: 120px;
        margin: 0px auto;


        
        @media (max-width: 420px){
            width: 140px;
        }

    }

    .Starts {
        width: 90%;
        display: flex;
        flex-direction: row;
        padding: 10px;
        line-height: 20px;
    }

    .review{
            color: grey;
            margin-left: 10px;
    }

    .titleCard{
        text-align: center;
        font-size: 15px;
        font-family: 'Poppins';
        font-Weight: bold;
        padding: 10px;
    }

    .Old{
        color: #666666;
        text-decoration:line-through;
        padding: 10px;
    }
    .new{
        padding-left: 10px;
        color: black;
        font-weight: 400;
    }

`