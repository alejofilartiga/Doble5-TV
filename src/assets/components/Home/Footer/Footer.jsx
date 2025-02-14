import {Link} from 'react-router-dom';
import {FooterStyled, FooterContainer, LogoContainer, ImageFooter, InfoText, DmcaBtn} from './footerStyle';
import logo from "../../../../../public/favicon.png"
function Footer() {

  const newYear = new Date().getFullYear()

  return (
      <FooterStyled>
        <FooterContainer>
          <LogoContainer>
            <ImageFooter src={logo} />
          </LogoContainer>
          <InfoText>Doble Cinco @{newYear} todos los derechos reservados</InfoText>
          <Link to={"/dmca"} ><DmcaBtn>DMCA</DmcaBtn></Link>
        </FooterContainer>
      </FooterStyled>
  )
}

export default Footer
