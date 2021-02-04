import styled from 'styled-components'
import { Carousel } from 'react-bootstrap'
import prevIcon from '../assets/prev-icon.svg'
import nextIcon from '../assets/next-icon.svg'

export const CarouselCatalogCard = styled(Carousel)`
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

  .carousel-indicators {
    bottom: -40px;

    li {
      background-color: #808080;
      &.active {
        background-color: #000;
      }
    }
  }
`