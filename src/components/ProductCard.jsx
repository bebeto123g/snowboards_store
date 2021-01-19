import React, { useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import PropTypes from 'prop-types'
import CardSlider from '../UI/CardSlider'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, removeFromCart } from '../store/cart/cartActions'

const ProductCard = ({ brand, id, img, name, price, reserve, year }) => {
  const [inCart, setInCart] = useState(false)
  const dispatch = useDispatch()
  const { cart } = useSelector((state) => state.cart)

  useEffect(() => {
    if (cart) {
      Object.keys(cart).forEach((key) => {
        if (key === id) {
          setInCart(true)
        }
      })
    }
  }, [cart, id])

  return (
    <Card>
      <CardSlider img={img} />
      <Card.Body>
        <Card.Title>{brand}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{name}</Card.Subtitle>
        <Card.Text>
          <span>
            <b>Цена:</b> {price} &#8381;
          </span>
          <br />
          <span>
            <b>На складе:</b> {reserve} шт.
          </span>
          <br />
          <span>
            <b>Год:</b> {year}
          </span>
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        {inCart ? (
          <Button
            variant={'danger'}
            onClick={() => {
              dispatch(removeFromCart(id))
              setInCart(false)
            }}
          >
            Удалить из корзины
          </Button>
        ) : (
          <Button
            variant={'success'}
            onClick={() => {
              dispatch(addToCart(id))
              setInCart(true)
            }}
          >
            Добавить в корзину
          </Button>
        )}

        {/*<ProductCartCounter id={id} />*/}
      </Card.Footer>
    </Card>
  )
}

ProductCard.propTypes = {
  brand: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  img: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  reserve: PropTypes.number.isRequired,
  year: PropTypes.number,
}

export default ProductCard
