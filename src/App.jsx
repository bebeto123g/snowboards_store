import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { Container } from 'react-bootstrap'
import { AppContainer } from './styled/AppConteiner'

import SwitchRoutes from './routes/SwitchRoutes'

import NavbarPanel from './components/Navbar/'
import Footer from './components/Footer/'
import ModalApp from './components/Modal/'
import AlertApp from './components/AlertApp'

import { initAuth } from './store/auth/authActions'
import { initCart } from './store/cart/cartActions'


const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initAuth())
  }, [dispatch])

  useEffect(() => {
    dispatch(initCart())

  }, [dispatch])

  return (
    <>
      <NavbarPanel />
      <AppContainer>
        <Container>
          <AlertApp />
          <SwitchRoutes />
        </Container>
      </AppContainer>
      <Footer />

      <ModalApp />
    </>
  )
}

export default App
