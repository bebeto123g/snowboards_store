import React from 'react'
import { Modal } from 'react-bootstrap'
import Auth from '../../Auth'

const LoginModal = () => {
  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Авторизация
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Auth />
      </Modal.Body>
    </>
  )
}

export default LoginModal
