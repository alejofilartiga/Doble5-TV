import { StyledWrapper, FrameContainer, ChannelContainer, CastOption } from "./Premium/premiumStyle"

function Espn() {
  return (
    <StyledWrapper>
      <ChannelContainer>
        <CastOption>OPCION 1</CastOption>
        <FrameContainer>
          <iframe
            name="pc1"
            allow="autoplay *; encrypted-media *;"
            style={{width: '90%', height: '100%', border: '2px'}}
            src="https://nebunexa.co/cvatt.php?get=RVNQTjJIRA"
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
              src="https://television-libre.net/html/fl/?get=RVNQTjJIRA"
              allowFullScreen
              scrolling="no"
            />
        </FrameContainer>
        <CastOption>OPCION 3 (EXTENSION SOLO PARA PC)</CastOption>
        <FrameContainer>
          <iframe
              name="pc1"
              allow="autoplay *; encrypted-media *;"
              style={{width: '90%', height: '100%', border: '2px'}}
              src="https://nebunexa.co/extencion.html?get=RVNQTjJIRA"
              allowFullScreen
              scrolling="no"
            />
        </FrameContainer>

      </ChannelContainer>
    </StyledWrapper>
  )
}

export default Espn
