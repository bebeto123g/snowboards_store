import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { Spinner } from 'react-bootstrap'

const Loader = styled.div`
  margin: 167px 0;
  display: flex;
  justify-content: center;
  align-items: center;
`

const LoaderModal = ({ variant = 'dark' }) => {
  return (
    <Loader>
      <Spinner animation="grow" variant={variant} />
    </Loader>
  )
}

LoaderModal.propTypes = {
  variant: PropTypes.string,
}

export default LoaderModal
