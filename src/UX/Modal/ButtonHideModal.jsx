import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import PropTypes from 'prop-types'

import { Button } from 'react-bootstrap'

import { hideModal } from '../../store/modal/modalActions'

const ButtonHideModal = ({ className, children, variant = 'primary' }) => {
  const dispatch = useDispatch()

  const handler = useCallback(() => {
    dispatch(hideModal())
  }, [dispatch])

  return (
    <Button className={className} variant={variant} onClick={handler}>
      {children}
    </Button>
  )
}

ButtonHideModal.propTypes = {
  variant: PropTypes.string,
  className: PropTypes.string,
}

export default ButtonHideModal
