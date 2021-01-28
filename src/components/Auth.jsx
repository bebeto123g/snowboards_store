import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { login, register } from '../store/auth/authActions'

const Auth = () => {
  const dispatch = useDispatch()

  const [form, setForm] = useState({
    email: '',
    password: '',
  })

  const changeHandler = (e) => {
    setForm({
      ...form,
      [e.target.id]: e.target.value,
    })
  }

  return (
    <>
      <Form>
        <Form.Group controlId="email" onBlur={changeHandler}>
          <Form.Label>Email адрес</Form.Label>
          <Form.Control type="email" placeholder="Email адрес" />
          <Form.Text className="text-muted">
            Никогда не делись своей электронной почтой с кем-либо еще.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="password" onBlur={changeHandler}>
          <Form.Label>Пароль</Form.Label>
          <Form.Control type="password" placeholder="Пароль" />
        </Form.Group>
      </Form>
      <Modal.Footer>
        <Button
          variant="primary"
          type="submit"
          onClick={() => dispatch(login(form))}
        >
          Авторизация
        </Button>
        <Button
          variant="warning"
          type="submit"
          onClick={() => dispatch(register(form))}
        >
          Регистрация
        </Button>
      </Modal.Footer>
    </>
  )
}

export default Auth
