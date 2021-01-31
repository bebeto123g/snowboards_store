import React, { lazy, Suspense } from 'react'
import { Modal } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import ModalLoader from '../ModalLoader'

const LoginModal = lazy(() => import('./LoginModal'))
const LogoutModal = lazy(() => import('./LogoutModal'))

const AuthModal = (props) => {
  const { type } = useSelector((state) => state.modal)

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Suspense fallback={<ModalLoader />}>
        {type === 'login' ? (
          <LoginModal />
        ) : type === 'logout' ? (
          <LogoutModal />
        ) : (
          <ModalLoader />
        )}
      </Suspense>
    </Modal>
  )
}

export default AuthModal
