import React from 'react'
import styled from 'styled-components'
import { Button } from 'react-bootstrap'

const Catalog = styled.div`
  color: cadetblue;
`

const CatalogPage = () => {
  return (
    <Catalog>
      <h1>Catalog page</h1>
      <Button variant={'outline-info'}>Test</Button>
    </Catalog>
  )
}

export default CatalogPage