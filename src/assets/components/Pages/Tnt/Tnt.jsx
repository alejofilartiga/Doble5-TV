import { StyledWrapper, FrameContainer, ChannelContainer, CastOption } from "../Espn/Premium/premiumStyle"

function Tnt() {
  return (
    <StyledWrapper>
      <ChannelContainer>
        <CastOption>OPCION 1</CastOption>
        <FrameContainer>
          <iframe
            name="pc1"
            allow="autoplay *; encrypted-media *;"
            style={{width: '90%', height: '100%', border: '2px'}}
            src="https://nebunexa.co/cvatt.php?get=VE5UX1Nwb3J0c19IRA"
            allowFullScreen
            scrolling="no"
          />
        </FrameContainer>
        <CastOption>OPCION 2</CastOption>
        <FrameContainer>
          <iframe
              name="pc1"
              style={{width: '90%', height: '100%', border: '2px'}}
              src="https://la12hd.com/vivo/canal.php?stream=tntsports"
              allowFullScreen
              scrolling="no"
            />
        </FrameContainer>
        <CastOption>OPCION 3</CastOption>
        <FrameContainer>
          <iframe
              name="pc1"
              style={{width: '90%', height: '100%', border: '2px'}}
              src="https://streamdz1.xyz/player/embed.php?channel=tntar"
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
              src="https://nebunexa.co/extencion.html?get=VE5UX1Nwb3J0c19IRA"
              allowFullScreen
              scrolling="no"
            />
        </FrameContainer>
      </ChannelContainer>
    </StyledWrapper>
  )
}

export default Tnt
