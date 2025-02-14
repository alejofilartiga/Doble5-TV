import { StyledWrapper, FrameContainer, ChannelContainer, CastOption } from "../Espn/Premium/premiumStyle"

function Fox() {
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
              src="https://nebunexa.co/cvatt.php?get=Rm94U3BvcnRz"
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
              src="https://la12hd.com/vivo/canal.php?stream=foxsports"
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
              src="https://streamtp2.com/global1.php?stream=fox1ar"
              allowFullScreen
              scrolling="no"
            />
          </FrameContainer>
        </ChannelContainer>
      </StyledWrapper>
    </>
  )
}

export default Fox
