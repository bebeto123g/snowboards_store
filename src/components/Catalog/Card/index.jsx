import React from 'react'
import PropTypes from 'prop-types'

import { Card } from 'react-bootstrap'
import CatalogCardSlider from './CatalogCardSlider'
import CatalogCardFooter from './CatalogCardFooter'

const CatalogCard = ({
  brand,
  id,
  img,
  name,
  price,
  reserve,
  year,
  inCart,
}) => {
  return (
    <Card>
      <CatalogCardSlider img={img} />
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
      <CatalogCardFooter id={id} reserve={reserve} inCart={inCart} />
    </Card>
  )
}

CatalogCard.propTypes = {
  brand: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  img: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  reserve: PropTypes.number.isRequired,
  inCart: PropTypes.bool.isRequired,
  year: PropTypes.number,
}

export default CatalogCard
