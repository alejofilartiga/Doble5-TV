import { StyledWrapper } from "../../Espn/Premium/premiumStyle";

function Dtv2() {
  return (
    <StyledWrapper>
      <iframe
        name="pc1"
        allow="autoplay *; encrypted-media *;"
        style={{ position: "fixed", top: "100px", width: '65%', height: '84%', overflow: 'hidden', border: '2px' }}
        src="https://streamtp2.com/global1.php?stream=dsports2"
        allowFullScreen
        scrolling="no"
      >
        Cargando reproductor…
      </iframe>
    </StyledWrapper>
  );
}

export default Dtv2;
