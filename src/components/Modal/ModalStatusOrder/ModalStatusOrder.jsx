import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux'

import { Modal } from 'react-bootstrap'

import ModalHeader from '../ModalHeader'
import ButtonHideModal from '../../../UX/Modal/ButtonHideModal'
import ButtonPutStatusOrder from '../../../UX/Order/ButtonPutStatusOrder'
import { hideModal } from '../../../store/modal/modalActions'

const ModalStatusOrder = () => {
  const dispatch = useDispatch()

  const handler = useCallback(() => {
    dispatch(hideModal())
  }, [dispatch])

  return (
    <>
      <ModalHeader>Подтверждение изменения статуса</ModalHeader>
      <Modal.Body>
        Вы уверены, что хотите отменить данный заказ?
      </Modal.Body>
      <Modal.Footer>
        <ButtonHideModal variant={'warning'} className={'mr-auto'}>
          Отмена
        </ButtonHideModal>
        <ButtonPutStatusOrder callback={handler} type={'undo'}>
          Да
        </ButtonPutStatusOrder>
      </Modal.Footer>
    </>
  )
}

export default ModalStatusOrder