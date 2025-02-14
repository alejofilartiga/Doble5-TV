import { StyledWrapper, FrameContainer, ChannelContainer, CastOption } from "../Premium/premiumStyle"

function E3() {
  return (
    <>
      <StyledWrapper>
        <ChannelContainer>
          <CastOption>OPCION 1</CastOption>
          <FrameContainer>
            <iframe
              name="pc1"
              allow="autoplay *; encrypted-media *;"
              style={{width: '90%', height: '100%', border: '2px'}}
              src="https://nebunexa.co/cvatt.php?get=RVNQTjM"
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
              src="https://embed.sdfgnksbounce.com/embed2/espn3.html"
              allowFullScreen
              scrolling="no"
            />
          </FrameContainer>
          <CastOption>OPCION 3 (SOLO PARA PC)</CastOption>
          <FrameContainer>
            <iframe
              name="pc1"
              allow="autoplay *; encrypted-media *;"
              style={{width: '90%', height: '100%', border: '2px'}}
              src="https://nebunexa.co/extencion.html?get=RVNQTjM"
              allowFullScreen
              scrolling="no"
            />
          </FrameContainer>
        </ChannelContainer>
      </StyledWrapper>
    </>
  )
}

export default E3
