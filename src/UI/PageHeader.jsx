import React from 'react'
import PropTypes from 'prop-types'

import { Row } from 'react-bootstrap'

const PageHeader = ({ children, color = 'black' }) => {
  return (
    <Row className={`d-flex justify-content-center py-2`}>
      <h1 className="text-center" style={{ color }}>{children}</h1>
    </Row>
  )
}

PageHeader.propTypes = {
  color: PropTypes.string,
}
export default PageHeader
