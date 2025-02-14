import { StyledWrapper } from "./Premium/premiumStyle"

function Espn() {
  return (
  <StyledWrapper>
      <iframe
        name="pc1"
        allow="autoplay *; encrypted-media *;"
        sandbox="allow-scripts allow-same-origin"
        style={{position: "fixed", top: "100px", width: '65%', height: '84%', overflow: 'hidden', border: '2px'}}
        src="https://nebunexa.co/cvatt.php?get=RVNQTjJIRA"
        allowFullScreen
        scrolling="no"
      >
        Cargando reproductor…
      </iframe>
  </StyledWrapper>
  )
}

export default Espn
