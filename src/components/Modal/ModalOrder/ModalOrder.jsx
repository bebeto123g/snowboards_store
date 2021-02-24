import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux'

import { Modal } from 'react-bootstrap'

import ModalHeader from '../ModalHeader'
import ButtonOrderCart from '../../../UX/Cart/ButtonOrderCart'
import { hideModal } from '../../../store/modal/modalActions'
import CartSum from '../../Cart/CartSum'
import ButtonHideModal from '../../../UX/Modal/ButtonHideModal'

const ModalOrder = () => {
  const dispatch = useDispatch()

  const handler = useCallback(() => {
    dispatch(hideModal())
  }, [dispatch])

  return (
    <>
      <ModalHeader>Подтверждение заказа</ModalHeader>
      <Modal.Body>
        Отравить заказ на сумму <CartSum />
      </Modal.Body>
      <Modal.Footer>
        <ButtonHideModal variant={'warning'} className={'mr-auto'}>
          Отмена
        </ButtonHideModal>
        <ButtonOrderCart variant={'success'} callback={handler}>
          Заказать
        </ButtonOrderCart>
      </Modal.Footer>
    </>
  )
}

export default ModalOrder
