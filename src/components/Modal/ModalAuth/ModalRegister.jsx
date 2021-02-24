import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux'

import { Button, Form, Modal } from 'react-bootstrap'

import AuthFormRegister from '../../AuthForm/AuthFormRegister'
import ButtonShowModal from '../../../UX/Modal/ButtonShowModal'
import ModalHeader from '../ModalHeader'
import { createFormObject } from '../../../services/createFormObject'
import { register } from '../../../store/auth/authActions'

const ModalRegister = () => {
  const dispatch = useDispatch()

  const handler = useCallback(
    (e) => {
      e.preventDefault()
      const form = createFormObject(e)
      dispatch(register(form))
    },
    [dispatch]
  )

  return (
    <>
      <ModalHeader>Регистрация</ModalHeader>
      <Form onSubmit={handler}>
        <Modal.Body>
          <AuthFormRegister />
        </Modal.Body>
        <Modal.Footer>
          <ButtonShowModal type={'login'} variant={'link'}>
            Авторизация
          </ButtonShowModal>
          <Button type="submit">Регистрация</Button>
        </Modal.Footer>
      </Form>
    </>
  )
}

export default ModalRegister
