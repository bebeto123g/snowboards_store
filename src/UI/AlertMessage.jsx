import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { hideAlert } from '../store/alert/alertActions'
import AlertUI from './Alert'

const Alert = styled.div`
  margin: 0;
  max-width: 500px;
  position: fixed;
  right: 15px;
  top: 70px;
  z-index: 10000;

  p {
    overflow-x: hidden;
  }
`

const AlertMessage = () => {
  const { variant = 'secondary', message = 'Оказия!' } = useSelector(
    (state) => state.alert
  )
  const dispatch = useDispatch()

  return (
    <Alert>
      <AlertUI
        variant={variant}
        closeAlert={() => dispatch(hideAlert())}
        message={message}
      />
    </Alert>
  )
}
export default AlertMessage
