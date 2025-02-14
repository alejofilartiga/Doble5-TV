import React from 'react';
import {StyledWrapper, FrameContainer, ChannelContainer, CastOption} from './premiumStyle';

function Premium() {
  return (
    <StyledWrapper>
      <ChannelContainer>
        <CastOption>OPCION 1</CastOption>
        <FrameContainer>
          <iframe
            name="pc1"
            allow="autoplay *; encrypted-media *;"
            style={{width: '90%', height: '100%', border: '2px'}}
            src="https://gh.alangulo.tv/espn-premium-a/"
            allowFullScreen
            scrolling="no"
          />
        </FrameContainer>
        <CastOption>OPCION 2</CastOption>
        <FrameContainer>
          <iframe
              name="pc1"
              allow="autoplay *; encrypted-media *;"
              style={{width: '90%', height: '100%', border: '2px'}}
              src="https://streamdz1.xyz/player/embed.php?channel=espnpremium"
              allowFullScreen
              scrolling="no"
            />
        </FrameContainer>
        <CastOption>OPCION 3</CastOption>
        <FrameContainer>
          <iframe
              name="pc1"
              allow="autoplay *; encrypted-media *;"
              style={{width: '90%', height: '100%', border: '2px'}}
              src="https://streamdz3.lat/player/embed.php?channel=espnpremium"
              allowFullScreen
              scrolling="no"
            />
        </FrameContainer>
        <CastOption>OPCION 4 (SOLO EXTENSION PARA PC)</CastOption>
        <FrameContainer>
          <iframe
              name="pc1"
              allow="autoplay *; encrypted-media *;"
              style={{width: '90%', height: '100%', border: '2px'}}
              src="https://nebunexa.co/extencion.html?get=Rm94X1Nwb3J0c19QcmVtaXVuX0hE"
              allowFullScreen
              scrolling="no"
            />
        </FrameContainer>
      </ChannelContainer>
    </StyledWrapper>
  );
}

export default Premium;
