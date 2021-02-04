import React from 'react'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'

// import CounterCart from '../../UX/Cart/CounterCart'
import { TrTableCart } from '../../styled/TrTableCart'
import ButtonRemoveFromCart from '../../UX/Cart/ButtonRemoveFromCart'

const CartTableCell = ({ id }) => {
  const { mapCatalog, catalog } = useSelector((state) => state.catalog)

  return (
    <TrTableCart>
      {/*<td>*/}
      {/*  {brand} - {name}*/}
      {/*</td>*/}
      {/*<td>*/}
      {/*  <CounterCart id={id} />*/}
      {/*</td>*/}
      {/*<td>{price} &#8381;</td>*/}

      <td>
        <ButtonRemoveFromCart id={id}>&#10008;</ButtonRemoveFromCart>
      </td>
    </TrTableCart>
  )
}

CartTableCell.propTypes = {
  id: PropTypes.string.isRequired,
}

export default CartTableCell
