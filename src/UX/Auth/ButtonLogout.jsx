import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import PropTypes from 'prop-types'

import { Button } from 'react-bootstrap'

import { logout } from '../../store/auth/authActions'

const ButtonLogout = ({ variant = 'warning', children }) => {
  const dispatch = useDispatch()

  const handler = useCallback(() => {
    dispatch(logout())
  }, [dispatch])

  return (
    <Button variant={variant} type="button" onClick={handler}>
      {children}
    </Button>
  )
}
ButtonLogout.propTypes = {
  variant: PropTypes.string,
}

export default ButtonLogout
