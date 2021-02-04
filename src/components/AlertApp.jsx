import React, { useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { hideAlert } from '../store/alert/alertActions'
import AlertUI from '../UI/Alert'
import { AppAlert } from '../styled/AppAlert'

const AlertApp = () => {
  const { variant, message, isAlert } = useSelector(
    (state) => state.alert,
    shallowEqual
  )
  const dispatch = useDispatch()

  if (!isAlert) return <>{''}</>

  return (
    <AppAlert>
      <AlertUI
        variant={variant}
        closeAlert={() => dispatch(hideAlert())}
        message={message}
      />
    </AppAlert>
  )
}
export default AlertApp
