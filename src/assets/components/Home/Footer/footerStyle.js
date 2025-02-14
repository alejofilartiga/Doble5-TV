import styled from "styled-components";

export const FooterStyled = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: #000028;
    height: 70px;
`;

export const FooterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    height: 100%;
`;

export const LogoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
`;

export const ImageFooter = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const InfoText  = styled.p`
    color: white;
    font-size: 15px;
    font-weight: 600;
    text-align: center;
    width: 50%;
    margin: 0;
    padding: 0;
`;

export const DmcaBtn = styled.button`
    background-color: #000028;
    color: white;
    border: none;
    font-size: 15px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s;
    padding: 5px 10px;

    &:hover {
        background-color: #000700;
    }

`;