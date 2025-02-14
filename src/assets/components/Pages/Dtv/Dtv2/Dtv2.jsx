import { StyledWrapper, FrameContainer, ChannelContainer, CastOption } from "../../Espn/Premium/premiumStyle";

function Dtv2() {
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
              src="https://streamtp2.com/global1.php?stream=dsports2"
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
              src="https://streamdz1.xyz/player/embed.php?channel=dsports2"
              allowFullScreen
              scrolling="no"
            />
          </FrameContainer>
        </ChannelContainer>
      </StyledWrapper>
    </>
  );
}

export default Dtv2;
