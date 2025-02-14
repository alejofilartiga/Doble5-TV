import { StyledWrapper, FrameContainer, ChannelContainer, CastOption } from "../Espn/Premium/premiumStyle"


function Publica() {
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
              src="https://nebunexa.co/cvatt.php?get=Q2FuYWw3"
              allowFullScreen
              scrolling="no"
            />
          </FrameContainer>
        </ChannelContainer>
      </StyledWrapper>
    </>
  )
}

export default Publica
