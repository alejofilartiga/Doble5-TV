import styled from "styled-components";

export const HomeStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding-top: 10%;
    padding-bottom: 3%;
    @media (max-width: 798px){
        padding-top: 20%;
    }
`


export const CardsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90%;
    flex-wrap: wrap;
    gap: 20px;
`

export const Card = styled.div`
    padding: 10px;
    width: 200px;
    height: 204px;
    background:rgb(17, 14, 145);
    border-radius: 10px;
    transition: border-radius 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);

    box-shadow: inset 0 -3em 3em rgba(0,0,0,0.1),
             0 0  0 2px rgb(190, 190, 190),
             0.3em 0.3em 1em rgba(0,0,0,0.3);

    @media (max-width: 798px) {
        width: 100px;
        height: 150px;
    }
`

export const ImgCard = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
`