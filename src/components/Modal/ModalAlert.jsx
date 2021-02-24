import React from 'react'
import styled from 'styled-components'

import { Alert } from 'react-bootstrap'

const AlertCS = styled(Alert)`
  margin: 5px 16px;
`

const ModalAlert = ({children, variant = 'secondary'}) => {
  return (
    <AlertCS variant={variant}>
      {children}
    </AlertCS>
  )
}

export default ModalAlert