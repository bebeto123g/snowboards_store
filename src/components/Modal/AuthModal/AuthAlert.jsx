import React from 'react'
import { Alert } from 'react-bootstrap'
import styled from 'styled-components'

const AlertCS = styled(Alert)`
  margin: 5px 16px;
`

const AuthAlert = ({children, variant}) => {
  return (
    <AlertCS variant={variant}>
      {children}
    </AlertCS>
  )
}

export default AuthAlert