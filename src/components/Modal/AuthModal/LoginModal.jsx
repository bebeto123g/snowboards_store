import React from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import { login } from '../../store/auth/authActions'
import { hideModal } from '../../store/modal/modalActions'
import { useDispatch } from 'react-redux'

const LoginModal = () => {
  const dispatch = useDispatch()

  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Авторизация
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email адрес</Form.Label>
            <Form.Control type="email" placeholder="Email адрес" />
            <Form.Text className="text-muted">
              Well never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Пароль</Form.Label>
            <Form.Control type="password" placeholder="Пароль" />
          </Form.Group>
          <Modal.Footer>
            <Button
              variant="primary"
              type="submit"
              onClick={() => {
                dispatch(hideModal())
                dispatch(login())
              }}
            >
              Авторизация
            </Button>
            <Button
              variant="primary"
              type="submit"
              onClick={() => {
                dispatch(hideModal())
                dispatch(login())
              }}
            >
              Регистрация
            </Button>
          </Modal.Footer>
        </Form>
      </Modal.Body>
    </>
  )
}

export default LoginModal
