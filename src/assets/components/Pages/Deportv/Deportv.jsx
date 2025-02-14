import { StyledWrapper } from "../Espn/Premium/premiumStyle"
function Deportv() {
  return (
    <StyledWrapper>
      <iframe
        name="pc1"
        allow="autoplay *; encrypted-media *;"
        style={{position: "fixed", top: "100px", width: '65%', height: '84%', overflow: 'hidden', border: '2px'}}
        src="https://television-libre.net/html/fl/?get=RGVwb3JUVkhE"
        allowFullScreen
        scrolling="no"
      >
        Cargando reproductor…
      </iframe>
    </StyledWrapper>
  )
}

export default Deportv
