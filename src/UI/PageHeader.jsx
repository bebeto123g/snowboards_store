import React from 'react'
import { Row } from 'react-bootstrap'

const PageHeader = ({ children }) => {
  return (
    <Row className="d-flex justify-content-center my-2">
      <h1>{children}</h1>
    </Row>
  )
}

export default PageHeader
