import React, { useCallback } from 'react'

import { Button, Form, Modal } from 'react-bootstrap'

import ButtonShowModal from '../../../UX/Modal/ButtonShowModal'
import ModalHeader from '../../../UI/Modal/ModalHeader'
import AuthFormLogin from '../../AuthForm/AuthFormLogin'
import { createFormObject } from '../../../services/createFormObject'
import { login } from '../../../store/auth/authActions'
import { useDispatch } from 'react-redux'

const ModalLogin = () => {
  const dispatch = useDispatch()

  const handler = useCallback(
    (e) => {
      e.preventDefault()
      const form = createFormObject(e)
      dispatch(login(form))
    },
    [dispatch]
  )

  return (
    <>
      <ModalHeader>Авторизация</ModalHeader>
      <Form onSubmit={handler}>
        <Modal.Body>
          <AuthFormLogin />
        </Modal.Body>
        <Modal.Footer>
          <ButtonShowModal type={'register'} variant={'link'}>
            Регистрация
          </ButtonShowModal>
          <Button type="submit">Авторизация</Button>
        </Modal.Footer>
      </Form>
    </>
  )
}

export default ModalLogin
