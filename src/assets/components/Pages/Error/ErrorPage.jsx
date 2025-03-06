import React from 'react'
import { Link } from 'react-router-dom'
import { ErrorSection, ContainerInfo, Title, Info, Button } from './errorStyle'
function ErrorPage() {
  return (
    <ErrorSection>
      <ContainerInfo>
        <Title>ERROR 404</Title>
        <Info>Esta pagina no existe</Info>
        <Link to={"/"}><Button>Volver a inicio</Button></Link>
      </ContainerInfo>
    </ErrorSection>
  )
}

export default ErrorPage
