import React from 'react'
import { Spinner } from 'react-bootstrap'
import styled from 'styled-components'

const LoaderSC = styled.div`
  margin-top: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Loader = () => {
  return (
    <LoaderSC>
      <Spinner animation="grow" variant="dark" />
    </LoaderSC>
  )
}

export default Loader