import { StyledWrapper, FrameContainer, ChannelContainer, CastOption } from "../../Espn/Premium/premiumStyle"

function Fox3() {
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
              src="https://nebunexa.co/cvatt.php?get=Rm94U3BvcnRzM0hE"
              allowFullScreen
              scrolling="no"
            />
          </FrameContainer>
        </ChannelContainer>
      </StyledWrapper>
    </>
  )
}

export default Fox3
