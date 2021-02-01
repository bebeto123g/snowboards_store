import React from 'react'
import { Modal } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import Auth from '../../Auth'
import ModalLoader from '../ModalLoader'
import AuthAlert from './AuthAlert'
import LoginModalFooter from './LoginModalFooter'

const LoginModal = () => {
  const { loading, error, isLogin, message } = useSelector((state) => state.auth)

  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Авторизация
        </Modal.Title>
      </Modal.Header>

      {error && error.message && (
        <AuthAlert variant={'danger'}>{error.message}</AuthAlert>
      )}
      <Modal.Body>
        {loading ? (
          <ModalLoader />
        ) : isLogin ? (
          <AuthAlert variant={'success'}>{message}</AuthAlert>
        ) : (
          <Auth />
        )}
      </Modal.Body>

      {isLogin || <LoginModalFooter />}
    </>
  )
}

export default LoginModal
