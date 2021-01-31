import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Container } from 'react-bootstrap'
import styled from 'styled-components'

import SwitchRoutes from './routes/SwitchRoutes'
import NavbarPanel from './components/Navbar'
import Footer from './components/Footer'
import { initCart } from './store/cart/cartActions'
import AuthModal from './components/Modal/AuthModal/AuthModal'
import { hideModal } from './store/modal/modalActions'
import AlertMessage from './UI/AlertMessage'

const AppContainer = styled.main`
  height: calc(100vh - 126px);
  overflow-y: scroll;

  & > div {
    min-height: 100%;
  }

  @media screen and (min-width: 768px) {
    height: calc(100vh - 100px);
  }
`

const App = () => {
  const dispatch = useDispatch()
  const { show } = useSelector((state) => state.modal)
  const { isAlert } = useSelector((state) => state.alert)


  useEffect(() => {
    dispatch(initCart())
  }, [dispatch])

  return (
    <>
      <NavbarPanel />
      <AppContainer>
        <Container>
          { isAlert && <AlertMessage />}
          <SwitchRoutes />
        </Container>
      </AppContainer>
      <Footer />

      <AuthModal show={show} onHide={() => dispatch(hideModal())} />
    </>
  )
}

export default App
