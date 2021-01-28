import React from 'react'
import ProductCard from './ProductCard'
import { Button } from 'react-bootstrap'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { removeFromCart } from '../store/cart/cartActions'
import ProductCartCounter from './ProductCartCounter'

const ProductCaleInCart = ({ brand, id, name, price }) => {
  const dispatch = useDispatch()
  return (
    <tr>
      <td>
        {brand} - {name}
      </td>
      <td>{price}</td>
      <td> <ProductCartCounter id={id} /> </td>
      <td>
        <Button variant={'danger'} onClick={() => dispatch(removeFromCart(id))}>
          {' '}
          &#10008;
        </Button>
      </td>
    </tr>
  )
}

ProductCard.propTypes = {
  brand: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
}

export default ProductCaleInCart
