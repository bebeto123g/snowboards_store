import React from 'react'
import { Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { changeAuthForm, clearAuthError } from '../store/auth/authActions'

const Auth = () => {
  const dispatch = useDispatch()
  const { form, error, isLogin } = useSelector(
    (state) => state.auth
  )

  const changeHandler = (e) => {
    dispatch(
      changeAuthForm({
        ...form,
        [e.target.id]: e.target.value
      })
    )
  }

  return (
    <Form>
      <Form.Group
        controlId='email'
        onFocus={() => dispatch(clearAuthError())}
        onBlur={changeHandler}
      >
        <Form.Label>Email адрес</Form.Label>
        <Form.Control
          type='email'
          placeholder='Email адрес'
          defaultValue={form.email}
          isInvalid={error && error.email}
          isValid={isLogin}
        />
        {error && error.email ? (
          <Form.Text className='' style={{ color: 'brown' }}>
            {error.email}
          </Form.Text>
        ) : (
          <Form.Text className="text-muted">
          Никогда не делись своей электронной почтой с кем-либо еще.
          </Form.Text>
          )}
      </Form.Group>

      <Form.Group
        controlId='password'
        onFocus={() => dispatch(clearAuthError())}
        onBlur={changeHandler}
      >
        <Form.Label>Пароль</Form.Label>
        <Form.Control
          type='password'
          placeholder='Пароль'
          defaultValue={form.password}
          isInvalid={error && error.password}
          isValid={isLogin}
        />
        {error && error.password ? (
          <Form.Text className='' style={{ color: 'brown' }}>
            {error.password}
          </Form.Text>
        ) : (
          <Form.Text className="text-muted">
            Никому не передавайте свой пароль
          </Form.Text>
        )}
      </Form.Group>
    </Form>
  )
}

export default Auth
