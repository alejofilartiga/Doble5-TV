import { StyledWrapper } from "../Espn/Premium/premiumStyle"


function Dtv() {
  return (
    <StyledWrapper>
      <iframe
        name="pc1"
        allow="autoplay *; encrypted-media *;"
        style={{position: "fixed", top: "100px", width: '65%', height: '84%', overflow: 'hidden', border: '2px'}}
        src="https://la12hd.com/vivo/canales.php?stream=dsports"
        allowFullScreen
        scrolling="no"
      >
        Cargando reproductor…
      </iframe>
    </StyledWrapper>
  )
}

export default Dtv
