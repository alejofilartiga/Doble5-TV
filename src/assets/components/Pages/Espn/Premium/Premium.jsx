import React from 'react';
import {StyledWrapper} from './premiumStyle';

function Premium() {
  return (
    <StyledWrapper>
      <iframe
        name="pc1"
        allow="autoplay *; encrypted-media *;"
        style={{position: "fixed", top: "100px", width: '65%', height: '84%', overflow: 'hidden', border: '2px'}}
        src="https://nebunexa.co/cvatt.php?get=Rm94X1Nwb3J0c19QcmVtaXVuX0hE"
        allowFullScreen
        scrolling="no"
      >
        Cargando reproductor…
      </iframe>
    </StyledWrapper>
  );
}

export default Premium;
