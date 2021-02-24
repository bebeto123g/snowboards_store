import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PropTypes from 'prop-types'

import { TrTableCart } from '../../styled/TrTableCart'
import CounterCart from '../../UX/Cart/CounterCart'
import ButtonRemoveFromCart from '../../UX/Cart/ButtonRemoveFromCart'
import { updateCatalog } from '../../store/catalog/catalogActions'

const CartTableCell = ({ id }) => {
  const { catalog, mapCatalog } = useSelector((state) => state.catalog)
  const dispatch = useDispatch()

  const updateCatalogFromCart = useCallback(() => {
    dispatch(updateCatalog())
  }, [dispatch])

  const index = mapCatalog[id]
  const { brand, price, name } = catalog[index]

  return (
    <TrTableCart>
      <td>
        {brand} - {name}
      </td>
      <td>
        <CounterCart id={id} />
      </td>
      <td>{price} &#8381;</td>

      <td>
        <ButtonRemoveFromCart id={id} callback={updateCatalogFromCart}>
          &#10008;
        </ButtonRemoveFromCart>
      </td>
    </TrTableCart>
  )
}

CartTableCell.propTypes = {
  id: PropTypes.string.isRequired,
}

export default CartTableCell
