import React from 'react'
import { Button, Modal } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { hideModal } from '../../../store/modal/modalActions'
import { logout } from '../../../store/auth/authActions'

const LogoutModal = () => {
  const dispatch = useDispatch()

  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Вы точно хотите выйти?
        </Modal.Title>
      </Modal.Header>
      <Modal.Footer>
        <Button onClick={() => {
          dispatch(logout())
        }}>ДА</Button>
        <Button onClick={() => dispatch(hideModal())}>НЕТ</Button>
      </Modal.Footer>
    </>
  )
}

export default LogoutModal