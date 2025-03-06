import styled from "styled-components"
import backimg from "./img/404.jpg"
export const ErrorSection = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: url(${backimg});
    background-size: cover;
    background-position: center;
    width: 100%;
`   

export const ContainerInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const Title = styled.h2`
    font-size: 80px;
    color: white;
    font-weight: bold;
    text-shadow: 2px 2px 4px black;
    text-align: center;
    margin-bottom: 0px;
`

export const Info = styled.h3`
    margin-top: 0px;
    font-size: 30px;
    color: white;
    font-weight: bold;
    text-shadow: 2px 2px 4px black;
    text-align: center;
`

export const Button = styled.button`
    background-color: blue;
    padding: 10px;
    border-radius: 5px;
    border: none;
    color: white;
    font-size: 20px;
    text-align: center;
    text-decoration: none;
    cursor: pointer;
    &&:hover{
        background-color: black;
    }
`