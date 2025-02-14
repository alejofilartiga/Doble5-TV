import { HomeStyled, HomeTitle, CardsContainer, Card, ImgCard } from "./homeStyle"
import deportv from "./img/deportv.png"
import tyc from "./img/tyc.png"
import tvp from "./img/tvp.png"
import tnt from "./img/tnt.webp"
import play from "./img/tycplay.png"
import dtv from "./img/dt1.png"
import dtv2 from "./img/dt2.png"

import fox from "./img/fox.png"
import fox2 from "./img/fox2.png"
import fox3 from "./img/fox3.png"

import espn from "./img/espn1.webp"
import espn2 from "./img/espn2.png"
import espn3 from "./img/espn3.png"
import espn4 from "./img/espn4.png"
import espn5 from "./img/espn5.png"
import espn6 from "./img/espn6.png"
import espn7 from "./img/espn7.png"
import espnp from "./img/espnp.svg"


import { Link } from "react-router-dom"

function Home() {


  return (
    <HomeStyled>
      <HomeTitle>Doble Cinco - Sin Virus, Sin Publicidad, Simple</HomeTitle>
      <CardsContainer>
        <Link to={"/espn/premium"} >
          <Card>
            <ImgCard src={espnp} />
          </Card>
        </Link>

        <Link to={"/tnt"} >
          <Card>
            <ImgCard src={tnt} />
          </Card>
        </Link>

        <Link to={"/tyc"} >
          <Card>
            <ImgCard src={tyc} />
          </Card>
        </Link>

        <Link to={"/espn"} >
          <Card>
            <ImgCard src={espn} />
          </Card>
        </Link>

        <Link to={"/espn/e2"} >
          <Card>
            <ImgCard src={espn2} />
          </Card>        
        </Link>

        <Link  to={"/dtv"} >
          <Card>
            <ImgCard src={dtv} />
          </Card>
        </Link>

        <Link  to={"/dtv/2"} >
          <Card>
            <ImgCard src={dtv2} />
          </Card>
        </Link>

        <Link to={"/publica"} >
          <Card>
            <ImgCard src={tvp} />
          </Card>
        </Link>

        <Link to={"/fox"} >
          <Card>
            <ImgCard src={fox} />
          </Card>
        </Link>

        <Link to={"/fox/2"} >
          <Card>
            <ImgCard src={fox2} />
          </Card>
        </Link>

        <Link to={"/fox/3"}>
          <Card>
              <ImgCard src={fox3} />
            </Card>
        </Link>
        <Link to={"/espn/e3"} >
          <Card>
            <ImgCard src={espn3} />
          </Card>
        </Link>

        <Link to={"/espn/e4"} >
          <Card>
            <ImgCard src={espn4} />
          </Card>
        </Link>
        <Link  to={"/espn/e5"} >
          <Card>
            <ImgCard src={espn5} />
          </Card>   
        </Link>
        <Link to={"/espn/e6"}  >
          <Card>
            <ImgCard src={espn6} />
          </Card>
        </Link>
        <Link to={"/espn/e7"} >
          <Card>
            <ImgCard src={espn7} />
          </Card>
        </Link>
        <Link  to={"/play"} >
          <Card>
            <ImgCard src={play} />
          </Card>  
        </Link>
        <Link to={"/deportv"} >
          <Card>
            <ImgCard src={deportv} />
          </Card>
        </Link>
      </CardsContainer>
    </HomeStyled>
  )
}

export default Home
