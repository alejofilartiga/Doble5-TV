import styled from 'styled-components';

export const HeaderStyled = styled.header`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    z-index: 100;
    top: 0;
    backdrop-filter: blur(10px);
`

export const NavStyled = styled.nav`
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 15px;
    align-items: center;
`

export const LogoContainer = styled.div`
    width: 100px;

`

export const Logo = styled.img`
    width: 100%;
    height: auto;
    object-fit: contain;
    cursor: pointer;
`

export const BtnContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    background-color:rgb(166, 169, 201);
    width: 100px;
    border-radius: 20px;
`