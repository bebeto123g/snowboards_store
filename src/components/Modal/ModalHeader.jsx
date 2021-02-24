import React from 'react'
import { Modal } from 'react-bootstrap'

const ModalHeader = ({ children }) => {
  return (
    <Modal.Header closeButton>
      <Modal.Title id="contained-modal-title-vcenter">{children}</Modal.Title>
    </Modal.Header>
  )
}

export default ModalHeader
