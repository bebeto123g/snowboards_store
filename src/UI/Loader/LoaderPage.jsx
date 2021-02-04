import React from 'react'
import { Spinner } from 'react-bootstrap'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Loader = styled.div`
  margin-top: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const LoaderPage = ({ variant = 'dark' }) => {
  return (
    <Loader>
      <Spinner animation="grow" variant={variant} />
    </Loader>
  )
}

LoaderPage.propTypes = {
  variant: PropTypes.string,
}

export default LoaderPage
