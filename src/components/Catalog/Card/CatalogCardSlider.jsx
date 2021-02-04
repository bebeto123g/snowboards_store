import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { Carousel } from 'react-bootstrap'
import { CarouselCatalogCard } from '../../../styled/CarouselCatalogCard'

const CatalogCardSlider = ({ img }) => {
  const [index, setIndex] = useState(0)

  return (
    <CarouselCatalogCard
      activeIndex={index}
      onSelect={(selectedIndex) => setIndex(selectedIndex)}
      interval={null}
    >
      {img.map((src) => (
        <Carousel.Item key={src}>
          <img className="d-block w-100" src={src} alt="First slide" />
        </Carousel.Item>
      ))}
    </CarouselCatalogCard>
  )
}

CatalogCardSlider.propTypes = {
  img: PropTypes.array.isRequired,
}

export default CatalogCardSlider
