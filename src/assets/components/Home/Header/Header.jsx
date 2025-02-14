import { HeaderStyled, NavStyled, LogoContainer, Logo, BtnContainer } from "./headerStyle"
import logo from "./img/d5-logo.png"
import BtnHome from "../../UI/BtnHome/BtnHome"
import { Link } from "react-router-dom"


function Header() {

  return (
    <HeaderStyled>
      <NavStyled>
        <LogoContainer>
        <Link to={"/"} ><Logo src={logo} alt="Doble5 logo" /></Link>
        </LogoContainer>
        <BtnContainer>
          <Link to={"/"}><BtnHome/></Link>
        </BtnContainer>
      </NavStyled>
    </HeaderStyled>
  )
}

export default Header
