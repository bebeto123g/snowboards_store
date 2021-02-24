import React from 'react'
import { useSelector } from 'react-redux'

import { Row } from 'react-bootstrap'

import CartSum from './CartSum'
import ButtonShowModal from '../../UX/Modal/ButtonShowModal'

const CartBottom = () => {
  const { isLogin } = useSelector((state) => state.isLogin)

  if (!isLogin)
    return (
      <Row className="justify-content-end">
        <ButtonShowModal type={'login'} variant={'info'}>
          Войти в систему
        </ButtonShowModal>
      </Row>
    )

  return (
    <Row className="justify-content-between align-items-center">
      <span className="ml-3 h3 font-weight-bolder">
        <CartSum /> &#8381;
      </span>
      <ButtonShowModal type={'order'} variant={'success'}>
        Отправить заказ
      </ButtonShowModal>
    </Row>
  )
}

export default CartBottom
