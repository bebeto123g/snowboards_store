import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Img = styled.img`
  width: 300px;
  margin-bottom: 30px;
`

const BrandsCards = ({ brands }) => {
  return (
    <ul>
      {Object.keys(brands).map((key) => {
        const { description, img, title } = brands[key]
        return (
          <li key={key}>
            <h3>{title}</h3>
            <p>{description}</p>
            <Img src={img} />
            <hr />
          </li>
        )
      })}
    </ul>
  )
}

BrandsCards.propTypes = {
  brands: PropTypes.object.isRequired,
}

export default BrandsCards
