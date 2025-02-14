import { StyledWrapper, FrameContainer, ChannelContainer, CastOption } from "../Espn/Premium/premiumStyle"
function Deportv() {
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
              src="https://television-libre.net/html/fl/?get=RGVwb3JUVkhE"
              allowFullScreen
              scrolling="no"
            />
          </FrameContainer>
        </ChannelContainer>
      </StyledWrapper>
    </>
  )
}

export default Deportv
