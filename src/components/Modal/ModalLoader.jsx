import React from 'react'
import { Spinner } from 'react-bootstrap'
import styled from 'styled-components'

const LoaderSC = styled.div`
  margin: 167px 0;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ModalLoader = () => {
  return (
    <LoaderSC>
      <Spinner animation="grow" variant="dark" />
    </LoaderSC>
  )
}

export default ModalLoader