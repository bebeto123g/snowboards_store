import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Modal } from 'react-bootstrap'

import { hideModal } from '../../store/modal/modalActions'
import { ModalTypes } from './modaTypes'

const ModalApp = () => {
  const dispatch = useDispatch()
  const { show, type } = useSelector((state) => state.modal)

  const hideModalCallback = useCallback(() => {
    dispatch(hideModal())
  }, [dispatch])

  return (
    <Modal
      show={show}
      onHide={hideModalCallback}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      {ModalTypes.map(({ typeModal, Component }) => {
        if (typeModal === type) {
          return <Component key={typeModal} />
        }
      })}
    </Modal>
  )
}

export default ModalApp
