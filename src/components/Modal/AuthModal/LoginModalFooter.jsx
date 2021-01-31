import React from 'react'
import { Button, Modal } from 'react-bootstrap'
import { login, register } from '../../../store/auth/authActions'
import { useDispatch } from 'react-redux'

const LoginModalFooter = () => {
  const dispatch = useDispatch()
  return (
    <Modal.Footer>
      <Button
        variant="primary"
        type="submit"
        onClick={() => dispatch(login())}
      >
        Авторизация
      </Button>
      <Button
        variant="warning"
        type="submit"
        onClick={() => dispatch(register())}
      >
        Регистрация
      </Button>
    </Modal.Footer>
  )
}

export default LoginModalFooter