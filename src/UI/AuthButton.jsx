import React from 'react'
import { showModal } from '../store/modal/modalActions'
import { Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'

const AuthButton = () => {
  const dispatch = useDispatch()
  const { isLogin } = useSelector((state) => state.auth)

  return (
    <Button
      className=""
      variant="warning"
      onClick={() => dispatch(showModal(isLogin ? 'logout' : 'login'))}
    >
      {isLogin ? 'Выйти' : 'Войти'}
    </Button>
  )
}

export default AuthButton