import React from 'react'
import PropTypes from 'prop-types'

import { Alert } from 'react-bootstrap'

const AlertUI = ({ variant = 'secondary', message, closeAlert }) => {
  return (
    <Alert variant={variant} onClose={closeAlert} dismissible>
      <Alert.Heading>Этэншион!</Alert.Heading>
      <p>{message}</p>
    </Alert>
  )
}

AlertUI.propTypes = {
  variant: PropTypes.string,
  message: PropTypes.string.isRequired,
  closeAlert: PropTypes.func.isRequired,
}

export default AlertUI
