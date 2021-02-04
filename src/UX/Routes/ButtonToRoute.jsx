import React from 'react'
import { useHistory } from 'react-router-dom'
import PropTypes from 'prop-types'

import { Button } from 'react-bootstrap'

const ButtonToRoute = ({
  variant = 'primary',
  children,
  to,
  className = '',
}) => {
  let history = useHistory()

  return (
    <Button
      className={className}
      variant={variant}
      onClick={() => history.push(to)}
    >
      {children}
    </Button>
  )
}

ButtonToRoute.propTypes = {
  to: PropTypes.string.isRequired,
  variant: PropTypes.string,
  className: PropTypes.string,
}
export default ButtonToRoute
