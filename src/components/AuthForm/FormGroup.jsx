import React, { useCallback } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import PropTypes from 'prop-types'

import { Form } from 'react-bootstrap'

import { clearAuthError } from '../../store/auth/authActions'

const FormGroup = ({ type, label, text }) => {
  const { form, error } = useSelector((state) => state.auth, shallowEqual)
  const { isLogin } = useSelector((state) => state.isLogin)
  const dispatch = useDispatch()

  const focusHandler = useCallback(() => {
    dispatch(clearAuthError())
  }, [dispatch])

  return (
    <Form.Group
      controlId={type}
      onFocus={focusHandler}
    >
      <Form.Label>{label}</Form.Label>
      <Form.Control
        required
        type={type}
        placeholder={label}
        isInvalid={error && error[type]}
        isValid={isLogin}
        defaultValue={form[type]}
      />
      {error && error[type] ? (
        <Form.Text className="" style={{ color: 'brown' }}>
          {error[type]}
        </Form.Text>
      ) : (
        <Form.Text className="text-muted">{text}</Form.Text>
      )}
    </Form.Group>
  )
}

FormGroup.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

export default FormGroup
