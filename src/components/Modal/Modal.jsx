import React, { lazy, Suspense, useEffect } from 'react'
import { Modal } from 'react-bootstrap'
import Loader from '../../UI/Loader'
import { useSelector } from 'react-redux'

const AuthModal = lazy(() => import('./AuthModal'))
const LogoutModal = lazy(() => import('./LogoutModal'))

const ModalWindow = (props) => {
  const { isLogin } = useSelector(state => state.auth)
  const { type } = useSelector(state => state.modal)

  useEffect(() => {
    console.log(type)
  }, [type])

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Suspense fallback={<Loader />}>
        {
          isLogin ? <LogoutModal /> : <AuthModal />
        }
      </Suspense>
    </Modal>
  )
}

export default ModalWindow
