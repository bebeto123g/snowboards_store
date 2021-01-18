import React from 'react'

import { Container } from 'react-bootstrap'
import styled from 'styled-components'

import SwitchRoutes from './routes/SwitchRoutes'
import NavbarPanel from './components/Navbar'
import Footer from './components/Footer'

const AppContainer = styled.div`
  height: calc(100vh - 126px);
  overflow-y: scroll;
  & > div {
    height: 200vh;
  }
  
  @media screen and (min-width: 768px) {
    height: calc(100vh - 100px);
  }
`

const App = () => {
  return (
    <>
      <NavbarPanel />
      <AppContainer >
        <Container>
          <SwitchRoutes />
        </Container>
      </AppContainer>
      <Footer />
    </>
  )
}

export default App
