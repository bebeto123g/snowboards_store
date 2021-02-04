import React from 'react'

import { Modal } from 'react-bootstrap'

import ButtonLogout from '../../../UX/Auth/ButtonLogout'
import ButtonHideModal from '../../../UX/Modal/ButtonHideModal'

const ModalLogout = () => {
  return (
    <>
      <Modal.Body>Вы точно хотите выйти из аккаунта?</Modal.Body>
      <Modal.Footer>
        <ButtonLogout variant={'danger'}>ДА</ButtonLogout>
        <ButtonHideModal variant={'success'}>НЕТ</ButtonHideModal>
      </Modal.Footer>
    </>
  )
}

export default ModalLogout
