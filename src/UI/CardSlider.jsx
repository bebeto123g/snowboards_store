import React, { useState } from 'react'
import { Carousel } from 'react-bootstrap'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import prevIcon from '../assets/prev-icon.svg'
import nextIcon from '../assets/next-icon.svg'

const CarouselSC = styled(Carousel)`
  & img {
    height: 400px;
    object-fit: contain;
  }
  
  .carousel-control-prev-icon {
    background-image: url(${prevIcon});
  }
  
  .carousel-control-next-icon {
    background-image: url(${nextIcon});
  }
  
  .carousel-indicators li {
    background-color: #000;
  }
`

const CardSlider = ({ img }) => {
  const [index, setIndex] = useState(0)

  return (
    <CarouselSC
      activeIndex={index}
      onSelect={(selectedIndex) => setIndex(selectedIndex)}
    >
      {img.map((src) => (
        <Carousel.Item key={src}>
          <img className="d-block w-100" src={src} alt="First slide" />
        </Carousel.Item>
      ))}
    </CarouselSC>
  )
}

CardSlider.propTypes = {
  img: PropTypes.array.isRequired,
}

export default CardSlider
