import React from 'react'

import PageHeader from '../../UI/PageHeader'
import { Row } from 'react-bootstrap'
import ButtonToRoute from '../../UX/Routes/ButtonToRoute'

const CartEmpty = () => {

  return (
    <>
      <PageHeader>Корзина пуста</PageHeader>
      <Row>
        <ButtonToRoute className="mx-auto" variant={'info'} to={'/catalog'}>
          Перейти в каталог
        </ButtonToRoute>
      </Row>
    </>
  )
}

export default CartEmpty
