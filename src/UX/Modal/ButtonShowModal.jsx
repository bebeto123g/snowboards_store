import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import PropTypes from 'prop-types'

import { Button } from 'react-bootstrap'
import { showModal } from '../../store/modal/modalActions'

const ButtonShowModal = ({
  className,
  children,
  type,
  variant = 'info',
}) => {
  const dispatch = useDispatch()

  const handler = useCallback(() => {
    dispatch(showModal(type))
  }, [dispatch, type])

  return (
    <Button className={className} variant={variant} onClick={handler}>
      {children}
    </Button>
  )
}

ButtonShowModal.propTypes = {
  variant: PropTypes.string,
  type: PropTypes.string.isRequired,
  className: PropTypes.string,
}

export default ButtonShowModal
