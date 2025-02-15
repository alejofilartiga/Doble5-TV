import { StyledWrapper, FrameContainer, ChannelContainer, CastOption } from "../Premium/premiumStyle"

function E2() {
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
            src="https://gh.alangulo.tv/espn2-b/"
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
              src="https://streamtp1.com/global1.php?stream=espn2"
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
              src="https://nebunexa.co/extencion.html?get=RVNQTjJfQXJn"
              allowFullScreen
              scrolling="no"
            />
        </FrameContainer>

      </ChannelContainer>
    </StyledWrapper>
    </>

  )
}

export default E2
